import React, { useState } from "react"
import Cropper from "react-easy-crop"
import { dataURLtoFile, getCroppedImg } from "../../helpers/cropImage"

const aspectRatios = [
  { value: 4 / 3, text: "4/3" },
  { value: 16 / 9, text: "16/9" },
  { value: 1 / 2, text: "1/2" },
]

const ImageCropDialog = ({
  id,
  imageUrl,
  cropInit,
  zoomInit,
  aspectInit,
  onCancel,
  setCroppedImageFor,
  resetImage,
}) => {

  zoomInit = zoomInit ? zoomInit : 1
  cropInit = cropInit ? cropInit : { x: 0, y: 0 }
  aspectInit = aspectInit ? aspectInit : aspectRatios[0]

  //console.log(aspectInit)

  const [zoom, setZoom] = useState(zoomInit)
  const [crop, setCrop] = useState(cropInit)
  const [aspect, setAspect] = useState(aspectInit)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropChange = (crop) => {
    setCrop(crop)
  }

  const onZoomChange = (zoom) => {
    setZoom(zoom)
  }

  const onAspectChange = (e) => {
    const value = e.target.value
    const ratio = aspectRatios.find((ratio) => ratio.value == value)
    setAspect(ratio)
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(imageUrl, croppedAreaPixels)
    setCroppedImageFor(id, crop, zoom, aspect, croppedImageUrl)
  }

  const onResetImage = () => {
    resetImage(id)
  }

  const onUpload = async (image, croppedArea) => {
    if (!image) return

    const canvas = await getCroppedImg(image, croppedArea)
    const canvasDataUrl = canvas.toDataURL("image/jpeg")
    const convertedUrlToFile = dataURLtoFile(canvasDataUrl, "cropped-image.jpeg")

    // http://localhost:9000/api/users/setProfilePic
    // console.log(convertedUrlToFile);

    try
    {
      const formdata = new FormData()
      formdata.append("croppedImage", convertedUrlToFile)

      const res = await fetch("http://localhost:9000/api/users/setProfilePic", {
        method: "POST",
        body: formdata,
      })

      res = await res.json()
      console.log(res)
    } catch (err)
    {
      console.warn(err)
    }
  }

  return (
    <div className="backdrop row">
      <div className="controls-button row">
        <div className="button-area col-md-4">
          <button onClick={ onCancel }>Cancel</button>
          <button onClick={ onResetImage }>Reset</button>
          <button onClick={ onCrop }>Crop</button>
        </div>
      </div>
      <div className="crop-container row">
        <Cropper
          image={ imageUrl }
          zoom={ zoom }
          crop={ crop }
          aspect={ aspect.value }
          onCropChange={ onCropChange }
          onZoomChange={ onZoomChange }
          onCropComplete={ onCropComplete }
        />
      </div>
      <div className="controls-slider row">
        <input
          type="range"
          min={ 1 }
          max={ 3 }
          step={ 0.1 }
          value={ zoom }
          onInput={ (e) => {
            onZoomChange(e.target.value)
          } }
          className="slider"
        >
        </input>
        <select onChange={ onAspectChange }>
          { aspectRatios.map((ratio) => (
            <option
              key={ ratio.text }
              value={ ratio.value }
              defaultValue={ ratio.value === aspect.value }
            >
              { ratio.text }
            </option>
          )) }
        </select>
      </div>
    </div>
  )
}

export default ImageCropDialog