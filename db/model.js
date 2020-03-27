const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  src: String,
});

exports.Photos = mongoose.model('photos', schema);
