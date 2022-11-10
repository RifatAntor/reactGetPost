import React, { useRef } from "react";

import classes from "./AddBook.module.css";

function AddBook(props) {
  const titleRef = useRef("");
  const authorRef = useRef("");
  const descRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredAuthor = authorRef.current.value;
    const enteredDesc = descRef.current.value;

    if (enteredTitle.trim() === "") {
      return;
    }

    if (enteredAuthor.trim() === "") {
      return;
    }

    if (enteredDesc.trim() === "") {
      return;
    }

    const book = {
      title: enteredTitle,
      author: enteredAuthor,
      description: enteredDesc,
    };
    props.onAddBook(book);

    titleRef.current.value = "";
    authorRef.current.value = "";
    descRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Book name</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      
      <div className={classes.control}>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" ref={authorRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="desc">Description</label>
        <textarea rows="5" id="desc" ref={descRef}></textarea>
      </div>
      {!props.isLoading && <button>Add Movie</button>}
      {props.isLoading && <p>Loading...</p>}
    </form>
  );
}

export default AddBook;
