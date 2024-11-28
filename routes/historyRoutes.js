const express = require('express');
const { getSearchHistory } = require('../controllers/historyControllers.js');

const historyRouter = express.Router();

historyRouter.route('/')
                .post(getSearchHistory);


module.exports = historyRouter;
