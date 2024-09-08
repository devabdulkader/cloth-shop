import ProductCard from "../product/ProductCard";
import { IProduct } from "../../types/product";

// Define the prop type for the ProductList component
interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  console.log("newest page", products);

  return (
    <div className="gap-5 flex flex-wrap justify-center items-center">
      {products?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
