const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongodb = require("./db/connect");
const { auth } = require("express-openid-connect");

const port = process.env.PORT || 8080;
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app
  .set("views", "views")
  .set("view engine", "ejs")
  .use(auth(config))
  .use(cookieParser())
  .use(express.json())
  .use(express.text())
  .use(express.urlencoded({ extended: false }))
  .use(express.static("public"))
  .use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else if (process.env.NODE_ENV !== "test") {
    app.listen(port);
    // console.log(`Connected to DB and listening on ${port}`);
  }
});

module.exports = app;
