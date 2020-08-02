const express = require('express');
const images = express.Router();

const Photo = require('../db/model');

images.get('/', (req, res) => {
  res.send('We are on /v1/images.');
});

images.post('/', async (req, res) => {
  const photo = new Photo({
    title: req.body.title,
    src: req.body.src,
  });

  try {
    const savedPhoto = await photo.save();
    res.json(savedPhoto);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = images;
