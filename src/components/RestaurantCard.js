const RestaurantCard = (props) => {
  // Object destructuring

  const { name, cuisines, rating, cost, deliveryTime, imageUrl } =
    props.restaurant_details;

  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt="restaurant"></img>
      <div className="res-card-details">
        <div>
          <h2>{name}</h2>
          <span>{cuisines}</span>
        </div>

        <div>
          <h3>{rating}</h3>
          <span>{cost}</span>
          <h4>{deliveryTime}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
