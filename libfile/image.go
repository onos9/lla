// Gracefully handle image uploading and thumbnail creation.
package libfile

import (
	"bytes"
	"encoding/base64"
	"fmt"
	"image"
	_ "image/gif"
	"io/ioutil"
	"net/http"
	"strconv"
)

type Image struct {
	Filename    string
	ContentType string
	Data        []byte
	Size        int
}

// Save image to file.
func (i *Image) Save(filename string) error {
	return ioutil.WriteFile(filename, i.Data, 0600)
}

// Convert image to base64 data uri.
func (i *Image) DataURI() string {
	return fmt.Sprintf("data:%s;base64,%s", i.ContentType, base64.StdEncoding.EncodeToString(i.Data))
}

// Write image to HTTP response.
func (i *Image) Write(w http.ResponseWriter) {
	w.Header().Set("Content-Type", i.ContentType)
	w.Header().Set("Content-Length", strconv.Itoa(i.Size))
	w.Write(i.Data)
}

// Limit the size of uploaded files, put this before imageupload.Process.
func LimitFileSize(maxSize int64, w http.ResponseWriter, r *http.Request) {
	r.Body = http.MaxBytesReader(w, r.Body, maxSize)
}

func okContentType(contentType string) bool {
	return contentType == "image/png" || contentType == "image/jpeg" || contentType == "image/gif"
}

// Process uploaded file into an image.
func Process(w http.ResponseWriter, r *http.Request, field string) (*Image, error) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	file, info, err := r.FormFile(field)

	if err != nil {
		return nil, err
	}

	contentType := info.Header.Get("Content-Type")

	if !okContentType(contentType) {
		return nil, fmt.Errorf("wrong content type: %s", contentType)
	}

	bs, err := ioutil.ReadAll(file)

	if err != nil {
		return nil, err
	}

	_, _, err = image.Decode(bytes.NewReader(bs))

	if err != nil {
		return nil, err
	}

	i := &Image{
		Filename:    info.Filename,
		ContentType: contentType,
		Data:        bs,
		Size:        len(bs),
	}

	return i, nil
}
