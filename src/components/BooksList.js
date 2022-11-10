import React from "react";

import Book from "./Book";
import classes from "./BookList.module.css";

const BooksList = (props) => {
  return (
    <ul className={classes["books-list"]}>
      {props.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </ul>
  );
};

export default BooksList;
