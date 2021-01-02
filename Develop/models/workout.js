const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type in preferred exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Type in exercise name"
        },
        duration: {
          type: Number,
          required: "Type in the exercise duration in minutes"
        },
       
      }
    ]
  });
  