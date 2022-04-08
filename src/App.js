import React, { useState, useEffect } from "react";

import axios from "axios";
import BookList from "./BookList";
import "./css/App.css";
import "./css/Modal.css";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

function App() {
  const [books, setBooks] = useState([]);
  // For modal to show
  const [show, setShow] = useState(false);

  // Here will be value to edit, because I decided to make editing like this
  const [editBook, setEditBook] = useState({});

  // Here will be a state to reload the App component from child components
  const [reload, setReload] = useState(false);

  if (reload) {
    console.log("reload has been changed");
  }

  const makeModalVisibleHandler = () => {
    setShow(true);
  };

  const onCloseModalHandler = () => {
    setShow(false);
  };

  // Get data from API
  const url = "http://localhost:4000/";

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    axios
      .get(`${url}books`)
      .then((response) => {
        const allBooks = response.data;
        // Add books to the state
        setBooks(allBooks);
      })
      .catch((error) => console.error(`${error}`));
  };

  return (
    <div className="App">
      <header className="app-header">
        <div>
          <h1>BookList</h1>
        </div>
        <div></div>
      </header>
      <BookList
        makeModalVisibleHandler={makeModalVisibleHandler}
        onCloseModalHandler={onCloseModalHandler}
        books={books}
        setEditBook={setEditBook}
        editBook={editBook}
        reload={reload}
        setReload={setReload}
      />

      <AddBook
        books={books}
        setBooks={setBooks}
        reload={reload}
        setReload={setReload}
      />

      <EditBook
        editBook={editBook}
        setEditBook={setEditBook}
        show={show}
        onCloseModalHandler={onCloseModalHandler}
      />
    </div>
  );
}

export default App;
