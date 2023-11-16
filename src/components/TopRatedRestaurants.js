const TopRatedRestaurants = (props) => {
  function filterTopRatedRestaurants() {
    const topRatedRestaurants = props.restaurants.filter(
      (restaurant) => restaurant.avgRating > 4.3
    );

    props.onFilter(topRatedRestaurants);
  }

  return (
    <button
      className="bg-gray-200 px-2 py-2 rounded-lg "
      onClick={filterTopRatedRestaurants}
    >
      TopRatedRestaurants
    </button>
  );
};

export default TopRatedRestaurants;
