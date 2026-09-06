import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { Dessert } from "../types";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const { cart, dispatch } = context;

  const addItem = (dessert: Dessert) => {
    dispatch({
      type: "add_item",
      payload: {
        ...dessert,
        quantity: 1,
      },
    });
  };

  const removeItem = (dessert: Dessert) => {
    dispatch({
      type: "remove_item",
      payload: dessert,
    });
  };

  const increaseItem = (dessert: Dessert) => {
    dispatch({
      type: "increase_item",
      payload: dessert,
    });
  };

  const decreaseItem = (dessert: Dessert) => {
    dispatch({
      type: "decrease_item",
      payload: dessert,
    });
  };

  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const clearCart = () => {
    dispatch({
      type: "clear_cart",
    });
  };

  return {
    cart,
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
    cartCount,
    cartTotal,
    clearCart,
  };
};
