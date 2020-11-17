const React = require("react");
const Layout = require("./Layout");
const AddAuthor = require("./components/AddAuthor");
const AddReview = require("./components/AddReview");

function EditBook(props) {
  console.log("props from EditBook page:", props);
  return (
    <Layout>
      <form action={`/books/edit?bookid=${props.oneBook._id}`} method="POST">
        <label>Title:</label>
        <input type="text" name="title" value={props.oneBook.title} />
        <br />

        <label>Author:</label>
        <input
          type="text"
          disabled
          value={props.oneBook.authors.map((oneAuthor, i) => {
            return oneAuthor.name + " " + oneAuthor.lastName;
          })}
        />
        <br />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={props.oneBook.description}
        />
        <br />

        <label>Rate:</label>
        <input type="number" name="rating" value={props.oneBook.rating} />
        <br />

        <button className="edit-button" type="submit">
          EDIT
        </button>
      </form>

      <h3>Add An Author:</h3>

      <AddAuthor idOfTheBook={props.oneBook._id}></AddAuthor>

      <h3>Add a Review:</h3>

      <AddReview idOfTheBook={props.oneBook._id}></AddReview>
    </Layout>
  );
}
module.exports = EditBook;
