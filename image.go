package main

type Image struct {
	page   string `json:"id"`
	header string `json:"url"`
	footer string `json:"component"`
}

type Images []Image
