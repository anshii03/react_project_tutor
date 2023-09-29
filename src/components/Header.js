import { Link } from "react-router-dom";
import useOnline from "../common/useOnline";

const Header = () => {

  const isOnline = useOnline();

  return (
    <nav className="header">
      <img
        className="food-logo"
        src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000"
        alt="food-logo"
      ></img>
      <ul>
        <li>Online Status: {isOnline ? "✅" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

// default export
// named export
