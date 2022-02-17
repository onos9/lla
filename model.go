package main

type Content struct {
	ID     string      `json:"_id"`
	Name   string      `json:"name"`
	Images []ImageInfo `json:"images"`
}

type ImageInfo struct {
	ID        string `json:"id"`
	Path      string `json:"path"`
	FileName  string `json:"filename"`
	Timestamp string `json:"timestamp"`
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
