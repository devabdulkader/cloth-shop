import MotionTransition from "../motion/MotionTransition";
import ProductList from "../product/ProductList";
import { IProduct } from "@/types/product";

interface NewestProductProps {
  products: IProduct[];
}

const NewestProduct: React.FC<NewestProductProps> = ({ products }) => {
  return (
    <MotionTransition initialY={50} duration={3}>
      <div className="flex flex-col items-center justify-center text-center py-10">
        <p className="uppercase mb-7 lg:text-2xl">Product</p>
        <h2 className="capitalize text-3xl font-bold lg:text-5xl">
          Our newest product line
        </h2>
      </div>
      <ProductList products={products} />
    </MotionTransition>
  );
};

export default NewestProduct;
