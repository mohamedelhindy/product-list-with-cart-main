import { dessertsData } from "../data/desserts";
import { DessertCard } from "./DessertCard";

export const DessertList = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-[40px]">Desserts</h1>

      <div className="flex gap-6 flex-wrap">
        {dessertsData.map((dessert) => (
          <DessertCard key={dessert.id} dessert={dessert} />
        ))}
      </div>
    </div>
  );
};
