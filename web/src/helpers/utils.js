import moment from "moment"
import { v4 as uuidv4 } from "uuid"

export const request = async (route, method = 'GET', params = {}) => {
    console.log(method + ': ', {route:route, type:params?.type})
    const opt = {
        method: method,
        mode: 'cors',
        header: {
            'Accept': 'multipart/form-data',
            'Accept': 'application/json',
            'Content-Type': params?.type ? params?.type : 'application/json'
        },
        body: JSON.stringify(params?.body)
    }

    try
    {
        let resp = await fetch('http://localhost:8080/api' + route, opt)
        resp = await resp.json()
        return resp

    } catch (error)
    {
        return error.toString()
    }
}

export const getLocalSitedata = (ref) => {
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
            id: uuidv4(),
            path: (new URL(url)).pathname,
            filename: url.split('/').pop(),
            timestamp: moment()
        }
    })

    return {
        _id: uuidv4(),
        name: ref.current.localName,
        images: imgs,
        typography: [],
        videos: [],
        audios: [],
        animations: [],
        docs: [],
        others: []
    }
}

// function getTextNodesIn(node, includeWhitespaceNodes) {
//     var textNodes = [], whitespace = /^\s*$/

//     function getTextNodes(node) {
//         if (node.nodeType == 3)
//         {
//             if (includeWhitespaceNodes || !whitespace.test(node.nodeValue))
//             {
//                 textNodes.push(node)
//             }
//         } else
//         {
//             for (var i = 0, len = node.childNodes.length; i < len; ++i)
//             {
//                 getTextNodes(node.childNodes[i])
//             }
//         }
//     }

//     getTextNodes(node)
//     return textNodes
// }

