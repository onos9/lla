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
		"getAll",
		"GET",
		"api/content",
		getAll,
	},
	Route{
		"create",
		"POST",
		"api/content",
		create,
	},
	Route{
		"handleUpload",
		"POST",
		"api/uploads/{fileName}",
		handleUpload,
	},
}
