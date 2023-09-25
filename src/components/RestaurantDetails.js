import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { resId } = useParams();

  return (
    <>
      <h1>Restaurant Details</h1>
      <span>Id: {resId}</span>
    </>

  )

};

export default RestaurantDetails;
