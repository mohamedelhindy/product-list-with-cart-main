import type { Dessert } from "../types";
import { useCart } from "../hooks/useCart";

interface DessertCardProps {
  dessert: Dessert;
}

export const DessertCard = ({ dessert }: DessertCardProps) => {
  const { cart, addItem, increaseItem, decreaseItem } = useCart();

  const cartItem = cart.find((item) => item.id === dessert.id);
  const inCart = !!cartItem;

  return (
    <div className="w-full">
      <div className="relative">
        <picture>
          <source media="(min-width: 1200px)" srcSet={dessert.image.desktop} />

          <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />

          <img
            src={dessert.image.mobile}
            alt={dessert.name}
            className={`w-full rounded-lg ${
              inCart ? "border-2 border-[hsl(14_86%_42%)]" : ""
            }`}
          />
        </picture>

        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
          {inCart ? (
            <div className="w-[140px] min-[1340px]:w-[160px] flex justify-between items-center bg-[hsl(14_86%_42%)] px-3 min-[1340px]:px-4 py-2 min-[1340px]:py-2.5 rounded-full">
              <button
                onClick={() => decreaseItem(dessert)}
                className="flex items-center justify-center border border-white w-5 h-5 rounded-full cursor-pointer"
              >
                <img
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt="decrement quantity"
                />
              </button>

              <p className="text-white text-sm">{cartItem.quantity}</p>

              <button
                onClick={() => increaseItem(dessert)}
                className="flex items-center justify-center border border-white w-5 h-5 rounded-full cursor-pointer"
              >
                <img
                  src="/assets/images/icon-increment-quantity.svg"
                  alt="increment quantity"
                />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItem(dessert)}
              className="group w-[140px] min-[1340px]:w-[160px] flex gap-2 bg-white justify-center items-center border border-rose-400 px-3 min-[1340px]:px-4 py-2 min-[1340px]:py-2.5 rounded-full cursor-pointer hover:border-[hsl(14_86%_42%)] transition-all duration-300"
            >
              <img
                src="/assets/images/icon-add-to-cart.svg"
                alt="add to cart"
              />

              <p className="font-semibold text-[12px] min-[1340px]:text-[13px] group-hover:text-[hsl(14_86%_42%)] transition-colors duration-300">
                Add to Cart
              </p>
            </button>
          )}
        </div>
      </div>

      <div className="pt-7">
        <p className="text-rose-400 text-[13px]">{dessert.name}</p>

        <h3 className="font-semibold text-[14px]">{dessert.caption}</h3>

        <p className="text-[hsl(14_86%_42%)] font-semibold text-[14px]">
          ${dessert.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
