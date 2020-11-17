const mongoose = require("mongoose");
const booksRouter = require("../routes/booksRouter");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    rating: Number,
    authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// CREATE THE MODEL
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
