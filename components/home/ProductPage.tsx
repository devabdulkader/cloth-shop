import React from "react";
import ImageSlider from "../common/ImageSlider";
import ProductDetails from "./ProductDetails";
import AdditionalDetailsTab from "../common/AdditionalDetailsTab";
import Breadcrumbs from "../common/Breadcrumbs"; // Adjust the path as needed

const ProductPage = () => {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Accessory Boutiques", href: "#" }, // Replace href with actual link if needed
  ];

  return (
    <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10">
      <Breadcrumbs items={breadcrumbItems} />
      <section className="md:grid grid-cols-2 md:gap-10 mt-4">
        <ImageSlider />
        <div className="">
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
