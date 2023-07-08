const { Int32 } = require("mongodb");
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
      const libraryId = new ObjectId(req.params.libraryId);
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
            const phone = parseInt(searchTerm, 32);
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ phone: phone });
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
      const bookId = new ObjectId(req.params.bookId);
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

  const getBookByParameter = async (req, res, next) => {
    try {
        const valid = [
          "libraryId",
          "name",
          "author",
          "publishDate",
          "publishInfo",
          "isbn",
          "format",
          "edition",
          "description",
          "abstract",
          "genre",
          "status",
          "image"
        ];
        const searchType = req.params.parameter;
        if (valid.includes(searchType)) {
          const searchTerm = req.params.bookId;
          if (searchType == "libraryId") {
            if (!ObjectId.isValid(searchTerm)) {
                res.status(400).json("ID must be alphanumeric, 24 characters long.");
            } else {
                const libraryId = new ObjectId(searchTerm);
                const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ libraryIdd : libraryId });
                result.toArray().then((lists) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json(lists[0]);
                })
            }
        } else if (searchType == "name") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ name: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "author") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ author: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "publishDate") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ publishDate: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "publishInfo") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ publishInfo: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "isbn") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ isbn: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "format") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ format: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "edition") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ edition: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "description") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ description: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "abstract") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ abstract: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "genre") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ genre: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "status") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ status: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "image") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('book')
                .find({ image: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else {
          getBook;
        }}
    }  catch (err) {
      res.status(500).json("Book was not found. Try again later.")
    }
  };

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
      const accountId = new ObjectId(req.params.accountId);
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

  const getAccountByParameter = async (req, res, next) => {
        try {
        const valid = [
          "libraryId",
          "firstName",
          "lastName",
          "address",
          "phone",
          "books",
          "holds",
          "image"
        ];
        const searchType = req.params.parameter;
        if (valid.includes(searchType)) {
          const searchTerm = req.params.accountId;
          if (searchType == "libraryId") {
            if (!ObjectId.isValid(searchTerm)) {
                res.status(400).json("ID must be alphanumeric, 24 characters long.");
            } else {
                const libraryId = new ObjectId(searchTerm);
                const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('account')
                  .find({ libraryId: libraryId });
                result.toArray().then((lists) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json(lists[0]);
                })
            }
        } else if (searchType == "firstName") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ firstName: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "lastName") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ lastName: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "address") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ address: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "phone") {
            const phone = parseInt(searchTerm, 32);
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ phone: phone });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "books") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ books: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "holds") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ holds: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "image") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ image: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else {
          getAccount;
        }}
    }  catch (err) {
      res.status(500).json("Account was not found. Try again later.")
    }


  };

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

  const getStatusByParameter = async (req, res, next) => {
    try {
      const valid = [
          "bookId",
          "accountId",
          "checkedOut",
          "returnDate",
          "checkedIn"
        ];
        const searchType = req.params.parameter;
        if (valid.includes(searchType)) {
          const searchTerm = req.params.statusId;
          if (searchType == "bookId") {
            if (!ObjectId.isValid(searchTerm)) {
                res.status(400).json("ID must be alphanumeric, 24 characters long.");
            } else {
                const bookId = searchTerm;
                const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('status')
                  .find({ bookId : bookId });
                result.toArray().then((lists) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json(lists[0]);
                })
            }
          } else if (searchType == "accountId") {
            if (!ObjectId.isValid(searchTerm)) {
                res.status(400).json("ID must be alphanumeric, 24 characters long.");
            } else {
                const accountId = searchTerm;
                const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('status')
                  .find({ accountId : accountId });
                result.toArray().then((lists) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json(lists[0]);
                })
            }
          } else if (searchType == "checkedOut") {
              const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('status')
                .find({ checkedOut: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "returnDate") {
              const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('status')
                .find({ returnDate: searchTerm });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "checkedIn") {
              const checkedIn = Boolean(searchTerm);
              const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('status')
                .find({ checkedIn: checkedIn });
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else {
            getStatus;
          }}
    }  catch (err) {
      res.status(500).json("Status was not found. Try again later.")
    }

  };

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