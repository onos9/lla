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
		"ImageIndex",
		"GET",
		"/images",
		ImageIndex,
	},
	Route{
		"ImageCreate",
		"POST",
		"/images",
		ImageCreate,
	},
	Route{
		"ImageShow",
		"GET",
		"/images/{imageId}",
		ImageShow,
	},
}
