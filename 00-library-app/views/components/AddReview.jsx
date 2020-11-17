const React = require("react");

function AddReview(props) {
  return (
    <form action={`/reviews/add?bookid=${props.idOfTheBook}`} method="POST">
      <label>Title</label>
      <input type="text" name="title" />
      <br />

      <label>Comment</label>
      <br />
      <textarea
        name="review"
        id="review"
        cols="30"
        rows="10"
        placeholder="Text goes here"
      ></textarea>
      <br />
      <button className="edit-button" type="submit">
        ADD YOUR REVIEW
      </button>
    </form>
  );
}

module.exports = AddReview;
