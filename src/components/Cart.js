import { useDispatch } from "react-redux";
import { clearCart } from "../common/cartSlice";
import { useSelector } from "react-redux";
import { CDN_URL } from "../common/constants";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <h1>Cart Items</h1>
      <button
        className="bg-black m-2 text-white rounded-lg p-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.map((item) => (
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
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
