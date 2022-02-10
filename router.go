package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func NewRouter() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)

	spa := spaHandler{staticPath: "static", indexPath: "index.html"}
	router.PathPrefix("/").Handler(spa).Methods("GET")

	api := router.PathPrefix("/api/").Subrouter()
	//api.Use(CORSMiddleware)
	for _, route := range routes {
		var handler http.Handler

		handler = route.HandlerFunc
		handler = Logger(handler, route.Name)

		api.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(handler)
	}

	return router
}
