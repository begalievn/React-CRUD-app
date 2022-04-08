import React from "react";
import axios from "axios";

function EditBook({ show, onCloseModalHandler, editBook, setEditBook }) {
  const url = "http://localhost:4000";

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onCloseModalHandler}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Edit the Book</h4>
          <button onClick={onCloseModalHandler} className="modal-close-button">
            Close
          </button>
        </div>
        <div className="modal-body">
          <form>
            <label htmlFor="title">Title of the Book</label>
            <input
              onChange={(e) => {
                setEditBook({ ...editBook, title: e.currentTarget.value });
                console.log(editBook.title);
              }}
              type="text"
              name="title"
              value={editBook.title}
            />
            <br></br>
            <label htmlFor="author">Author</label>
            <input
              onChange={(e) => {
                setEditBook({ ...editBook, author: e.currentTarget.value });
                console.log(editBook.author);
              }}
              type="text"
              name="author"
              value={editBook.author}
            />
            <br></br>
            <input
              onClick={async (e) => {
                e.preventDefault();
                console.log(editBook);

                if (editBook.title !== "" && editBook.author !== "") {
                  await axios
                    .post(`${url}/books/${editBook.id}`, editBook)
                    .then((response) => {
                      console.log(response);
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }
                onCloseModalHandler();
              }}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
