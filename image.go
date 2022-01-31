package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
)

type Image struct {
	Id        int `json:"id"`
	URL       string `json:"url"`
	Component string `json:"component"`
}

type Images []Image

func (img *Image) InitDir() {
	err := filepath.Walk(".",
		func(path string, info os.FileInfo, err error) error {
			if err != nil {
				return err
			}

			fmt.Println(path, info.Size())
			return nil
		})
	if err != nil {
		log.Println(err)
	}
}

func (img *Image) IsEmpty(name string) (bool, error) {
	f, err := os.Open(name)
	if err != nil {
		return false, err
	}
	defer f.Close()

	_, err = f.Readdirnames(1) // Or f.Readdir(1)
	if err == io.EOF {
		return true, nil
	}
	return false, err // Either not empty or error, suits both cases
}
