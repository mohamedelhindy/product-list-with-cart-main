import { createContext, useReducer } from "react";
import type { Cart } from "../types";
import { cartReducer } from "../reducers/cartReducer";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  cart: Cart[];
  dispatch: React.Dispatch<any>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
