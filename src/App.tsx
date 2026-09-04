import { Cart } from "./components/Cart";
import { DessertList } from "./components/DessertList";

export const App = () => {
  return (
    <div className="flex min-h-screen py-21 px-28">
      <DessertList />
      <Cart />
    </div>
  );
};
