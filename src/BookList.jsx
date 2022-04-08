import React from "react";
import axios from "axios";

function BookList({
  books,
  makeModalVisibleHandler,
  setEditBook,
  editBook,
  reload,
  setReload,
}) {
  // Axios DELETE request
  const url = "http://localhost:4000";

  const deleteBook = async (e) => {
    const idOfElement = e.currentTarget.id;
    console.log(idOfElement);
    await axios
      .delete(`${url}/books/${idOfElement}`)
      .then((response) => {
        console.log(response);
        setReload(!reload);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (reload) {
    console.log("reload changed in BookList component");
  }

  const editClickHandler = (e) => {
    makeModalVisibleHandler();
    let bookId = e.currentTarget.id;
    let book = books.filter((obj) => obj.id === bookId)[0];
    console.log(book);

    setEditBook(book);
  };

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
                <button
                  id={book.id}
                  onClick={editClickHandler}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  id={book.id}
                  onClick={deleteBook}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        );
      });
    } else {
      return <li>No books yet</li>;
    }
  };

  // Here we have function to be called when Edit button is clicked

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
