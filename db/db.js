const mongoose = require('mongoose');

module.exports = function connectMongo() {
  mongoose.connect(
    'mongodb+srv://<user>:<password>@photo-api-ibixb.mongodb.net/photos?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  );
};
