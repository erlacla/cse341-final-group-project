const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();
app.use(express.text());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app
  .use(cookieParser())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else if (process.env.NODE_ENV !== 'test') {
    app.listen(port);
    // console.log(`Connected to DB and listening on ${port}`);
  }
});

module.exports = app;
