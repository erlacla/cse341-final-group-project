const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const createLibrary = async (req, res) => {
  try {
    let failMessage = "";
    const data = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      hours: req.body.hours,
      schedule: req.body.schedule,
      links: req.body.links,
      image: req.body.image,
    };
    if (typeof data.name != "string") {
      failMessage += "To create a new Library, enter a name string.\n";
    }
    if (typeof data.email != "string") {
      failMessage += "To create a new Library, enter an email string.\n";
    }
    if (typeof data.email == "string") {
      const expression = new RegExp(
        /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
      );
      if (!expression.test(data.email)) {
        failMessage += "To create a new Library, enter a valid email.\n";
      }
    }
    if (typeof data.address != "string") {
      failMessage += "To create a new Library, enter an adress string.\n";
    }
    if (
      typeof data.phone == "number" &&
      data.phone != 0 &&
      data.phone.toString().length != 10
    ) {
      failMessage +=
        "To create a new Library, enter a phone number 10 digits long or 0.\n";
    }
    if (typeof data.hours != "string") {
      failMessage += "To create a new Library, enter an hours string.\n";
    }
    if (typeof data.schedule != "string") {
      failMessage += "To create a new Library, enter a schedule string.\n";
    }
    if (typeof data.links != "object") {
      failMessage += "To create a new Library, enter a links object.\n";
    }
    if (typeof data.image != "string") {
      failMessage += "To create a new Library, enter an image string.\n";
    }
    if (failMessage != "") {
      res.status(400);
      res.send(failMessage);
    } else {
      const responce = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("library")
        .insertOne(data);
      if (responce.acknowledged) {
        res.status(201).json(responce);
      } else {
        res
          .status(500)
          .json(
            responce.error ||
              "Something went wrong while creating the Library. Try again later."
          );
      }
    }
  } catch (err) {
    res
      .status(500)
      .json(
        "Something went wrong while creating the Library. Try again later."
      );
  }
};

const createBook = async (req, res) => {
  try {
    let failMessage = "";
    const data = {
      libraryId: req.body.libraryId,
      name: req.body.name,
      author: req.body.author,
      publishDate: req.body.publishDate,
      publishInfo: req.body.publishInfo,
      isbn: req.body.isbn,
      format: req.body.format,
      edition: req.body.edition,
      description: req.body.description,
      abstract: req.body.abstract,
      genre: req.body.genre,
      image: req.body.image,
    };
    if (typeof data.libraryId != "string") {
      failMessage += "To create a new Book, enter a libraryId string.\n";
    }
    if (
      typeof data.libraryId == "string" &&
      !ObjectId.isValid(data.libraryId)
    ) {
      failMessage += "LibraryId must be alphanumeric, 24 characters long.\n";
    }
    if (typeof data.name != "string") {
      failMessage += "To create a new Book, enter a name string.\n";
    }
    if (typeof data.author != "string") {
      failMessage += "To create a new Book, enter an author string.\n";
    }
    if (typeof data.publishDate != "string") {
      failMessage += "To create a new Book, enter a publishDate string.\n";
    }
    if (typeof data.publishInfo != "string") {
      failMessage += "To create a new Book, enter a publishInfo string.\n";
    }
    if (typeof data.isbn != "number") {
      failMessage += "To create a new Book, enter an isbn number.\n";
    }
    if (
      typeof data.isbn == "number" &&
      data.isbn.toString().length != 10 &&
      data.isbn.toString().length != 13
    ) {
      failMessage +=
        "To create a new Book, enter an isbn number of 10 or 13 digits.\n";
    }
    if (typeof data.format != "string") {
      failMessage += "To create a new Book, enter a format string.\n";
    }
    if (typeof data.edition != "string") {
      failMessage += "To create a new Book, enter an edition string.\n";
    }
    if (typeof data.description != "string") {
      failMessage += "To create a new Book, enter a description string.\n";
    }
    if (typeof data.abstract != "string") {
      failMessage += "To create a new Book, enter an abstract string.\n";
    }
    if (typeof data.genre != "string") {
      failMessage += "To create a new Book, enter a genre string.\n";
    }
    if (typeof data.image != "string") {
      failMessage += "To create a new Book, enter an image string.\n";
    }
    if (failMessage != "") {
      res.status(400);
      res.send(failMessage);
    } else {
      const responce = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("book")
        .insertOne(data);
      if (responce.acknowledged) {
        res.status(201).json(responce);
      } else {
        res
          .status(500)
          .json(
            responce.error ||
              "Something went wrong while creating the Book. Try again later."
          );
      }
    }
  } catch (err) {
    res
      .status(500)
      .json("Something went wrong while creating the Book. Try again later.");
  }
};

