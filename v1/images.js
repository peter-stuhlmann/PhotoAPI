const express = require('express');
const images = express.Router();

const Photo = require('../db/model');

images.get('/', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (err) {
    res.json({ message: err });
  }
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

images.delete('/:id', async (req, res) => {
  try {
    const removedPhoto = await Photo.remove({ _id: req.params.id });
    res.json(removedPhoto);
  } catch (err) {
    req.json({ message: err });
  }
});

module.exports = images;
