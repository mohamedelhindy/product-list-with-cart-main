import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { Dessert } from "../types";

export const useCart = (dessert) => {
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

  return { context, addItem, removeItem, increaseItem, decreaseItem };
};
