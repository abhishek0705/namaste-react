import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items) || [];

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <h1>Cart is empty. Add Items to the Cart</h1>
        ) : (
          <button
            className=" p-2 m-2 bg-black text-white rounded-md"
            onClick={clearCartHandler}
          >
            Clear Cart
          </button>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
