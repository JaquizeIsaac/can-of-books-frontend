import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BookForm from './BookForm';

export default function BookFormModal(props) {
  const [formData, setFormData] = useState({}); // State for form data

  const handleClose = () => props.setShow(false);

  async function addBook(Book) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: Book
    };
    try {
      const response = await axios.post('https://can-of-books-api-nr7r.onrender.com/books', options);
      props.setBooks((prev) => [...prev, response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add A New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Pass necessary props to BookForm */}
        <BookForm
          formData={formData}
          setFormData={setFormData}
          addBook={addBook}
          handleClose={handleClose}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        {/* Additional buttons or components can be added here */}
      </Modal.Footer>
    </Modal>
  );
}
