import React, { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBookHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-gpost-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      //check
      console.log(data)
      const loadedBooks = [];
      for (const key in data) {
        loadedBooks.push({
          id: key,
          title: data[key].title,
          author: data[key].author,
          description: data[key].description,
        });
      }
      setBooks(loadedBooks);
      
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   fetchMovieHandler();
  // }, [fetchMovieHandler]);

  

  async function addBookHandler(book) {
    setIsLoading(true);
    const response = await fetch(
      "https://react-gpost-default-rtdb.firebaseio.com/books.json",
      {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    );
    const data = await response.json();
    setIsLoading(false);
    //check console
    console.log(data);
  }

  let content = <p>No Books found</p>;
  if (books.length > 0) {
    content = <BooksList books={books} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading ...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddBook onAddBook={addBookHandler} />
      </section>
      <section>
        <button onClick={fetchBookHandler}>Fetch Books</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
