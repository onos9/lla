package main

type Content struct {
	ID     string  `json:"_id"`
	Route  string  `json:"route"`
	Images []Image `json:"images"`
}

type Image struct {
	Path     string `json:"path"`
	FileName string `json:"filename"`
}

type Typography struct {
	Text string `json:"text"`
	Key  string `json:"key"`
}

type Response struct {
	Success bool `json:"success"`
	Data    Data `json:"data"`
}

type Data map[string]Content
