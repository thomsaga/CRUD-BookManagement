import { useContext } from "react";
import BookForm from "./BookForm";
import { useParams, useNavigate } from "react-router-dom";
import BooksContext from "./contexts/books-context.js";

const EditBook = () => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    navigate("/");
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
