//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(req, res) {
  console.log("App runs on port 3000");
});
