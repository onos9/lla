export const InitServer = (component) => {

    media = {}
    const endpoint = `http://localhost:8080/images`;
    let repos = await fetch(endpoint)
    repos = await repos.json()
    if (repos === null) {
        let imgs = homeWrapper.current.getElementsByTagName("img")
        let m_urls = Array.from(imgs).map(img => img.src)
        media[component] = image_urls
        console.log("Images:", media)

        options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(media)
        }
        const respons = await(await fetch('http://localhost:8080/images', options)).json()
        console.log("Respons", respons)

        return respons
    }

}

export const initMediaUpload = (e) => {
        e.preventDefault();

        // construct the form data and apply new file name
        var file = e.get(0).files[0];

        var newFileName = file.filename + "new";
        var formData = new FormData();
        formData.append('file', file, newFileName);

        options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(images)
        }
        const respons = await fetch('http://localhost:8080/api/uploads/' + newFileName, options)
        respons = await respons.json()
        console.log("Respons", respons)

        return respons
}

