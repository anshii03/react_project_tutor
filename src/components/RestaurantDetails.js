import { useParams } from "react-router-dom";
import useRestaurantMenu from "../common/useRestaurantMenu";
import { CDN_URL } from "../common/constants";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../common/cartSlice";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const itemCards = resInfo?.menuItems;

  if (resInfo == null) return <Shimmer />;

  return (
    <>
      <div className="flex text-center">
        <div className="m-12">
          {itemCards.map((item) => (
            <div
              data-testid="foodItems"
              key={item.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.name}</span>
                  <span>
                    - ₹{item.price ? item.price / 100 : item.finalPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button
                    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
                <img src={CDN_URL + item.imageId} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
