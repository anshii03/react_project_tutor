import RestaurantCard from "./RestaurantCard";
import { restaurants_data } from "../common/mock_data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// event handlers ------ onclick

// input text ----- onChange

const Body = () => {
  // Array destructuring
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurants_data);

  function handleOnChangeEvent(e) {
    setSearchText(e.target.value);
  }

  console.log("xyz.......");

  useEffect(() => {

    // make any api calls
      console.log("Learning useEffect hook");
  }, []);

  // if dependency array is empty , then useEffect hook is called only once

  function filterRestaurants() {
    const filterData = restaurants_data.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchText.toLowerCase());
    });

    // searchText = "Pizza"
    // restaurant.name = "Pizza Hut"
    // restaurant.name.toLowerCase() = "pizza hut"
    // restaurant.name.toLowerCase().includes("h")

    setFilteredRestaurants(filterData);

    console.log("filtered restaurants", filteredRestaurants);
  }

  return (
    <>
      <div className="search-bar">
        <input type="text" onChange={handleOnChangeEvent}></input>
        <button onClick={filterRestaurants}>Search</button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
          <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
            <RestaurantCard key={restaurant.id} restaurant_details={restaurant} />
          </Link> 
          );
        })}
      </div>
    </>
  );
};

export default Body;
