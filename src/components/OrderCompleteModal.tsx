import { useCart } from "../hooks/useCart";

export const OrderCompleteModal = () => {
  const { cart, cartTotal } = useCart();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div>
        <div>
          <img
            src="/assets/images/icon-order-confirmed.svg"
            alt="order confirmed icon"
          />

          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food</p>
        </div>

        <div>
          {cart.map((item) => {
            return (
              <div
                className="flex justify-between items-center border-b border-b-[hsl(13_31%_94%)] pb-4"
                key={item.id}
              >
                <div>
                  <h1 className="text-[hsl(14_65%_9%)] font-semibold">
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
              </div>
            );
          })}
        </div>

        <div>
          <p>Order Total</p>
          <p>${cartTotal.toFixed(2)}</p>
        </div>

        <div>
          <button>Start New Order</button>
        </div>
      </div>
    </div>
  );
};
