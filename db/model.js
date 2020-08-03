const mongoose = require('mongoose');

const photoSchema = mongoose.Schema(
  {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    adultContent: {
      type: Boolean,
      default: false,
    },
    size: {
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Photo', photoSchema);
