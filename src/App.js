import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./common/appStore";
import userContext from "./common/userContext";
import { useState } from "react";

/**
 * Header
 *   - Restaurant Logo
 *   - Navigation Items (Home , About, Contact)
 * Body
 *   - Search Bar
 *   - Restaurant Cards
 * Restaurant Cards
 *   - Image of restaurant
 *   - Name of restaurant
 *   - Cuisines
 *   - Rating
 *   - Cost for one
 *   - Time to deliver
 * Footer
 *   - Copyright
 *   - Links
 *   - About Restaurant
 */

function App() {
  const [userName, setUserName] = useState("Anshika");
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ currentUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
}

export default App;

// custom hooks ---- any hooks which we can create
// Modular ---- Single Responsibility Principle

// functions
