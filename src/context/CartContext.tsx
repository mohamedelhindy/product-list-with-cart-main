import { createContext, useState } from "react";
import type { Dessert } from "../types";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  cart: Dessert[];
  setCart: React.Dispatch<React.SetStateAction<Dessert[]>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Dessert[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
