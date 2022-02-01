export const InitServer = (component) => {

    images = {}
    const endpoint = `http://localhost:8080/images`;
    let repos = await(await fetch(endpoint)).json()

    if (repos === null) {
        let imgs = homeWrapper.current.getElementsByTagName("img")
        let image_urls = Array.from(imgs).map(img => img.src)
        images[component] = image_urls
        console.log("Images:", images)

        options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(images)
        }
        const respons = await(await fetch('http://localhost:8080/images', options)).json()
        console.log("Respons", respons)

        return respons
    }

}
