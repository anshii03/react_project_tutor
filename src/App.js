import "./App.css";

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

const Header = () => {
  return (
    <nav className="header">
      <img
        className="food-logo"
        src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000"
        alt="food-logo"
      ></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const RestaurantCard = (props) => {
  // Object destructuring

  const { name, cuisines, rating } = props;

  return (
    <div className="restaurant-card">
      <img
        src="https://b.zmtcdn.com/data/pictures/chains/8/19803678/365eb84dced494844fc142944ec7272b_o2_featured_v2.jpg?output-format=webp"
        alt="restaurant"
      ></img>
      <div className="res-card-details">
        <div>
          <h2>{name}</h2>
          <span>{cuisines}</span>
        </div>

        <div>
          <h3>{rating}</h3>
          <span>Rs 100 for one</span>
          <h4>41 min</h4>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="search-bar">
        <input type="text"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard
          name="Biryani Center"
          cuisines="IceCream, Mithai, Desserts"
        />
        <RestaurantCard
          name="IceCream Parlour"
          cuisines="biryani"
          rating="4.3"
        />
        <RestaurantCard name="Roots Restaurant" cuisines="burger" />
        <RestaurantCard name="momos corner" cuisines="momos" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <h2>Copyright</h2>
    </footer>
  );
};

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
