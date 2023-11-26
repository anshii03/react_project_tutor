import { CDN_URL } from "../common/constants";
import { useContext } from "react";
import userContext from "../common/userContext";

const RestaurantCard = (props) => {
  // Object destructuring

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageID } =
    props.restaurant_details;

  const { currentUser } = useContext(userContext);

  return (
    <div data-testid="resCard" className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageID} alt="restaurant"></img>
      <div className="res-card-details">
        <div>
          <h2>{name}</h2>
          <span>{cuisines}</span>
        </div>
        <div>
          <h3>{avgRating}</h3>
          <span>{costForTwo}</span>
        </div>
        <div>{currentUser}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
