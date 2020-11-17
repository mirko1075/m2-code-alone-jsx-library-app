const express = require("express");
const authorRouter = express.Router();
const Book = require("./../models/Book.model");
const Author = require("./../models/Author.model");
const { model } = require("mongoose");

authorRouter.post("/add", (req, res, next) => {
  const { bookid } = req.query;
  const { name, lastName, nationality, birthday, pictureUrl } = req.body;

  //CREATING AUTHOR
  Author.create({ name, lastName, nationality, birthday, pictureUrl })
    .then((createdAuthor) => {
      // Then we update the book we are editing

      const pr = Book.findByIdAndUpdate(
        bookid,
        { $push: { authors: createdAuthor._id } },
        { new: true }
      );

      return pr;
    })
    .then((updatedBook) => {
      res.redirect(`/books/details/${updatedBook._id}`);
    })
    .catch((error) => console.log(error));
});

module.exports = authorRouter;
