const express = require('express');
const images = express.Router();

const Photo = require('../db/model');

images.get('/', async (req, res) => {
  try {
    const photos = await Photo.find();
    const response = photos.map((photo) => {
      const responseObject = {};

      Object.assign(responseObject, {
        id: photo.id,
        src: photo.src,
        alt: photo.alt,
        category: photo.category,
        location: photo.location,
        adultContent: photo.adultContent,
      });

      if (photo.size) {
        Object.assign(responseObject, {
          size: {
            width: photo.size.width,
            height: photo.size.height,
          },
        });
      }

      return responseObject;
    });
    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

images.post('/', async (req, res) => {
  const photo = new Photo({
    src: req.body.src,
    alt: req.body.alt,
    category: req.body.category,
    location: req.body.location,
    adultContent: req.body.adultContent,
    size: req.body.size,
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
