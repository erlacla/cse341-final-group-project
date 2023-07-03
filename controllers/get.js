const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;


// Library
const getLibraryAll = async (req, res, next) => {
    try {
      const result = await mongodb.getDb().db('LibraryServe').collection('library').find();
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      })
    } catch(err){
      res.status(400).json({ message: err });
    };
  };

  const getLibrarySingle = async (req, res, next) => {
    try {
      const libraryId = req.params.libraryId;
      const result = await mongodb
      .getDb()
      .db('LibraryServe')
      .collection('library')
      .find({ _id: libraryId });
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    })
    } catch(err) {
      res.status(400).json({ message: err });
    };
  };

  const getLibraryByParameter = async (req, res, next) => {
    try {
        const valid = [
          "_id",
          "name",
          "email",
          "address",
          "phone",
          "hours",
          "schedule",
          "image",
          "links"
        ];
        const searchType = req.params.parameter;
        if (valid.includes(searchType)) {
          const searchTerm = req.params.libraryId;
          if (searchType == "libraryId") {
            if (!ObjectId.isValid(searchTerm)) {
                res.status(400).json("ID must be alphanumeric, 24 characters long.");
            } else {
                const libraryId = new ObjectId(searchTerm);
                const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('library')
                  .find({ _id : libraryId });
                result.toArray().then((lists) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json(lists[0]);
                })
            }
          } else if (searchType == "name") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ name: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "email") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ email: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "address") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ address: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "phone") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ phone: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "hours") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ hours: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "schedule") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ schedule: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "image") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ image: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "links") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ links: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else {
            getLibraryAll;
          }}
        }  catch (err) {
            res.status(500).json("Library was not found. Try again later.")
        }
  };

  // Book
  const getBook = async (req, res, next) => {
    try {
      const result = await mongodb.getDb().db('LibraryServe').collection('book').find();
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      })
    } catch(err){
      res.status(400).json({ message: err });
    };
  };

  const getBookSingle = async (req, res, next) => {
    try {
      const bookId = req.params.bookId;
      const result = await mongodb
      .getDb()
      .db('LibraryServe')
      .collection('book')
      .find({ _id: bookId });
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    })
    } catch(err) {
      res.status(400).json({ message: err });
    };
  };

  const getBookByParameter = async (req, res, next) => {};

  // Account
  const getAccount = async (req, res, next) => {
    try {
      const result = await mongodb.getDb().db('LibraryServe').collection('account').find();
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      })
    } catch(err){
      res.status(400).json({ message: err });
    };
  };

  const getAccountSingle = async (req, res, next) => {
    try {
      const accountId = req.params.accountId;
      const result = await mongodb
      .getDb()
      .db('LibraryServe')
      .collection('account')
      .find({ _id: accountId });
      result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    })
    } catch(err) {
      res.status(400).json({ message: err });
    };
  };

  const getAccountByParameter = async (req, res, next) => {};

  // Status
  const getStatus = async (req, res, next) => {
    try {
      const result = await mongodb.getDb().db('LibraryServe').collection('status').find();
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      })
    } catch(err){
      res.status(400).json({ message: err });
    };
  };

  const getStatusByParameter = async (req, res, next) => {};

  // History
  const getHistory = async (req, res, next) => {
    try {
      const result = await mongodb.getDb().db('LibraryServe').collection('history').find();
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      })
    } catch(err){
      res.status(400).json({ message: err });
    };
  };

  const getHistorySingle = async (req, res, next) => {
    try {
      const bookId = req.params.bookId;
      const result = await mongodb
      .getDb()
      .db('LibraryServe')
      .collection('history')
      .find({ bookId: bookId });
      result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    })
    } catch(err) {
      res.status(400).json({ message: err });
    };
  };
  
  module.exports = { getLibraryAll, getLibrarySingle, getLibraryByParameter, getBook, getBookSingle, getBookByParameter, getAccount, getAccountSingle, getAccountByParameter, getStatus, getStatusByParameter, getHistory, getHistorySingle };