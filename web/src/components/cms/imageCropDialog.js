import { Button, Slider } from "@mui/material"
import React, { memo, useEffect, useRef, useState } from "react"
import Cropper from "react-easy-crop"
import { blobToFile, getCroppedImg } from "../../helpers/cropImage"
import { request } from "../../helpers/utils"

const ImageCropDialog = memo(({
  id,
  imageUrl,
  aspectInit,
  setCroppedImageFor,
  resetImage,
  onAspect
}) => {

  const fileName = imageUrl.split('/').pop()
  const [image, setImage] = useState(imageUrl)
  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [aspect, setAspect] = useState(aspectInit)

  const inputRef = useRef()

  useEffect(() => {
    console.log(`${window.location.origin}${imageUrl}`)
    const img = document.querySelector(`img[src='${imageUrl}']`)
    console.log('ASPECT-123: ', aspect)
    if (img?.naturalHeight)
    {
      //console.log('ASPECT-123: ', aspect)
      const aspectInit = img.naturalWidth / img.naturalHeight
      setAspect(aspectInit)
      //console.log('ASPECT-098: ', aspectInit)
    }
  })

  const triggerFileSelectPopup = () => {
    inputRef.current.click()
  }

  const onCropChange = (crop) => {
    setCrop(crop)
  }

  const onZoomChange = (zoom) => {
    setZoom(zoom)
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  // const onCrop = async () => {
  //   const croppedImageUrl = await getCroppedImg(image, croppedAreaPixels)
  //   setCroppedImageFor(id, crop, zoom, 1, croppedImageUrl)
  // }

  const onResetImage = (id) => {
    resetImage(id)
  }

  const onUpload = async () => {
    if (!image) return

    const blob = await getCroppedImg(image, croppedAreaPixels)
    setCroppedImageFor(id, crop, zoom, 1, blob)
    const file = blobToFile(blob, fileName)
    console.log("BLOB: ", blob)

    const formdata = new FormData()
    formdata.append("croppedImage", file)


    let resp = await request("/upload", 'POST', {
      body: formdata, type: 'multipart/form-data'
    })

    console.log('RESPONS', resp)
  }

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0)
    {
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.addEventListener("load", () => {
        console.log("ASPECT: ", aspect)
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
          onClick={ () => onResetImage(id) }
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
                id={ id }
                image={ image }
                crop={ crop }
                zoom={ zoom }
                aspect={ aspect }
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