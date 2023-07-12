const getRoutes = require("express").Router();
const getController = require("../controllers/get");

// GET requests

// Library requests
getRoutes.get("/library", getController.getLibraryAll);

getRoutes.get("/library/:libraryId", getController.getLibrarySingle);

getRoutes.get("/library/:libraryId/:parameter", getController.getLibraryByParameter);

// Book requests
getRoutes.get("/book", getController.getBook);

getRoutes.get("/book/:bookId", getController.getBookSingle);

getRoutes.get("/book/:bookId/:parameter", getController.getBookByParameter);

// Account requests
getRoutes.get("/account", getController.getAccount);

getRoutes.get("/account/:accountId", getController.getAccountSingle);

getRoutes.get("/account/:accountId/:parameter", getController.getAccountByParameter);

// Status requests
getRoutes.get("/status", getController.getStatus);

getRoutes.get("/status/:statusId/:parameter", getController.getStatusByParameter);

// History requests
getRoutes.get("/history", getController.getHistory);

getRoutes.get("/history/:historyId", getController.getHistorySingle);

module.exports = getRoutes;