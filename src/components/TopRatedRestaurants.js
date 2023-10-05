const TopRatedRestaurants = (props) => {
  function filterTopRatedRestaurants() {
    const topRatedRestaurants = props.restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );

    props.onFilter(topRatedRestaurants);
  }

  return (
    <button onClick={filterTopRatedRestaurants}>TopRatedRestaurants</button>
  );
};

export default TopRatedRestaurants;
