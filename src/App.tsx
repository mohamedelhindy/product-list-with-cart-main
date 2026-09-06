import { Cart } from "./components/Cart";
import { DessertList } from "./components/DessertList";

export const App = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 min-h-screen py-10 px-5 lg:py-21 lg:px-10 xl:px-20">
      <DessertList />

      <div className="self-center lg:self-auto">
        <Cart />
      </div>
    </div>
  );
};
