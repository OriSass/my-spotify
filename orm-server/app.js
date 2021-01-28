const express = require("express");
const app = express();
const morgan = require("morgan");
var bodyParser = require("body-parser");
require("dotenv").config();

app.use(express.static("../client/build"));
app.use(express.json());
app.use(morgan("dev"));
app.use("/login", require("./login"));
app.use("/api", require("./api"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
