import { useParams } from "react-router-dom";
import useRestaurantMenu from "../common/useRestaurantMenu";
import { CDN_URL } from "../common/constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const itemCards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card.itemCards;

  if (resInfo == null) return <Shimmer />;

  console.log("resInfo", resInfo);

  console.log("item cards", itemCards);

  return (
    <>
      <div className="flex text-center">
        <div className="m-12">
          {itemCards.map((item) => (
            <div
              data-testid="foodItems"
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    - ₹
                    {item.card.info.defaultPrice
                      ? item.card.info.defaultPrice / 100
                      : item.card.info.finalPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                    Add +
                  </button>
                </div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
