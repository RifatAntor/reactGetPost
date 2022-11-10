import React from 'react';

import classes from './Book.module.css';

const Book = (props) => {
  return (
    <li className={classes.book}>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default Book;
