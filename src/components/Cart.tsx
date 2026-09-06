import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { OrderCompleteModal } from "./OrderCompleteModal";

export const Cart = () => {
  const { cart, removeItem, cartCount, cartTotal } = useCart();
  const isEmpty = (): boolean => cart.length === 0;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full max-w-[380px] h-fit rounded-lg bg-white p-6 shadow-md flex flex-col gap-6">
        <div className="flex gap-2 items-center">
          <h1 className="text-[hsl(14_86%_42%)] font-bold text-[24px]">
            Your cart
          </h1>
          <p className="text-[hsl(14_86%_42%)] font-bold text-[24px]">
            ({cartCount})
          </p>
        </div>

        {isEmpty() ? (
          <div className="flex flex-col gap-3 items-center">
            <img
              src="/assets/images/illustration-empty-cart.svg"
              alt="Empty cart"
            />

            <p className="text-[13px]">Your added Items will appear here</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {cart.map((item) => {
              return (
                <div
                  className="flex justify-between items-center border-b border-b-[hsl(13_31%_94%)] pb-4"
                  key={item.id}
                >
                  <div className="">
                    <h1 className="text[hsl(14_65%_9%)] font-semibold">
                      {item.caption}
                    </h1>

                    <div className="flex gap-2">
                      <p className="text-[hsl(14_86%_42%)] font-semibold mr-3">
                        {item.quantity}x
                      </p>

                      <p className="text-[hsl(7_20%_60%)]">
                        @ ${item.price.toFixed(2)}
                      </p>
                      <p className="text-[hsl(12_20%_44%)] font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => removeItem(item)}
                    className="flex items-center justify-center border border-[hsl(7_20%_60%)] py-1 px-1 rounded-full"
                  >
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      alt="remove item icon"
                    />
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between items-center pt-4 pb-1">
              <p className="text[hsl(14_65%_9%)] text-[15px]">Order Total</p>
              <h1 className="font-bold text-[23px]">${cartTotal.toFixed(2)}</h1>
            </div>

            <div className="flex justify-center gap-2 bg-[hsl(13_31%_94%)] rounded-sm px-7 py-3">
              <img
                src="/assets/images/icon-carbon-neutral.svg"
                alt="carbon neutral icon"
              />

              <p className="flex gap-1 text-[13px]">
                This is a
                <li className="list-none font-semibold"> carbon-neutral </li>{" "}
                delivery
              </p>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[hsl(14_86%_42%)] text-white font-semibold py-3 mt-3 rounded-full cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && <OrderCompleteModal />}
    </>
  );
};
