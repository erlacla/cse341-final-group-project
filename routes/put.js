const putRoutes = require("express").Router();
const putController = require("../controllers/put");

putRoutes.put("/library/:libraryId", putController.librarycon);
putRoutes.put("/library/:libraryId/:parameter", putController);
putRoutes.put("/library/libraryImage/:libraryId", putController);

putRoutes.put("/book/:bookId", putController);
putRoutes.put("/book/:bookId/:param", putController);
putRoutes.put("/book/bookImage/:bookId", putController);

putRoutes.put("/account/:accountId", putController);
putRoutes.put("/account/:accountId/:param", putController);
putRoutes.put("/account/accountImage/:accountId", putController);

putRoutes.put("/status/:statusId", putController);
putRoutes.put("/status/:statusId/:param", putController);

putRoutes.put("/history/:bookId", putController);

module.exports = putRoutes;
