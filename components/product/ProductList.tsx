import ProductCard from "../product/ProductCard";
import { getAllProducts } from "@/lib/service/getAllProducts";
import { IProduct } from "./../../types/product";

// Define the prop type for the ProductList component
interface ProductListProps {
  layoutClass?: string;
}

// Define ProductList component as a functional component with products fetched inside
const ProductList: React.FC<ProductListProps> = async ({
  layoutClass = "",
}) => {
  // Fetch products asynchronously
  const products: IProduct[] = await getAllProducts(); // Fixed type to IProduct[]

  // Return component JSX
  return (
    <div className={`  gap-5 grid grid-cols-1 items-center`}>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
