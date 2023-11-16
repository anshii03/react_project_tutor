import { Link } from "react-router-dom";
import useOnline from "../common/useOnline";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import userContext from "../common/userContext";
import Login from "./Login";

const Header = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  const { currentUser } = useContext(userContext);

  const [visible, setVisible] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const setLoggedIn = (val) => {
    setIsLoggedIn(val);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("accessToken");
  };

  return (
    <>
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
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={openModal}
              >
                Login
              </button>
            )}
          </li>

          <li className="px-4">{currentUser}</li>
        </ul>
      </nav>

      <Login
        isVisible={visible}
        onClose={closeModal}
        setLoggedIn={setLoggedIn}
      />
    </>
  );
};

export default Header;

// default export
// named export