const createAccount = async (req, res) => {
  try {
    let failMessage = "";
    const data = {
      libraryId: req.body.libraryId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      phone: req.body.phone,
      books: req.body.books,
      holds: req.body.holds,
      image: req.body.image,
    };
    if (typeof data.libraryId != "string") {
      failMessage += "To create a new Account, enter a libraryId string.\n";
    }
    if (
      typeof data.libraryId == "string" &&
      !ObjectId.isValid(data.libraryId)
    ) {
      failMessage += "LibraryId must be alphanumeric, 24 characters long.\n";
    }
    if (typeof data.firstName != "string") {
      failMessage += "To create a new Account, enter a firstName string.\n";
    }
    if (typeof data.lastName != "string") {
      failMessage += "To create a new Account, enter a lastName string.\n";
    }
    if (typeof data.address != "string") {
      failMessage += "To create a new Account, enter an address string.\n";
    }
    if (
      typeof data.phone == "number" &&
      data.phone != 0 &&
      data.phone.toString().length != 10
    ) {
      failMessage +=
        "To create a new Library, enter a phone number 10 digits long or 0.\n";
    }
    if (typeof data.books != "object") {
      failMessage += "To create a new Account, enter a books object.\n";
    }
    if (typeof data.holds != "object") {
      failMessage += "To create a new Account, enter a holds object.\n";
    }
    if (typeof data.image != "string") {
      failMessage += "To create a new Account, enter an image string.\n";
    }
    if (failMessage != "") {
      res.status(400);
      res.send(failMessage);
    } else {
      const responce = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("account")
        .insertOne(data);
      if (responce.acknowledged) {
        res.status(201).json(responce);
      } else {
        res
          .status(500)
          .json(
            responce.error ||
              "Something went wrong while creating the Book. Try again later."
          );
      }
    }
  } catch (err) {
    res
      .status(500)
      .json("Something went wrong while creating the Book. Try again later.");
  }
};

const createStatus = async (req, res) => {
  try {
    let failMessage = "";
    const data = {
      bookId: req.body.bookId,
      accountId: req.body.accountId,
      checkedOut: req.body.checkedOut,
      returnDate: req.body.returnDate,
      checkedIn: req.body.checkedIn,
    };
    if (typeof data.bookId != "string") {
      failMessage += "To create a new Status, enter a bookId string.\n";
    }
    if (
      typeof data.bookId == "string" &&
      !ObjectId.isValid(data.bookId)
    ) {
      failMessage += "BookId must be alphanumeric, 24 characters long.\n";
    }
    if (typeof data.accountId != "string") {
      failMessage += "To create a new Status, enter an accountId string.\n";
    }
    if (
      typeof data.accountId == "string" &&
      !ObjectId.isValid(data.accountId)
    ) {
      failMessage += "AccountId must be alphanumeric, 24 characters long.\n";
    }
    if (typeof data.checkedOut != "string") {
      failMessage += "To create a new Status, enter a checkedOut string.\n";
    }
    if (typeof data.returnDate != "string") {
      failMessage += "To create a new Status, enter a returnDate string.\n";
    }
    if (typeof data.checkedIn != "boolean") {
      failMessage += "To create a new Status, enter a checkedIn boolean value.\n";
    }
    if (failMessage != "") {
      res.status(400);
      res.send(failMessage);
    } else {
      const responce = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("status")
        .insertOne(data);
      if (responce.acknowledged) {
        res.status(201).json(responce);
      } else {
        res
          .status(500)
          .json(
            responce.error ||
              "Something went wrong while creating the Book. Try again later."
          );
      }
    }
  } catch (err) {
    res
      .status(500)
      .json("Something went wrong while creating the Book. Try again later.");
  }
};

const createHistory = async (req, res) => {
  try {
    let failMessage = "";
    const data = {
      bookId: req.body.bookId,
      history: req.body.history,
    };
    console.log(data);
    if (typeof data.bookId != "string") {
      failMessage += "To create a new book History, enter a bookId string.\n";
    }
    if (
      typeof data.bookId == "string" &&
      !ObjectId.isValid(data.bookId)
    ) {
      failMessage += "BookId must be alphanumeric, 24 characters long.\n";
    }
    if (typeof data.history.statusId != "string") {
      failMessage += "To create a new book History, enter a statusId string.\n";
    }
    if (
      typeof data.history.statusId == "string" &&
      !ObjectId.isValid(data.history.statusId)
    ) {
      failMessage += "StatusId must be alphanumeric, 24 characters long.\n";
    }
    if (typeof data.history.accountId != "string") {
      failMessage += "To create a new book History, enter an accountId string.\n";
    }
    if (
      typeof data.history.accountId == "string" &&
      !ObjectId.isValid(data.history.accountId)
    ) {
      failMessage += "AccountId must be alphanumeric, 24 characters long.\n";
    }
    if (typeof data.history.checkedOut != "string") {
      failMessage += "To create a new book History, enter a checkedOut string.\n";
    }
    if (typeof data.history.checkedOut == "string") {
      const expression = new RegExp(
        /\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
      );
      if (!expression.test(data.history.checkedOut)) {
        failMessage += "To create a new book History, enter a checkedOut string date format of YYYY-MM-DD.\n";
      }
    }
    if (typeof data.history.returnDate != "string") {
      failMessage += "To create a new book History, enter a returnDate string.\n";
    }
    if (typeof data.history.returnDate == "string") {
      const expression = new RegExp(
        /\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
      );
      if (!expression.test(data.history.returnDate)) {
        failMessage += "To create a new book History, enter a returnDate string date format of YYYY-MM-DD.\n";
      }
    }
    if (typeof data.history.checkedIn != "boolean") {
      failMessage += "To create a new book History, enter a checkedIn boolean value.\n";
    }
    if (failMessage != "") {
      res.status(400);
      res.send(failMessage);
    } else {
      const responce = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("history")
        .insertOne(data);
      if (responce.acknowledged) {
        res.status(201).json(responce);
      } else {
        res
          .status(500)
          .json(
            responce.error ||
              "Something went wrong while creating the book History. Try again later."
          );
      }
    }
  } catch (err) {
    res
      .status(500)
      .json("Something went wrong while creating the book History. Try again later.");
  }
};

module.exports = { createLibrary, createBook, createAccount, createStatus, createHistory };
