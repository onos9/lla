import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Avatar, Tooltip, Typography } from '@mui/material'
import moment from 'moment'
import Options from './options'
import useFirestore from '../../firebase/useFirestore'
import { useAuth } from '../../context/autoContext'
import ImageCropDialog from "./imageCropDialog"

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  }
}

export default function ImagesList() {
  const { currentUser } = useAuth()
  const { documents } = useFirestore('gallery')
  const [selected, setSelected] = useState(null)
  const [images, setImages] = useState(documents)

  const onCancel = () => {
    setSelected(null)
  }

  const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl) => {
    const newImageList = [...images];
    const imageIndex = images.findIndex((x) => x.id === id)
    const image = images[imageIndex]
    const newImage = { ...image, croppedImageUrl, crop, zoom, aspect }
    console.log(newImage)
    newImageList[imageIndex] = newImage

    setImages(newImageList)
    setSelected(null)
  }

  const resetImage = (id) => {
    setCroppedImageFor(id)
  }
  return (
    <>
      { selected ? (<ImageCropDialog
        id={ selected.uid }
        imageUrl={ selected.imageURL }
        cropInit={ selected.crop }
        zoomInit={ selected.zoom }
        aspectInit={ selected.aspect }
        onCancel={ onCancel }
        setCroppedImageFor={ setCroppedImageFor }
        resetImage={ resetImage }
      />
      ) : null }
      <ImageList variant="quilted" cols={ 4 } rowHeight={ 200 } >
        { images.map((item, index) => (
          <ImageListItem
            onClick={ () => setSelected(item?.data) }
            key={ item?.id }
            cols={
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].cols
            }
            rows={
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].rows
            }
            sx={ {
              opacity: '.7',
              transition: 'opacity .3s linear',
              cursor: 'pointer',
              '&:hover': { opacity: 1 },
            } }
          >
            { currentUser?.uid === item?.data?.uid && (
              <Options imageId={ item?.id } />
            ) }
            <img
              { ...srcset(
                item?.data?.imageURL,
                200,
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].rows,
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].cols
              ) }
              alt={ item?.data?.uName || item?.data?.uEmail?.split('@')[0] }
              loading="lazy"
            />
            <Typography
              variant="body2"
              component="span"
              sx={ {
                position: 'absolute',
                bottom: 0,
                left: 0,
                color: 'white',
                background: 'rgba(0,0,0, .3)',
                p: '5px',
                borderTopRightRadius: 8,
              } }
            >
              { moment(item?.data?.timestamp?.toDate()).fromNow() }
            </Typography>
            <Tooltip
              title={ item?.data?.uName || item?.data?.uEmail?.split('@')[0] }
              sx={ {
                position: 'absolute',
                bottom: '3px',
                right: '3px',
              } }
            >
              <Avatar
                src={ item?.data?.uPhoto }
                imgProps={ { 'aria-hidden': true } }
              />
            </Tooltip>
          </ImageListItem>
        ))
        }
      </ImageList >
    </>
  )
}

const pattern = [
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
]