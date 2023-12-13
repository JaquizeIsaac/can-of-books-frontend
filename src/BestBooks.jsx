import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';

function BestBooks() {
  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(false);

  async function getBooks() {
    try {
      const response = await axios.get('https://can-of-books-api-nr7r.onrender.com/books');
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemove(id) {
    try {
      await axios.delete(`https://can-of-books-api-nr7r.onrender.com/books/${id}`);
      const updatedBooks = books.filter((book) => book._id !== id);
      setBooks(updatedBooks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <h2>My Essential Lifelong Learning & Formation Shelf</h2>
      <Button variant="primary" onClick={() => setShow(true)}>Add Book</Button>
      {show && (
        <BookFormModal
          show={show}
          setShow={setShow}
          setBooks={setBooks}
        />
      )}
      {books.length ? (
        <Carousel>
          {books.map((book) => (
            <Carousel.Item className="carousel-item-book" key={book._id}>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>{book.status}</p>
              <Button onClick={(e) => {
                e.stopPropagation();
                handleRemove(book._id);
              }}>Remove</Button>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <h3>No Books Found :(</h3>
      )}
    </>
  );
}

export default BestBooks;
