import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "react-bootstrap"; // Correct import for Form
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const BookForm = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : "",
    author: props.book ? props.book.author : "",
    price: props.book ? props.book.price : "",
    date: props.book ? props.book.date : "",
  });
  const { bookname, author, price } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        date: new Date(),
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

// Define PropTypes
BookForm.propTypes = {
  book: PropTypes.shape({
    bookname: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.string,
    date: PropTypes.instanceOf(Date),
  }),
  handleOnSubmit: PropTypes.func.isRequired,
};

export default BookForm;
