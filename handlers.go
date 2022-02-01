package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/mux"
)

// spaHandler implements the http.Handler interface, so we can use it
// to respond to HTTP requests. The path to the static directory and
// path to the index file within that static directory are used to
// serve the SPA in the given static directory.
type spaHandler struct {
	staticPath string
	indexPath  string
}

var images Categories

const MAX_UPLOAD_SIZE = 1024 * 1024 // 1MB

func GetAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(images); err != nil {
		panic(err)
	}
}

func Create(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)

	var c Category
	err := decoder.Decode(&c)
	if err != nil {
		panic(err)
	}

	images := append(images, c)
	fmt.Println(images)
}

// This function returns the filename(to save in database) of the saved file
// or an error if it occurs
func FileUpload(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// MultipartReader parses a request body as multipart/form-data with a MAX_UPLOAD_SIZE
	r.Body = http.MaxBytesReader(w, r.Body, MAX_UPLOAD_SIZE)
	mr, err := r.MultipartReader()
	if err != nil {
		http.Error(w, "The uploaded file is too big. Please choose an file that's less than 1MB in size", http.StatusBadRequest)
		return
	}

	// This is path which we want to store the file with file permision 0666 or 0755 or 0644
	dst, err := os.OpenFile("./web/public/"+params["fileName"], os.O_WRONLY|os.O_CREATE, 0644)
	if err != nil {
		return
	}

	defer dst.Close()

	length := r.ContentLength
	for {

		part, err := mr.NextPart()
		if err == io.EOF {
			break
		}

		var read int64
		var p float32

		for {
			buffer := make([]byte, 100000)

			cBytes, err := part.Read(buffer)
			if err == io.EOF {
				break
			}

			read = read + int64(cBytes)
			//fmt.Printf("read: %v \n",read )
			p = float32(read) / float32(length) * 100
			fmt.Printf("progress: %v \n", p)
			dst.Write(buffer[0:cBytes])
		}
	}

	fmt.Fprintf(w, "Upload successful")
}

// func ImageShow(w http.ResponseWriter, r *http.Request) {
// 	vars := mux.Vars(r)

// 	var imageId int
// 	var err error
// 	if imageId, err = strconv.Atoi(vars["imageId"]); err != nil {
// 		panic(err)
// 	}

// 	image := RepoFindImage(imageId)
// 	// bulundu mu kontrol
// 	if image.Id > 0 {
// 		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
// 		w.WriteHeader(http.StatusOK)
// 		if err := json.NewEncoder(w).Encode(image); err != nil {
// 			panic(err)
// 		}
// 		return
// 	}

// 	// 404
// 	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
// 	w.WriteHeader(http.StatusNotFound)
// 	if err := json.NewEncoder(w).Encode(jsonErr{Code: http.StatusNotFound, Text: "Not Found"}); err != nil {
// 		panic(err)
// 	}

// }

/*test:
curl \
  -F "uploadfile=@DOSYA" \
  -F "location=santa' secret shop" \
  localhost:8080/images
*/
// func ImageCreate(w http.ResponseWriter, r *http.Request) {
// 	r.ParseMultipartForm(32 << 20)

// 	file, handler, err := r.FormFile("uploadfile")
// 	if err != nil {
// 		panic(err)
// 	}

// 	defer file.Close()

// 	f, err := os.OpenFile("./uploads/"+handler.Filename, os.O_WRONLY|os.O_CREATE, 0666)
// 	if err != nil {
// 		panic(err)
// 	}

// 	defer f.Close()

// 	io.Copy(f, file)

// 	//t := RepoCreateImage(Image{Date: time.Now()})

// 	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
// 	w.WriteHeader(http.StatusCreated)
// 	if err := json.NewEncoder(w).Encode(Image{}); err != nil {
// 		panic(err)
// 	}
// }

// ServeHTTP inspects the URL path to locate a file within the static dir
// on the SPA handler. If a file is found, it will be served. If not, the
// file located at the index path on the SPA handler will be served. This
// is suitable behavior for serving an SPA (single page application).
func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	w.WriteHeader(http.StatusOK)

	// get the absolute path to prevent directory traversal
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		// if we failed to get the absolute path respond with a 400 bad request
		// and stop
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// prepend the path with the path to the static directory
	path = filepath.Join(h.staticPath, path)

	// check whether a file exists at the given path
	_, err = os.Stat(path)
	if os.IsNotExist(err) {
		// file does not exist, serve index.html
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		// if we got an error (that wasn't that the file doesn't exist) stating the
		// file, return a 500 internal server error and stop
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}
