import { dessertsData } from "../data/desserts";
import { DessertCard } from "./DessertCard";

export const DessertList = () => {
  return (
    <div>
      <div className="flex gap-6 flex-wrap">
        {dessertsData.map((dessert) => (
          <DessertCard key={dessert.id} dessert={dessert} />
        ))}
      </div>
    </div>
  );
};
