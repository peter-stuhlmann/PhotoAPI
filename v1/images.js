const express = require('express');
const images = express.Router();

const Photo = require('../db/model');

images.get('/', (req, res) => {
  res.send('We are on /v1/images.');
});

images.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = images;
