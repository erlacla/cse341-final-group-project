const mongoose = require("mongoose");

const LibSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  links: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Lib = mongoose.model("library", LibSchema, "library");
module.exports = Lib;