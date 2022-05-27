const mongoose = require('mongoose');

const { Schema } = mongoose;

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedMovies` array in User.js
const movieSchema = new Schema(
  {
  movieId: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
  image: {
    type: String,
  },
  plot: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  streaming: {
    type: Array,
  }
});

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;