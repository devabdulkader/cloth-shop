import ProductPage from "@/components/home/ProductPage";
import { NextPage } from "next";

interface ProductPageProps {
  params: {
    productId: string; //  route parameter
  };
}

// Update the NextPage type to reflect the correct props
const Page: NextPage<ProductPageProps> = async ({ params }) => {
  // Fetch the  and products data

  return (
    <div>
      {/* {params.productId} */}
      <ProductPage />
    </div>
  );
};

export default Page;
