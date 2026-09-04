import { useContext } from "react";
import type { Dessert } from "../types";
import { CartContext } from "../context/CartContext";

interface DessertCardProps {
  dessert: Dessert;
}

export const DessertCard = ({ dessert }: DessertCardProps) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    setCart([...cart, dessert]);
  };

  console.log(cart);

  return (
    <div className="w-[245px]">
      <img
        className="rounded-lg"
        src={dessert.image.desktop}
        alt={dessert.name}
      />

      <div
        onClick={addToCart}
        className="w-full flex justify-center relative bottom-5"
      >
        <div className="w-fit flex gap-2 bg-white justify-center items-center border border-rose-500 px-6 py-1.5 rounded-full">
          <img src="/assets/images/icon-add-to-cart.svg" alt="add-to-cart" />

          <p className="font-semibold text-[14px]">Add to Cart</p>
        </div>
      </div>

      <div>
        <p className="text-rose-400 text-[14px]">{dessert.name}</p>
        <h3 className="font-semibold">{dessert.caption}</h3>
        <p className="text-[hsl(14_86%_42%)] font-semibold">
          ${dessert.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
