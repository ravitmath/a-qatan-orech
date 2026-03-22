import flowerDivider from "@/assets/flower-divider.png";

const FlowerDivider = () => (
  <div className="py-4 md:py-6 px-8">
    <img
      src={flowerDivider}
      alt=""
      className="w-full max-w-md mx-auto h-auto opacity-70 pointer-events-none"
    />
  </div>
);

export default FlowerDivider;
