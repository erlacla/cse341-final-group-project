const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  libraryId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  publishInfo: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  edition: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Book = mongoose.model("Book", BookSchema, "book");

module.exports = Book;
