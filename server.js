const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || "";
const indexRoutes = require("./routes");
const mongodb = require("./db/connect");

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/", indexRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
