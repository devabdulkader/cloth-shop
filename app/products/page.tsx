import FilterSidebar from "@/components/product/FilterSidebar";
import FilterToggler from "@/components/product/FilterToggler";
import ProductList from "@/components/product/ProductList";

import React from "react";

const Page = () => {
  return (
    <section className="relative">
      <div className="flex h-auto w-full flex-col items-center justify-center bg-gray-100 py-6 md:h-64 mb-10">
        <div className="flex flex-col items-center gap-y-4 py-5">
          <h1 className="text-4xl font-bold md:text-6xl">Fashion</h1>
          <p className="text-sm text-gray-500 sm:text-base">Home | Fashion</p>
        </div>
      </div>

      {/* Container */}
      <div className="mx-auto container w-full ">
        {/* Component */}
        <div className="lg:flex relative lg:space-x-20">
          {/* Sidebar  */}
          <FilterSidebar />

          {/* Main Content */}
          <div className="w-full flex flex-col  border-gray-300 gap-5">
            {/* Add enough content to make the page scrollable */}
            <FilterToggler />
            <ProductList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
