const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const restaurantSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  url: {
    type: String,
  },
  image_url: {
    type: String,
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant;

