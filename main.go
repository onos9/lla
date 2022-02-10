package main

import (
	"context"
	"flag"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"runtime"
	"strings"
	"time"

	"github.com/gorilla/mux"
	"github.com/lla/logs"
)

const (
	DefaultPort = 8080
)

var (
	wait           time.Duration
	port           int64
	rootPath       string
	configFilePath string
)

func parseCmdLineArgs() {
	flag.DurationVar(&wait, "graceful-timeout", time.Second*15,
		"the duration for which the server gracefully wait for existing connections to finish - e.g. 15s or 1m")
	flag.Int64Var(&port, "port", DefaultPort, "The port to listen")
	flag.StringVar(&rootPath, "path", ".", "The path of the md files")
	flag.StringVar(&configFilePath, "c", "conf/app.ini", "The configuration file path")
	flag.Parse()
}

func main() {

	router := mux.NewRouter()

	runtime.GOMAXPROCS(runtime.NumCPU())
	parseCmdLineArgs()
	logs.Debugf("The root path is %s", rootPath)

	api := router.PathPrefix("/api/").Subrouter()

	api.HandleFunc("/content", create).Methods("POST")
	api.HandleFunc("/content", getAll).Methods("GET")

	// Serve static files
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./build/static/"))))

	// Serve index page on all unhandled routes
	router.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./static/index.html")
	})

	router.Use(mux.CORSMethodMiddleware(router))

	if port == 0 {
		port = DefaultPort
	}

	localIps, err := GetLocalIPAddrs()
	if err != nil {
		fmt.Println("Failed to get local ip addresses.")
		return
	}

	httpAddr := fmt.Sprintf(":%d", port)

	srv := &http.Server{
		Handler: router,
		Addr:    httpAddr,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
		IdleTimeout:  time.Second * 60,
	}

	// Run our server in a goroutine so that it doesn't block.
	go func() {
		fmt.Printf("Service listen on port \x1b[31;1m%d\x1b[0m and server ip addresses are \x1b[31;1m%s\x1b[0m\n",
			port, strings.Join(localIps, ", "))

		if err := srv.ListenAndServe(); err != nil {
			fmt.Printf("http.ListendAndServer() failed with %s\n", err)
		}
	}()

	c := make(chan os.Signal, 1)
	// We'll accept graceful shutdowns when quit via SIGINT (Ctrl+C)
	// SIGKILL, SIGQUIT or SIGTERM (Ctrl+/) will not be caught.
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), wait)
	defer cancel()
	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	srv.Shutdown(ctx)
	// Optionally, you could run srv.Shutdown in a goroutine and block on
	// <-ctx.Done() if your application should wait for other services
	// to finalize based on context cancellation.
	fmt.Println("shutting down")
	os.Exit(0)
}
