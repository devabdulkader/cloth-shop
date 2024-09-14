"use client";
import { useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import AdditionalDetailsTab from "@/components/product-detail/AdditionalDetailsTab";
import ImageSlider from "@/components/product-detail/ImageSlider";
import ProductDetails from "@/components/product-detail/ProductDetails";
import ReviewProduct from "@/components/product-detail/ReviewProduct";
import ServiceHighlights from "@/components/product/ServiceHighlights";
import { IProduct } from "@/types/product";

type ProductDetailPageProps = {
  product: IProduct | null;
};

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const [currentSlide, setCurrentSlide] = useState(""); // Manage the current slide index

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Accessory Boutiques", href: "#" }, // Replace href with the actual link if needed
  ];

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  // Callback function to change the current slide when a color is clicked
  const handleColorClick = (slideIndex: string) => {
    setCurrentSlide(slideIndex);
    console.log("current slide index", currentSlide);
  };

  return (
    <div className="relative">
      <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10 ">
        <Breadcrumb items={breadcrumbItems} />
        <section className="md:grid grid-cols-2 md:gap-10 my-10 relative">
            <ImageSlider product={product} currentSlide={currentSlide} />
          <div>
            <ProductDetails product={product} onColorClick={handleColorClick} />
          </div>
        </section>
        <AdditionalDetailsTab
          description={product.description}
          deliveryPolicy={product.deliveryPolicy}
          shippingReturnPolicy={product.shippingReturnPolicy}
        />
        <ServiceHighlights />
      </div>

      <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10 ">
        <ReviewProduct />
      </div>
    </div>
  );
};

export default ProductDetailPage;
