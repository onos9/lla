import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import Options from './options'
import { Typography } from '@mui/material'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  }
}

export default function ImagesList({ images, name, onOpen }) {
  return (
    <>
      <ImageList variant="quilted" cols={ 4 } rowHeight={ 200 } >
        { images.map((img, index) => (
          <ImageListItem
            onClick={ () => onOpen(img, name) }
            key={ index }
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
            <Options imageId={ img?.id } />
            <img
              { ...srcset(
                img?.path,
                200,
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].rows,
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].cols
              ) }
              alt={ img?.filename }
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
              {/* { moment().format(img?.timestamp).fromNow() } */}
            </Typography>
            {/* <Tooltip
              title={ img?.filename }
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
            </Tooltip> */}
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