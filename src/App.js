import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./BookList";
import "./css/App.css";

function App() {
  const [books, setBooks] = useState("");

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
        <div>BookList</div>
        <div>
          <button>+ Add Book</button>
        </div>
      </header>
      <BookList books={books} />
    </div>
  );
}

export default App;
