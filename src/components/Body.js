import RestaurantCard from "./RestaurantCard";
import { restaurants_data } from "../common/mock_data";
import { useState } from "react";

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
            <RestaurantCard
              key={restaurant.id}
              restaurant_details={restaurant}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
