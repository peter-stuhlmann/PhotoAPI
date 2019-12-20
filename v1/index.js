const express = require('express');
const v1 = express.Router();
const { images } = require('../data');

v1.get('/images', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.query.id) {
    return res.json(images.filter(img => img.id === parseInt(req.query.id)));
  }

  if (req.query.category) {
    return res.json(images.filter(img => img.category === req.query.category));
  }

  return res.json(images);
});

module.exports = v1;
