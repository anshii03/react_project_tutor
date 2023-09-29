import { CDN_URL } from "../common/constants";

const RestaurantCard = (props) => {
  // Object destructuring

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props.restaurant_details.info;

  return (
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} alt="restaurant"></img>
      <div className="res-card-details">
        <div>
          <h2>{name}</h2>
          <span>{cuisines}</span>
        </div>
        <div>
          <h3>{avgRating}</h3>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
