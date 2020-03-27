const express = require('express');
const v1 = express.Router();
const { Photos } = require('../db/model');

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
          if (amount.match(/[0-9]/g)) {
            return true;
          } else {
            return false;
          }
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

  try {
    Photos.find().then(images =>
      res.json(
        images.filter(img => filterFunction(img, req.query)).slice(0, amount)
      )
    );
  } catch (e) {
    console.log('Error!');
  }
});

v1.get('/images/random', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  try {
    Photos.find().then(images => {
      var min = 0;
      var max = images.length;
      var random = Math.floor(Math.random() * (max - min)) + min;
      return res.json(images[random]);
    });
  } catch (e) {
    console.log('Error!');
  }
});

module.exports = v1;
