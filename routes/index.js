const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Database is connected');
});

module.exports = routes;
