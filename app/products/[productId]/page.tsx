import { getAllProducts } from "@/lib/service/getAllProducts";
import ProductDetailPage from "@/pages/ProductDetailPage";
import { IProduct } from "@/types/product";

type PageProps = {
  productId: string;
  params: {
    productId: string;
  };
};

const fetchProduct = async (productId: string): Promise<IProduct | null> => {
  try {
    const products: IProduct[] = await getAllProducts();
    return products.find((p) => p._id === productId) || null;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

const Page = async ({ params }: { params: PageProps }) => {
  const { productId } = params;
  const product = await fetchProduct(productId);

  return <ProductDetailPage product={product} />;
};

export default Page;
