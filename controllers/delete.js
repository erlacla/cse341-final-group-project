const mongodb = require("../db/connect");
const Id = require("mongodb").ObjectId;

const deleteLibrary = async (req, res, next) => {
  try {
    const result = await mongodb
      .getDb()
      .db("LibraryServe")
      .collection("library")
      .deleteMany({}, true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(result.error);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

const deleteLibraryById = async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      const libraryId = new Id(req.params.libraryId);
      if (!Id.isValid(req.params.libraryId)) {
        res.status(400).json("Invalid ID");
      }
      const result = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("library")
        .deleteOne({ _id: libraryId }, true);
      console.log(result);
      if (result.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(401).json("You must login to run this request.");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

const deleteLibraryImage = async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      const libraryId = new Id(req.params.libraryId);
      if (!Id.isValid(req.params.libraryId)) {
        res.status(400).json("Invalid ID");
      }
      const result = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("library")
        .updateOne({ _id: libraryId }, { $set: { image: "N/A" } });
      console.log(result);
      if (result.modifiedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(401).json("You must login to run this request.");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

const deleteBookByID = async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      const bookId = new Id(req.params.bookId);
      if (!Id.isValid(req.params.bookId)) {
        res.status(400).json("Invalid ID");
      }
      const result = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("book")
        .deleteOne({ _id: bookId }, true);
      console.log(result);
      if (result.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(401).json("You must login to run this request.");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

const deleteBookImage = async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      const bookId = new Id(req.params.bookId);
      if (!Id.isValid(req.params.bookId)) {
        res.status(400).json("Invalid ID");
      }
      const result = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("book")
        .updateOne({ _id: bookId }, { $set: { image: "N/A" } });
      console.log(result);
      if (result.modifiedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(401).json("You must login to run this request.");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

const deleteAccountByID = async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      const accountId = new Id(req.params.accountId);
      if (!Id.isValid(req.params.accountId)) {
        res.status(400).json("Invalid ID");
      }
      const result = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("account")
        .deleteOne({ _id: accountId }, true);
      console.log(result);
      if (result.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(401).json("You must login to run this request.");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

const deleteAccountImage = async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      const accountId = new Id(req.params.accountId);
      if (!Id.isValid(req.params.accountId)) {
        res.status(400).json("Invalid ID");
      }
      const result = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("account")
        .updateOne({ _id: accountId }, { $set: { image: "N/A" } });
      console.log(result);
      if (result.modifiedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(401).json("You must login to run this request.");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

const deleteHistoryByID = async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      const historyId = new Id(req.params.historyId);
      if (!Id.isValid(req.params.historyId)) {
        res.status(400).json("Invalid ID");
      }
      const result = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("history")
        .deleteOne({ _id: historyId }, true);
      console.log(result);
      if (result.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(401).json("You must login to run this request.");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

const deleteStatusById = async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      const statusId = new Id(req.params.statusId);
      if (!Id.isValid(req.params.statusId)) {
        res.status(400).json("Invalid ID");
      }
      const result = await mongodb
        .getDb()
        .db("LibraryServe")
        .collection("status")
        .deleteOne({ _id: statusId }, true);
      console.log(result);
      if (result.deletedCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(result.error);
      }
    } else {
      res.status(401).json("You must login to run this request.");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Your request was not able to be processed" });
  }
};

module.exports = {
  deleteLibraryById,
  deleteLibraryImage,
  deleteAccountByID,
  deleteAccountImage,
  deleteBookByID,
  deleteBookImage,
  deleteHistoryByID,
  deleteStatusById,
};
