import React, { useState, useEffect, useCallback } from 'react';
import BooksList from '../components/BooksList';
import Loading from '../UI/Loading';
import classes from './Books.module.css'
import Card from '../UI/Card';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://books-http-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();


      const loadedBooks = [];
      for (const key in data) {
        loadedBooks.push({
          id: key,
          name: data[key].name,
          courseName: data[key].courseName,
          courseNumber: data[key].courseNumber,
          price: data[key].price + "$",
          phoneNumber: data[key].phoneNumber,

        });
      }
      setBooks(loadedBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  let content = <p>Found no books.</p>;


  if (books.length > 0) {
    content = <BooksList books={books} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    return (<Loading />)
  }



  return (
    <React.Fragment>
      <section className={classes.actions}>
        <button onClick={fetchBooksHandler}>Fetch Books</button>
      </section>
      <section style={{ display: 'flex', justifyContent: 'center' }}><Card>{content}</Card></section>
    </React.Fragment>
  );
};

export default Books;