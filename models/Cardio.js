const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioScehma = new Schema({ 
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "cardio",
        name: String,
        distance: Number,
        duration: Number
      }
    ]
});

const Cardio = mongoose.model("Cardio", CardioScehma);

module.exports = Cardio;