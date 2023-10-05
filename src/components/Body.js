import RestaurantCard from "./RestaurantCard";
import { restaurants_data } from "../common/mock_data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../common/useOnline";
import TopRatedRestaurants from "./TopRatedRestaurants";

// event handlers ------ onclick

// input text ----- onChange

const Body = () => {
  // Array destructuring
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  function handleOnChangeEvent(e) {
    setSearchText(e.target.value);
  }

  // if de pendency array is empty , then useEffect hook is called only once

  useEffect(() => {
    // make any api calls
    fetchData();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline !! Please check your Internet Connection
      </h1>
    );
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("json", json);

    //Optional Chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("all", allRestaurants);
  };

  function filterRestaurants() {
    const filterData = allRestaurants.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    // searchText = "Pizza"
    // restaurant.name = "Pizza Hut"
    // restaurant.name.toLowerCase() = "pizza hut"
    // restaurant.name.toLowerCase().includes("h")

    setFilteredRestaurants(filterData);

    console.log("filtered restaurants", filteredRestaurants);
  }

  function filterTopRatedRestaurants(topRatedRestaurants) {
    console.log("top rated restaurants", topRatedRestaurants);
    setFilteredRestaurants(topRatedRestaurants);
  }

  return (
    <>
      <div className="top-filter-bar">
        <div className="search-bar">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={handleOnChangeEvent}
          ></input>
          <button onClick={filterRestaurants}>Search</button>
        </div>

        <TopRatedRestaurants
          onFilter={filterTopRatedRestaurants}
          restaurants={filteredRestaurants}
        />
      </div>

      {filteredRestaurants.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                <RestaurantCard
                  key={restaurant.info.id}
                  restaurant_details={restaurant}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
