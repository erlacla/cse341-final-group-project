const putRoutes = require("express").Router();
const putController = require("../controllers/put");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Specify the directory where you want to store the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique file name for the uploaded file
  },
});
const upload = multer({ Storage: storage });

//library
putRoutes.put(
  "/library/image/:libraryId",
  upload.single("image"),
  putController.librarycon.updateimg
);
putRoutes.put(
  "/library/:libraryId/:parameter",
  putController.librarycon.updateLibparam
);
putRoutes.put("/library/:libraryId", putController.librarycon.updateLib);

//book
putRoutes.put(
  "/book/image/:bookId",
  upload.single("image"),
  putController.bookcon.updatebookimg
);
putRoutes.put("/book/:bookId/:parameter", putController.bookcon.updatebookparam);
putRoutes.put("/book/:bookId", putController.bookcon.updatebook);

//account
putRoutes.put(
  "/account/image/:accountId",
  upload.single("image"),
  putController.accountcon.updateaccountimg
);
putRoutes.put(
  "/account/:accountId/:parameter",
  putController.accountcon.updateaccountparam
);
putRoutes.put("/account/:accountId", putController.accountcon.updateaccount);

//status
putRoutes.put("/status/:statusId", putController.statuscon.updatestatus);
putRoutes.put(
  "/status/:statusId/:parameter",
  putController.statuscon.updatestatusparam
);

//
putRoutes.put("/history/:historyId", putController.historycon.updatestatus);

module.exports = putRoutes;
