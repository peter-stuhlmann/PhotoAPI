const mongoose = require('mongoose');

module.exports = function connectMongo() {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@photo-api-ibixb.mongodb.net/photos?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );
};
