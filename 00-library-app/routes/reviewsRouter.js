const express = require("express");
const reviewsRouter = express.Router();
const Review = require("../models/Reviews.model");

reviewsRouter.post("/add", (req, res, next) => {
  const { bookid } = req.query;
  const { title, review } = req.body;
  Review.create({ title, review, bookid })
    .then((createdBook) => {
      res.redirect("/reviews");
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
});

reviewsRouter.get("/", (req, res, next) => {
  console.log("Pagina add review");
  res.render("Reviews");
});

module.exports = reviewsRouter;
