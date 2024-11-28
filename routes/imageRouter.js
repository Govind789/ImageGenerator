const express = require('express');
const ImageRouter = express.Router();
const {generateImage} = require('../controllers/imageControllers.js');

ImageRouter.route('/')
    .post(generateImage);

module.exports = ImageRouter;

