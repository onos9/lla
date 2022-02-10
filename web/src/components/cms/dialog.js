import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import ImageCropDialog from './imageCropDialog'
import useFirestore from '../../firebase/useFirestore'
import ImagesList from './imageList'
import { Box } from '@mui/material'
import { green } from '@mui/material/colors'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}))

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props

    return (
        <DialogTitle sx={ { m: 0, p: 2 } } { ...other }>
            { children }
            { onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={ onClose }
                    sx={ {
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        color: (theme) => theme.palette.grey[200],
                    } }
                >
                    <CloseIcon />
                </IconButton>
            ) : null }
        </DialogTitle>
    )
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
}

const CropperDialog = ({ remoteData}) => {
    //const { documents } = useFirestore('gallery')
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const [images, setImages] = useState(remoteData)

    const onCancel = () => {
        setSelected(null)
    }

    const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl) => {
        const newImageList = [...images]
        const imageIndex = images.findIndex((x) => x.id === id)
        const image = images[imageIndex]
        const newImage = { ...image, croppedImageUrl, crop, zoom, aspect }
        console.log("NEW-IMAGE: ", newImage)
        newImageList[imageIndex] = newImage

        setImages(newImageList)
        setSelected(null)
    }

    const resetImage = (id) => {
        setCroppedImageFor(id)
    }

    const handleClickOpen = (data) => {
        setSelected(data)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    //console.log(images)

    return (
        <div>
            <ImagesList
                images={ images }
                onOpen={ handleClickOpen }
            />
            <Dialog
                fullWidth={ true }
                maxWidth={ "lg" }
                open={ open }
                onClose={ onCancel }
                aria-labelledby="responsive-dialog-title"

            >
                <DialogTitle>Optional sizes</DialogTitle>
                <DialogContent>
                    <Box
                        noValidate
                        component="form"
                        sx={ {
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        } }
                    >
                        { selected ? (<ImageCropDialog
                            id={ selected.uid }
                            imageUrl={ selected.imageURL }
                            cropInit={ selected.crop }
                            zoomInit={ selected.zoom }
                            aspectInit={ selected.aspect }
                            onCancel={ onCancel }
                            setCroppedImageFor={ setCroppedImageFor }
                            resetImage={ resetImage }
                        />) : null }

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleClose }>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default CropperDialog