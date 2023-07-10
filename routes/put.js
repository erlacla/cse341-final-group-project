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

// putRoutes.put("/book/:bookId", putController);
// putRoutes.put("/book/:bookId/:param", putController);
// putRoutes.put("/book/bookImage/:bookId", putController);

// putRoutes.put("/account/:accountId", putController);
// putRoutes.put("/account/:accountId/:param", putController);
// putRoutes.put("/account/accountImage/:accountId", putController);

// putRoutes.put("/status/:statusId", putController);
// putRoutes.put("/status/:statusId/:param", putController);

// putRoutes.put("/history/:bookId", putController);

module.exports = putRoutes;
