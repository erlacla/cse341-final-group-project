const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Database is connected");
});

routes.use("/", require("./swagger"));
routes.use("/", require("./post"));
routes.use("/", require("./put"));

module.exports = routes;
