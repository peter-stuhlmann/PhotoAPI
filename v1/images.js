const express = require('express');
const images = express.Router();

const Photo = require('../db/model');

images.get('/', async (req, res) => {
  try {
    const photos = await Photo.find(req.query);
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

      if (photo.size.width || photo.size.height) {
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

images.get('/random', async (req, res) => {
  try {
    const photos = await Photo.find(req.query);

    const min = 0;
    const max = photos.length;
    const random = Math.floor(Math.random() * (max - min)) + min;

    const response = {};

    Object.assign(response, {
      id: photos[random].id,
      src: photos[random].src,
      alt: photos[random].alt,
      category: photos[random].category,
      location: photos[random].location,
      adultContent: photos[random].adultContent,
    });

    if (photos[random].size.width || photos[random].size.height) {
      Object.assign(response, {
        size: {
          width: photos[random].size.width,
          height: photos[random].size.height,
        },
      });
    }

    res.json(response);
  } catch (err) {
    res.json({ message: err });
  }
});

images.get('/:id', async (req, res) => {
  try {
    const photo = await Photo.find({ _id: req.params.id });
    const response = {};

    Object.assign(response, {
      id: photo[0].id,
      src: photo[0].src,
      alt: photo[0].alt,
      category: photo[0].category,
      location: photo[0].location,
      adultContent: photo[0].adultContent,
    });

    if (photo[0].size.width || photo[0].size.height) {
      Object.assign(response, {
        size: {
          width: photo[0].size.width,
          height: photo[0].size.height,
        },
      });
    }

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
