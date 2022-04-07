import React from "react";

function BookList({ books }) {
  const displayNotes = (books) => {
    if (books.length > 0) {
      return books.map((book, index) => {
        return (
          <li key={book.id} className="li-book">
            <div className="left-part">
              <p>{book.title}</p>
            </div>{" "}
            <div className="right-part">
              <p>{book.author}</p>
              <div className="buttons-container">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </li>
        );
      });
    } else {
      return <li>No books yet</li>;
    }
  };
  return (
    <ul>
      <li className="header-li">
        <h4 className="header-li__title">Title</h4>
        <h4 className="header-li__author">Author</h4>
      </li>
      {displayNotes(books)}
    </ul>
  );
}

export default BookList;
