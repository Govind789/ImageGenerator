const imageModel = require('../models/imageModel.js');

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    // function getRandomLink(data) {
    //     const randomItem = data.results[Math.floor(Math.random() * data.results.length)];
    //     const urls = randomItem.urls;
    //     const urlKeys = Object.keys(urls);
    //     const randomKey = urlKeys[Math.floor(Math.random() * urlKeys.length)];
    //     return urls[randomKey];
    // }

    let imageUrl = "";
    try{
        const res = await fetch(`https://api.unsplash.com/photos/random?query=${searchText}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);

        const imageUrl  = res.url;
        // imageUrl = getRandomLink(data);

        await imageModel.create({
            searchText: searchText,
            url : imageUrl
        });
    }
    
    catch(err){
        console.log(err);
        return res.status(500).json({
            status: 'error',
            message: 'An error occurred while generating the image'
        });
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageModel.imageUrl,
            createdAt: imageModel.createdAt,
        }
    })
}

module.exports = {
    generateImage
}