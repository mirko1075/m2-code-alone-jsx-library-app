const mongoose = require("mongoose");
const ReviewssRouter = require("../routes/reviewsRouter");
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema(
  {
    title: String,
    review: String,
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
const Reviews = mongoose.model("Reviews", ReviewsSchema);
module.exports = Reviews;
