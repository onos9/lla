import { v4 as uuidv4 } from "uuid"

export const request = async (method, body = null) => {
    const opt = {
        method: method,
        mode: 'cors',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null
    }

    try
    {
        let resp = await fetch('http://localhost:8080/api/content', opt)
        resp = await resp.json()
        return resp

    } catch (error)
    {
        return error.toString()
    }
}

export const getLocalSitedata = (ref) => {
    console.log(ref)
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
        route: ref.current.localName,
        images: imgs,
        typographies: {}
    }
}

