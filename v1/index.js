const express = require('express');
const v1 = express.Router();
const { images } = require('../data');

v1.get('/images', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  return res.json(images);
});

v1.get('/images/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  return res.json(images.filter(img => img.id === req.params.id));
});

v1.get('/images/category/:category', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  return res.json(images.filter(img => img.category === req.params.category));
});

module.exports = v1;
