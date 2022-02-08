import { Button, Slider } from "@mui/material"
import React, { memo, useRef, useState } from "react"
import Cropper from "react-easy-crop"
import { blobToFile, dataURLtoFile, getCroppedImg } from "../../helpers/cropImage"

const ImageCropDialog = memo(({
  id,
  imageUrl,
  setCroppedImageFor,
  resetImage,
}) => {

  const fileName = imageUrl.split('/').pop()
  const [image, setImage] = useState(imageUrl)
  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const inputRef = useRef()
  const triggerFileSelectPopup = () => inputRef.current.click()

  const onCropChange = (crop) => {
    setCrop(crop)
  }

  const onZoomChange = (zoom) => {
    setZoom(zoom)
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(image, croppedAreaPixels)
    setCroppedImageFor(id, crop, zoom, 1, croppedImageUrl)
  }

  const onResetImage = () => {
    resetImage(id)
  }

  const onUpload = async () => {
    if (!image) return

    try
    {
      const blob = await getCroppedImg(image, croppedAreaPixels)
      setCroppedImageFor(id, crop, zoom, 1, blob)
      console.log("BLOB: ", blob)
      const file = blobToFile(blob, fileName)
      console.log("FILE: ", file)

      //   const formdata = new FormData()
      //   formdata.append("croppedImage", convertedUrlToFile)

      //   let resp = await fetch("http://localhost:9000/api/users/setProfilePic", {
      //     method: "POST",
      //     body: formdata,
      //   })

      //   resp = await res.json()
      //   console.log(resp)

    } catch (err)
    {
      console.warn("UPLOAD-ERROR: ", err.message)
    }
  }

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0)
    {
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.addEventListener("load", () => {
        setImage(reader.result)
      })
    }
  }

  return (
    <div className='crop-dialog'>
      <div className='container-buttons'>
        <input
          type='file'
          accept='image/*'
          ref={ inputRef }
          onChange={ onSelectFile }
          style={ { display: "none" } }
        />

        <Button
          onClick={ () => onResetImage() }
          variant='contained'
          color='primary'
          style={ { marginRight: "10px" } }
        >
          Clear
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={ triggerFileSelectPopup }
          style={ { marginRight: "10px" } }
        >
          Change
        </Button>
        <Button variant='contained' color='secondary' onClick={ onUpload }>
          Upload
        </Button>
      </div>
      <div className='container-cropper'>
        { imageUrl ? (
          <>
            <div className='cropper'>
              <Cropper
                image={ image }
                crop={ crop }
                zoom={ zoom }
                aspect={ 1.4 }
                onCropChange={ onCropChange }
                onZoomChange={ onZoomChange }
                onCropComplete={ onCropComplete }
              />
            </div>

            <div className='slider'>
              <Slider
                min={ 1 }
                max={ 3 }
                step={ 0.1 }
                value={ zoom }
                onChange={ (e, zoom) => setZoom(zoom) }
                color='success'
              />
            </div>
          </>
        ) : null }
      </div>


    </div>

  )
})

export default ImageCropDialog