const postRoutes = require("express").Router();
const postController = require("../controllers/post");

// POST/Update requests
postRoutes.post("/library", postController.createLibrary);

postRoutes.post("/book", postController.createBook);

postRoutes.post("/account", postController.createAccount);

postRoutes.post("/status", postController.createStatus);

postRoutes.post("/history", postController.createHistory);

module.exports = postRoutes;
