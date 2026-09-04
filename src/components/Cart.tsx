export const Cart = () => {
  return (
    <div className="w-full max-w-[350px] h-fit rounded-lg bg-white p-6 shadow-md flex flex-col gap-6">
      <div className="flex gap-2 items-center">
        <h1 className="text-[hsl(14_86%_42%)] font-bold text-[24px]">
          Your cart
        </h1>
        <p className="text-[hsl(14_86%_42%)] font-bold text-[24px]">(0)</p>
      </div>
    </div>
  );
};
