const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        //   Required //
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
        // Add ons, not necessarily required //
        distance: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        weight: {
          type: Number
        }
      }
    ]
  });
// Function call //
  workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
      return total + exercises.duration;
    }, 0);
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
// Exporting Workout //
module.exports = Workout;