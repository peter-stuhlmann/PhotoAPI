const express = require('express');
const v1 = express.Router();
const { images } = require('./model');

v1.get('/', (req, res) => {
  res.redirect('/v1/images');
});

v1.get('/images', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const filterFunction = (image, query) => {
    const keys = Object.keys(query);
    for (const key of keys) {
      if (!image[key]) {
        return false;
      }
      if (Array.isArray(image[key])) {
        const keyArray = image[key].filter(item => item === query[key]);
        if (keyArray.length === 0) {
          return false;
        }
      } else if (image[key].toString() !== query[key]) {
        return false;
      }
    }
    return true;
  };

  if (req.query) {
    return res.json(images.filter(img => filterFunction(img, req.query)));
  }

  return res.json(images);
});

module.exports = v1;
