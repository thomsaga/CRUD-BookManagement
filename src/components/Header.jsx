import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
          end // end is the v6 equivalent to exact
        >
          Books List
        </NavLink>
        <NavLink
          to={"/add"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
