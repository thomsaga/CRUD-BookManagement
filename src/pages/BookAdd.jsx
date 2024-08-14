import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BookForm from "../components/BookForm.jsx";
import BooksContext from "../components/contexts/books-context.js";

const AddBook = () => {
  const { books, setBooks } = useContext(BooksContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOnSubmit = (book) => {
    console.log(book);
    setBooks([book, ...books]);
    navigate("/"); // Use navigate to redirect
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
