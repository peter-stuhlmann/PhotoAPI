const express = require('express');
const v1 = express.Router();
const images = require('./images');

v1.get('/', (req, res) => {
  res.redirect('/v1/images');
});

v1.use('/images', images);

module.exports = v1;
