import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import ImageCropDialog from './imageCropDialog'
import ImagesList from './imageList'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { request } from '../../helpers/utils'

const CropperDialog = () => {
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const [selected, setSelected] = useState(null)
    const [name, setName] = useState()
    const [remoteData, setRemoteData] = useState()
    const [aspect, setAspect] = useState(1)
    const [path, setPath] = useState(null)

    useEffect(() => {
        console.log("NEW-ASPECT: ", aspect)
        fetchData()
    }, [])

    const fetchData = async () => {
        const resp = await request('/content')
        setRemoteData(resp?.data)
        //console.log("REMOTE-DATA: ", resp)
    }

    const onCancel = () => {
        setSelected(null)
    }

    const setCroppedImageFor = (id, crop, zoom, aspect, croppedImageUrl) => {
        const images = remoteData[name].images
        const newImageList = [...images]
        const imageIndex = images.findIndex((img) => img.id === id)
        const image = images[imageIndex]

        const newImage = { ...image, croppedImageUrl, crop, zoom, aspect }
        newImageList[imageIndex] = newImage

        let newData = remoteData[name]
        newData = { ...newData, images: images }
        //console.log("NEW-DATA: ", newData)
        setSelected(null)
    }

    const resetImage = (id) => {
        setCroppedImageFor(id)
    }

    const handleClickOpen = (data, name) => {
        setPath(data?.path)
        console.log("DATA: ", data)
        setSelected(data)
        setName(name)
        setOpen(true)
    }
    const handleClose = () => {
        setCroppedImageFor(selected.id)
        setOpen(false)
    }

    const handleChange = (id) => (event, isExpanded) => {
        setExpanded(isExpanded ? id : null)
    }

    const setAspectRatio = (newAspect) => {
        setAspect(newAspect)
    }

    return (
        <div>
            {
                remoteData && Object.values(remoteData).map((data, index) => (
                    <Accordion
                        key={ index }
                        expanded={ expanded === data?._id }
                        onChange={ handleChange(data?._id) }>
                        <AccordionSummary
                            expandIcon={ <ExpandMore /> }
                            aria-controls="panel4bh-content"
                            id="panel4bh-header">

                            <Typography sx={ { width: '33%', flexShrink: 0 } }>{ data.route }</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ImagesList
                                images={ data.images }
                                name={ data.name }
                                onOpen={ handleClickOpen }
                            />
                        </AccordionDetails>
                    </Accordion>
                ))
            }
            <Dialog
                fullWidth={ true }
                maxWidth={ "lg" }
                open={ open }
                onClose={ onCancel }
                aria-labelledby="responsive-dialog-title"

            >
                <DialogTitle>Image Edit</DialogTitle>
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
                            id={ selected.id }
                            imageUrl={ selected.path }
                            aspectInit={ aspect }
                            onAspect={ setAspectRatio }
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
        </div >
    )
}


export default CropperDialog