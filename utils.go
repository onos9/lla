package main

import (
	"log"
	"net"
)

func GetLocalIPAddrs() ([]string, error) {
	addrs, err := net.InterfaceAddrs()
	if err != nil {
		log.Println(err)
		return []string{}, err
	}

	ips := make([]string, 0)
	for _, address := range addrs {
		// check the address type and if it is not a loopback the display it
		if ipnet, ok := address.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
			if ipnet.IP.To4() != nil {
				ips = append(ips, ipnet.IP.String())
			}
		}
	}
	return ips, nil
}

// func corsRoute(app *app.App) {
// 	allowedHeaders := "Accept, Content-Type, Content-Length, Accept-Encoding, Authorization,X-CSRF-Token"
	
// 	f := func(w http.ResponseWriter, r *http.Request) {
// 		if origin := r.Header.Get("Origin"); origin != "" {
// 			w.Header().Set("Access-Control-Allow-Origin", "*")
// 			w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
// 			w.Header().Set("Access-Control-Allow-Headers", allowedHeaders)
// 			w.Header().Set("Access-Control-Expose-Headers", "Authorization")
// 		}
// 		return
// 	}
// 	app.Router.Options("/*p", f, publicRouteConstraint)
// }