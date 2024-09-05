import ProductDetailPage from "@/pages/ProductDetailPage";
import React from "react";

// Define the type for the props
type PageProps = {
  params: {
    productId: string;
  };
};

const Page: React.FC<PageProps> = ({ params }) => {
  const { productId } = params; // Extract productId from params
  return <ProductDetailPage productId={productId} />;
};

export default Page;
