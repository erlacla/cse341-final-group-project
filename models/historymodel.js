const mongoose = require("mongoose");

const bookHistorySchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true,
  },
  history: {
    statusId: {
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
      required: true,
    },
  },
});

const BookHistory = mongoose.model("BookHistory", bookHistorySchema, "history");

module.exports = BookHistory;
