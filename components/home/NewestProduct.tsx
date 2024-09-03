import MotionTransition from "../motion/MotionTransition";
import ProductList from "../product/ProductList";
const NewestProduct: React.FC = () => {
  return (
    <MotionTransition initialY={50} duration={3}>
      <div className="flex flex-col items-center justify-center text-center py-10">
        <p className="uppercase mb-7 lg:text-2xl">Product</p>
        <h2 className="capitalize text-3xl font-bold lg:text-5xl">
          Our newest product line
        </h2>
      </div>
      <ProductList layoutClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
    </MotionTransition>
  );
};

export default NewestProduct;
