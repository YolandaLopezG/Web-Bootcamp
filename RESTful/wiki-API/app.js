const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose
  .connect("mongodb://127.0.0.1:27017/wikiDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`CONNECTED TO MONGO!`);
  })
  .catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
  });

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", articleSchema);

// FOR ALL ARTICLES

app
  .route("/articles")
  .get(function (req, res) {
    Article.find({})
      .then(function (articles) {
        res.send(articles);
      })
      .catch(function (err) {
        console.log(err);
      });
  })
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle
      .save()
      .then(function () {
        res.send("Successfully added a new article.");
      })
      .catch(function (err) {
        res.send(err);
      });
  })
  .delete(function (req, res) {
    Article.deleteMany()
      .then(function () {
        res.send("All records were deleted");
      })
      .catch(function (err) {
        res.send(err);
      });
  });

// FOR SPECIFIC ARTICLES

app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle })
      .then(function (foundArticle) {
        if (foundArticle) {
          res.send(foundArticle);
        } else {
          res.send("No articles matching");
        }
      })
      .catch(function (err) {
        res.send(err);
      });
  })
  .put(function (req, res) {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content }
    )
      .then(function () {
        res.send("Article updated");
      })
      .catch(function (err) {
        res.send(err);
      });
  })
  .patch(function (req, res) {
    Article.updateOne({ title: req.params.articleTitle }, { $set: req.body })
      .then(function () {
        res.send("Article updated");
      })
      .catch(function (err) {
        res.send(err);
      });
  })
  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle })
      .then(function () {
        res.send("Record successfully deleted");
      })
      .catch(function (err) {
        res.send(err);
      });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
