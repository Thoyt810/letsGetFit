const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const { Workout } = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

app.get("/stats", (req, res) => {
  res.sendFile(__dirname, "/public/stats.html");
});

app.get("/api/workouts", (req, res) => {
  Workout.find().then((results) => {
    console.log(results);
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
