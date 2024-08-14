import "./styles/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import AddBook from "./pages/BookAdd.jsx";
import BookList from "./pages/BookList.jsx";
import BooksContext from "./components/contexts/books-context.js";
import BookEdit from "./components/BookEdit.jsx";
import useLocalStorage from "./components/Hooks/local-storage.js";

const App = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Routes>
              <Route path="/" element={<BookList />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/edit/:id" element={<BookEdit />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
