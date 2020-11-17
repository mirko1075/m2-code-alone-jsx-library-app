const React = require("react");
const Layout = require("./Layout");

function Books(props) {
  return (
    <Layout>
      <h1>Books Page</h1>
      {props.books.map((bookObj) => {
        return (
          <p className="book-title">
            <a
              href={`/books/edit?bookid=${bookObj._id}`}
              className="edit-button"
            >
              EDIT
            </a>
            <a href={`/books/details/${bookObj._id}`}> {bookObj.title} </a>
          </p>
        );
      })}
    </Layout>
  );
}

module.exports = Books;
