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
          const libraryId = new ObjectId(searchTerm);
          if (searchType == "name") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ _id : libraryId }).project({ name: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "email") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ _id : libraryId }).project({ email: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "address") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ _id : libraryId }).project({ address: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "phone") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ _id : libraryId }).project({ phone: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "hours") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ _id : libraryId }).project({hours: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "schedule") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ _id : libraryId }).project({ schedule: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "image") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ _id : libraryId }).project({ image: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "links") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('library')
                .find({ _id : libraryId }).project({ links: 1, _id:0});
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
          const bookId = new ObjectId(searchTerm);
          if (searchType == "libraryId") {
                const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ libraryId: 1, _id:0});
                result.toArray().then((lists) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json(lists[0]);
                })
          } else if (searchType == "name") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ name: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "author") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ author: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "publishDate") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ publishDate: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "publishInfo") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ publishInfo: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "isbn") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ isbn: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "format") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ format: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "edition") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ edition: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "description") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ description: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "abstract") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ abstract: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "genre") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ genre: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "status") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ status: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else if (searchType == "image") {
              const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('book')
                  .find({ _id : bookId }).project({ image: 1, _id:0});
                  result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
                  })
          } else {
            getBook;
          }}
    } catch (err) {
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
          const accountId = new ObjectId(searchTerm);
          if (searchType == "libraryId") {
            if (!ObjectId.isValid(searchTerm)) {
                res.status(400).json("ID must be alphanumeric, 24 characters long.");
            } else {
                const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('account')
                  .find({ _id : accountId }).project({ libraryId: 1, _id:0});
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
                .find({ _id : accountId }).project({ firstName: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "lastName") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ _id : accountId }).project({ lastName: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "address") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ _id : accountId }).project({ address: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "phone") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ _id : accountId }).project({ phone: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "books") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ _id : accountId }).project({ books: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "holds") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ _id : accountId }).project({ holds: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
        } else if (searchType == "image") {
            const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('account')
                .find({ _id : accountId }).project({ image: 1, _id:0});
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
          const statusId = new ObjectId(searchTerm);
          if (searchType == "bookId") {
              const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('status')
                .find({ _id : statusId }).project({ bookId: 1, _id:0});
              result.toArray().then((lists) => {
                  res.setHeader('Content-Type', 'application/json');
                  res.status(200).json(lists[0]);
              })
            } else if (searchType == "accountId") {
                const accountId = searchTerm;
                const result = await mongodb
                  .getDb()
                  .db('LibraryServe')
                  .collection('status')
                  .find({ _id : statusId }).project({ accountId: 1, _id:0});
                result.toArray().then((lists) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json(lists[0]);
                })
          } else if (searchType == "checkedOut") {
              const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('status')
                .find({ _id : statusId }).project({ checkedOut: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "returnDate") {
              const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('status')
                .find({ _id : statusId }).project({ returnDate: 1, _id:0});
                result.toArray().then((lists) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(lists[0]);
                })
          } else if (searchType == "checkedIn") {
              const result = await mongodb
                .getDb()
                .db('LibraryServe')
                .collection('status')
                .find({ _id : statusId }).project({ checkedIn: 1, _id:0});
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