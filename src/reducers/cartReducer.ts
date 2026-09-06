import type { Cart } from "../types";

interface CartAction {
  type: string;
  payload: Cart;
}

export const cartReducer = (cart: Cart[], action: CartAction) => {
  switch (action.type) {
    case "add_item":
      if (cart.some((item) => item.id === action.payload.id)) {
        return cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...cart, { ...action.payload, quantity: 1 }];

    case "increase_item":
      return cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case "decrease_item":
      return cart
        .filter((item) => {
          return item.quantity === 1 ? item.id !== action.payload.id : true;
        })
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );

    case "remove_item":
      return cart.filter((item) => item.id !== action.payload.id);

    case "clear_cart":
      return [];

    default:
      return cart;
  }
};
