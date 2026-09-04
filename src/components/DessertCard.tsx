import type { Dessert } from "../types";

interface DessertCardProps {
  dessert: Dessert;
}

export const DessertCard = ({ dessert }: DessertCardProps) => {
  return (
    <>
      <div>
        <img src={dessert.image.desktop} alt={dessert.name} />

        <div>
          <img
            src="../public/assets/images/icon-add-to-cart.svg"
            alt="add-to-cart"
          />

          <p>Add to Cart</p>
        </div>

        <div>
          <p>{dessert.name}</p>
          <h3>{dessert.caption}</h3>
          <p>{dessert.price}</p>
        </div>
      </div>
    </>
  );
};
