export const Cart = () => {
  return (
    <div className="w-full max-w-[350px] h-fit rounded-lg bg-white p-6 shadow-md flex flex-col gap-6">
      <div className="flex gap-2 items-center">
        <h1 className="text-[hsl(14_86%_42%)] font-bold text-[24px]">
          Your cart
        </h1>
        <p className="text-[hsl(14_86%_42%)] font-bold text-[24px]">(0)</p>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <img
          src="/assets/images/illustration-empty-cart.svg"
          alt="Empty cart"
        />

        <p className="text-[13px]">Your added Items will appear here</p>
      </div>
    </div>
  );
};
