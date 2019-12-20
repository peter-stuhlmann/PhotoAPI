const express = require('express');
const v1 = express.Router();
const { images } = require('./model');

v1.get('/images', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.query.id) {
    return res.json(images.filter(img => img.id === parseInt(req.query.id)));
  }

  if (req.query.category) {
    return res.json(images.filter(img => img.category === req.query.category));
  }

  if (req.query.height) {
    return res.json(
      images.filter(img => img.height === parseInt(req.query.height))
    );
  }

  if (req.query.width) {
    return res.json(
      images.filter(img => img.width === parseInt(req.query.width))
    );
  }

  if (req.query.orientation) {
    return res.json(
      images.filter(img => img.orientation === req.query.orientation)
    );
  }

  if (req.query.location) {
    return res.json(images.filter(img => img.location === req.query.location));
  }

  if (req.query.model) {
    return res.json(images.filter(img => img.model === req.query.model));
  }

  return res.json(images);
});

module.exports = v1;
