import { typography } from "@mui/system"
import { v4 as uuidv4 } from "uuid"

export const request = async (method, body) => {
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    const respons = await fetch('http://localhost:8080/api/content')
    respons = await respons.json()
    console.log("RESPONS: ", respons)

    return respons
}

export const getLocalSitedata = ({ ref, component }) => {
    const images = ref.current.getElementsByTagName("img")
    let urls = Array.from(images).map((img) => img.src)

    // get background images and push into the urls array
    const body = document.querySelector('body')
    const style = window.getComputedStyle(body, false)
    urls.push(style.backgroundImage.slice(4, -1).replace(/"/g, ""))
    urls = [...new Set(urls)]

    // construct site image structure
    let imgs = urls.map((url) => {
        return {
            path: (new URL(url)).pathname,
            filename: url.split('/').pop()
        }
    })

    return {
        _id: uuidv4(),
        component: component,
        images: imgs,
        typographies: {}
    }
}

