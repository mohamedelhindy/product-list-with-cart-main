import type { Dessert } from "../types";
import { useCart } from "../hooks/useCart";

interface DessertCardProps {
  dessert: Dessert;
}

export const DessertCard = ({ dessert }: DessertCardProps) => {
  const { cart, addItem, increaseItem, decreaseItem } = useCart();
  const inCart = cart.some((item) => item.id === dessert.id);

  return (
    <div className="w-[245px]">
      <img
        className="rounded-lg"
        src={dessert.image.desktop}
        alt={dessert.name}
      />

      <div className="w-full flex justify-center relative bottom-5">
        <div>
          {inCart ? (
            <div className="w-fit flex gap-11 bg-[hsl(14_86%_42%)] justify-center items-center px-3 py-1.5 rounded-full transition-all duration-300">
              <div className="flex items-center justify-center border border-white py-2 px-1 rounded-full cursor-pointer">
                <img
                  onClick={() => decreaseItem(dessert)}
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt="decrement quantity icon"
                />
              </div>

              <p className="text-white">
                {cart.find((item) => item.id === dessert.id)?.quantity}
              </p>

              <div className="flex items-center justify-center border border-white py-1 px-1 rounded-full cursor-pointer">
                <img
                  onClick={() => increaseItem(dessert)}
                  src="/assets/images/icon-increment-quantity.svg"
                  alt="increment quantity icon"
                />
              </div>
            </div>
          ) : (
            <div
              onClick={() => addItem(dessert)}
              className="group w-fit flex gap-2 bg-white justify-center items-center border border-rose-500 px-6 py-1.5 rounded-full cursor-pointer hover:border-[hsl(14_86%_42%)] transition-all duration-300"
            >
              <img
                src="/assets/images/icon-add-to-cart.svg"
                alt="add to cart"
              />

              <p className="font-semibold text-[14px] group-hover:text-[hsl(14_86%_42%)] transition-colors duration-300">
                Add to Cart
              </p>
            </div>
          )}
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
