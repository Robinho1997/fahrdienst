const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const RideSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name muss angegeben werden"],
    trim: true,
  },
  plätze: {
    type: String,
    required: [true, "Anzahl der verfügbaren Plätze muss angegeben werden."],
    trim: true,
  },
  ort: {
    type: String,
    required: [true, "Ort muss angegeben werden."],
    trim: true,
  },
  datum: {
    type: String,
    required: [true, "Datum muss angegeben werden."],
    trim: true,
  },
  zeit: {
    type: String,
    required: [true, "Zeit muss angegeben werden."],
    trim: true,
  
  },

  info: {
    type: String,
    required: [false],
    trim: true,
    maxLength: [100, "Maximale Zeichenanzahl erreicht"],
  },
});

module.exports = mongoose.model("Ride", RideSchema);
