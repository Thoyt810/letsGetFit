const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioScehma = new Schema({ 
    exercises: [
      {
        name: String,
        distance: Number,
        duration: Number
      }
    ]
});

const Cardio = mongoose.model("Cardio", CardioScehma);

module.exports = Cardio