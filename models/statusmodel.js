const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true,
  },
  accountId: {
    type: String,
    required: true,
  },
  checkedOut: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  checkedIn: {
    type: Boolean,
    default: false,
  },
});

const Status = mongoose.model("Status", StatusSchema, "status");

module.exports = Status;
