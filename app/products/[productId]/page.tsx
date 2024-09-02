import AdditionalDetailsTab from "@/components/common/AdditionalDetailsTab";
import Breadcrumb from "@/components/common/Breadcrumb";
import ImageSlider from "@/components/common/ImageSlider";
import ProductDetails from "@/components/home/ProductDetails";
import React from "react";

const page = () => {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Accessory Boutiques", href: "#" }, // Replace href with actual link if needed
  ];

  return (
    <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10">
      <Breadcrumb items={breadcrumbItems} />
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

export default page;
