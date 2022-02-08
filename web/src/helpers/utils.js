
export const request = async (method, body) => {
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    const respons = await fetch('http://localhost:8080/api/' + body.component, options)
    respons = await respons.json()
    console.log("RESPONS: ", respons)

    return respons
}

export const getLocalSitedata = (main) => {
    let images = main.current.getElementsByTagName("img")
    let img = Array.from(images).map((img) => {
        return {
            src: img.src,
            alt: img.alt
        }
    })
    img = [...new Map(img.map(item => [item['src'], item])).values()]
    console.log("IMAGE: ", img)
    return img
}

