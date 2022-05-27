const mongoose = require('mongoose');

const { Schema } = mongoose;

const drinkSchema = new Schema({
  drinkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;