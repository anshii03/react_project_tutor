import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
