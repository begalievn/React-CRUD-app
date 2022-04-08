import React, { useState } from "react";
import axios from "axios";

function AddBook({ books, setBooks, reload, setReload }) {
  // url
  const url = "http://localhost:4000";

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="form-container">
      <h3>Add Book</h3>
      <form>
        <label htmlFor="title">Title of the Book</label>
        <input
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
          type="text"
          name="title"
          value={title}
        />
        <br></br>
        <label htmlFor="author">Author</label>
        <input
          onChange={(e) => {
            setAuthor(e.currentTarget.value);
          }}
          type="text"
          name="author"
          value={author}
        />
        <br></br>
        <input
          onClick={async (e) => {
            e.preventDefault();
            let data = {};
            data["title"] = title;
            data["author"] = author;

            if (data["title"] !== "" && data["author"] !== "") {
              await axios.post(`${url}/books`, data).then((response) => {
                console.log(response);
                setTitle("");
                setAuthor("");
                setReload(!reload);
              });
            }
          }}
          type="submit"
          className="form-submit-button"
        />
      </form>
    </div>
  );
}

export default AddBook;
