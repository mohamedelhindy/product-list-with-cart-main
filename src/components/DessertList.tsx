import { dessertsData } from "../data";
import { DessertCard } from "./DessertCard";

export const DessertList = () => {
  return (
    <div>
      {dessertsData.map((dessert) => (
        <DessertCard key={dessert.id} dessert={dessert} />
      ))}
    </div>
  );
};
