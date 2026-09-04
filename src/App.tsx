import { Cart } from "./components/Cart";
import { DessertList } from "./components/DessertList";

export const App = () => {
  return (
    <div className="flex flex-col gap-6 min-h-screen justify-center py-21 px-28">
      <h1 className="font-bold text-[40px]">Desserts</h1>

      <div className="flex">
        <DessertList />
        <Cart />
      </div>
    </div>
  );
};
