package main

type SiteData struct {
	ID        string  `json:"_id"`
	Component string  `json:"component"`
	Images    []Image `json:"images"`
	Typographies []Typography `json:"typographies"`
}

type Image struct {
	Path     string `json:"path"`
	FileName string `json:"filename"`
}

type Typography struct {
	Text string `json:"text"`
	key  string `json:"key"`
}

type SiteContent []SiteData
