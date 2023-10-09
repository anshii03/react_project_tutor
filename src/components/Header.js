import { Link } from "react-router-dom";
import useOnline from "../common/useOnline";
import { useSelector } from "react-redux";
import { useContext } from "react";
import userContext from "../common/userContext";

const Header = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  const { currentUser } = useContext(userContext);

  return (
    <nav className="flex justify-around border border-solid border-black m-2">
      <img
        className="w-28 h-28"
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
        <li>
          <Link to="/groceries">Groceries</Link>
        </li>
        <li>
          <Link to="/cart">Cart - {cartItems.length} items </Link>
        </li>
        <li className="px-4">{currentUser}</li>
      </ul>
    </nav>
  );
};

export default Header;

// default export
// named export
