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
	// Route{
	// 	"getAll",
	// 	"GET",
	// 	"/content",
	// 	getAll,
	// },
	// Route{
	// 	"create",
	// 	"POST",
	// 	"/content",
	// 	create,
	// },
	Route{
		"handleUpload",
		"POST",
		"/uploads/{fileName}",
		handleUpload,
	},
}
