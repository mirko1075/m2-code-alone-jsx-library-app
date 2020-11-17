const React = require("react");
const Layout = require("./Layout");

function BookDetails(props) {
  console.log(null);
  return (
    <Layout>
      <h1>{props.oneBook.title}</h1>

      <ul>
        <span>Written by:</span>
        {props.oneBook.authors.map((oneAuthor, i) => {
          return (
            <li key={i}>
              {oneAuthor.name} {oneAuthor.lastName}
            </li>
          );
        })}
      </ul>

      <p>Summary: {props.oneBook.description}</p>

      <p>Rating: {props.oneBook.rating}/10</p>

      <h3>Reviews</h3>
      {props.oneBook.reviews.map((oneReview, i) => {
        return (
          <div id={id}>
            <h4>{oneReview.title}</h4>
            <p>{oneReview.review}</p>
          </div>
        );
      })}

      <a className="return-button" href="/books">
        Return
      </a>
    </Layout>
  );
}

module.exports = BookDetails;