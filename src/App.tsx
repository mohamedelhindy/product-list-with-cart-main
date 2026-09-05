import { Cart } from "./components/Cart";
import { DessertList } from "./components/DessertList";

export const App = () => {
  return (
    <div className="flex gap-9 min-h-screen py-21 px-28">
      <DessertList />
      <Cart />
    </div>
  );
};
