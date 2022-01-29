package main

import "time"

type Image struct {
	Id        int       `json:"id"`
	Location  string    `json:"location"`
	Path      string    `json:"path"`
	Date      time.Time `json:"date"`
}

type Images []Image

func(img *Image)InitImageDir(){
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
	
