import React from "react";
import ImageSlider from "../common/ImageSlider";
import ProductDetails from "./ProductDetails";
import AdditionalDetailsTab from "../common/AdditionalDetailsTab";

const ProductPage = () => {
  return (
    <div className="px-5 sm:px-16 xl:px-0 xl:max-w-[80%] mx-auto w-full">
      <section className="md:grid grid-cols-2 sm:gap-10">
        <ImageSlider />
        <div className="lg:pr-20">
          <ProductDetails />
        </div>
      </section>
      <section>
        <AdditionalDetailsTab />
      </section>
    </div>
  );
};

export default ProductPage;
