const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const experienceSchema = new Schema(
    {
        experienceId: {
            type: String,
            required: true,
        },
        movie: 
            {
              type: Schema.Types.ObjectId,
              ref: 'Movie'
            }
          ,

        restaurant: 
            {
              type: Schema.Types.ObjectId,
              ref: 'Restaurant'
            }
          ,

        drink: 
            {
              type: Schema.Types.ObjectId,
              ref: 'Drink'
            }
          ,

        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
    },
    {
        toJSON: {
          getters: true
        }
    }
);

const Experience = model('Experience', experienceSchema);

model.exports = Experience;