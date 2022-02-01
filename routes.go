package main

import "net/http"

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

var routes = Routes{
	Route{
		"GetAll",
		"GET",
		"api/multimedia",
		GetAll,
	},
	Route{
		"Create",
		"POST",
		"api/multimedia",
		Create,
	},
	Route{
		"FileUpload",
		"POST",
		"api/uploads/{fileName}",
		FileUpload,
	},
}
