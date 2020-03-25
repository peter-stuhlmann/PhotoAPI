const express = require('express');
const v1 = express.Router();
const { images } = require('./model');

v1.get('/', (req, res) => {
  res.redirect('/v1/images');
});

v1.get('/images', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  var amount = '10';

  const filterFunction = (image, query) => {
    const keys = Object.keys(query);
    for (const key of keys) {
      if (!image[key]) {
        if (key === 'amount') {
          amount = query[key];
          return true;
        } else {
          return false;
        }
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

  return res.json(
    images.filter(img => filterFunction(img, req.query)).slice(0, amount)
  );
});

v1.get('/images/random', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  var min = 0;
  var max = images.length;
  var random = Math.floor(Math.random() * (max - min)) + min;

  return res.json(images[random]);
});

module.exports = v1;
