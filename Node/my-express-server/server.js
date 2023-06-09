const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>hello</h1>");
});

app.get("/contact", function (req, res) {
    res.send('contact me');
  });

app.get("/about", function (req, res) {
  res.send('Info about me');
});

app.get("/hobbies", function (req, res) {
    res.send('<h1>Here are my hobbies</h1>');
  });

app.listen(3000, function () {
  console.log("started");
});
