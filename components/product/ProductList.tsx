import ProductCard from "../product/ProductCard";
import { IProduct } from "../../types/product";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="gap-5 flex flex-wrap justify-center items-center">
      {products?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
