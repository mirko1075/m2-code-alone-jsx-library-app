const mongoose = require("mongoose");
const Book = require("./../models/Book.model");
const Author = require("./../models/Author.model");
const books = require("./books-mock-data");
const authors = require("./authors-mock-data");
const reviews = require("./reviews-mock-data");
const Reviews = require("../models/Reviews.model");

//Connection to DB parameters
const DB_NAME = "library";
const DB_CONN_STR = `mongodb://localhost:27017/${DB_NAME}`;

// SEED SEQUENCE

// ESTABILISH DB CONNECTION

mongoose
  .connect(DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log("Connected to DB " + DB_NAME);
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then((databaseDropped) => {
    console.log("Database dropped");

    // Create documents from ARRAY Authors
    const pr = Author.create(authors);
    return pr;
  })
  .then((authorsCreated) => {
    console.log(`Authors ${authorsCreated.length} created`);
    // Creating Books

    const updatedBooks = books.map((bookObj, i) => {
      const author = authorsCreated[i];
      bookObj.authors = [author._id];
      return bookObj;
    });
    const pr = Book.create(updatedBooks);
    return pr;
  })
  .then((createdBooks) => {
    console.log(`Created ${createdBooks.length} books`);
    const updatedReviews = reviews.map((reviewObj, i) => {
      const book = createdBooks[i];
      reviewObj.bookId = [book._id];
      return reviewObj;
    });
    const pr = Reviews.create(updatedReviews);
    return pr;
  })
  .then((createdBooks) => {
    console.log(`Created ${createdBooks.length} books`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
