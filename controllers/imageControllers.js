const imageModel = require('../models/imageModel.js');

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    function getRandomLink(data) {
        const randomItem = data.results[Math.floor(Math.random() * data.results.length)];
        const urls = randomItem.urls;
        const urlKeys = Object.keys(urls);
        const randomKey = urlKeys[Math.floor(Math.random() * urlKeys.length)];
        return urls[randomKey];
    }

    let imageUrl = "";
    try{
        const res = await fetch(`https://unsplash.com/napi/search/photos?page=1&per_page=20&query=${searchText}`, {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US",
              "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            "referrer": "https://unsplash.com/s/photos/fish",
            "referrerPolicy": "origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
          });
        const data  = await res.json();
        imageUrl = getRandomLink(data);
        

        await imageModel.create({
            searchText: searchText,
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