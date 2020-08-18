const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exercises: [
    {
      type: String,
      name: String,
      distance: Number,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
})

const Exercises = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;