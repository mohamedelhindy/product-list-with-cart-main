import { useCart } from "../hooks/useCart";

interface OrderCompleteModalProps {
  clicked: () => void;
}

export const OrderCompleteModal = ({ clicked }: OrderCompleteModalProps) => {
  const { cart, cartTotal } = useCart();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-[480px] max-h-[90vh] rounded-xl bg-white p-8 shadow-2xl ">
        <div className="flex flex-col gap-2 mb-7">
          <img
            className="w-9 h-9 mb-2"
            src="/assets/images/icon-order-confirmed.svg"
            alt="order confirmed icon"
          />

          <h1 className="text-[34px] leading-tight font-bold text-[hsl(14_65%_9%)]">
            Order Confirmed
          </h1>

          <p className="text-[14px] text-[hsl(7_20%_60%)]">
            We hope you enjoy your food!
          </p>
        </div>

        <div className="cart-scroll bg-[hsl(20_50%_98%)] rounded-lg p-5 max-h-[55vh] overflow-y-auto">
          {cart.map((item) => {
            return (
              <div
                className="flex justify-between items-center border-b border-b-[hsl(13_31%_94%)] py-4 first:pt-0 last:border-b-0 last:pb-0"
                key={item.id}
              >
                <div className="flex items-center gap-3">
                  <img
                    className="w-14 h-14 rounded-md object-cover"
                    src={item.image.thumbnail}
                    alt={item.name}
                  />

                  <div>
                    <h1 className="text-[14px] text-[hsl(14_65%_9%)] font-semibold">
                      {item.caption}
                    </h1>

                    <div className="flex gap-3 mt-1">
                      <p className="text-[hsl(14_86%_42%)] text-[13px] font-semibold">
                        {item.quantity}x
                      </p>

                      <p className="text-[hsl(7_20%_60%)] text-[13px]">
                        @ ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[13px] text-[hsl(14_65%_9%)] font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            );
          })}

          <div className="flex justify-between items-center pt-6 mt-3">
            <p className="text-[13px] text-[hsl(14_65%_9%)]">Order Total</p>

            <p className="text-[26px] font-bold text-[hsl(14_65%_9%)]">
              ${cartTotal.toFixed(2)}
            </p>
          </div>
        </div>

        <button
          onClick={clicked}
          className="w-full mt-7 cursor-pointer rounded-full bg-[hsl(14_86%_42%)] py-4 text-[14px] font-semibold text-white cursor-pointer hover:bg-[hsl(14_86%_36%)] transition-colors duration-200"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};
