const React = require("react");

function AddAuthor(props) {
  return (
    <form action={`/reviews/add?bookid=${props.idOfTheBook}`} method="POST">
      <label>Name:</label>
      <input type="text" name="name" />
      <br />

      <label>Last Name:</label>
      <input type="text" name="lastName" />
      <br />

      <label>Nationality:</label>
      <input type="text" name="nationality" />
      <br />

      <label>Birthday:</label>
      <input type="date" name="birthday" />
      <br />

      <label>Picture URL:</label>
      <input type="text" name="pictureUrl" />
      <br />

      <button className="edit-button" type="submit">
        ADD
      </button>
    </form>
  );
}

module.exports = AddAuthor;
