const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  libraryId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  books: {
    type: [String],
    required: true,
  },
  holds: {
    type: [String],
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Acc = mongoose.model("Acc", AccountSchema, "account");

module.exports = Acc;
