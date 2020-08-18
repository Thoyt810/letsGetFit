const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    day: new Date().setDate(new Date().getDate()-10),
        exercises: [
          {
            type: "resistance",
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
          }
        ]
})

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;