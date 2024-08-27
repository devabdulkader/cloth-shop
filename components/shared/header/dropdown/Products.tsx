"use client";
import Image from "next/image";
import React from "react";

// Define types for product sections and items
interface ProductSection {
  title: string;
  items: (string | ProductItem)[];
}

interface ProductItem {
  name: string;
  price: string;
  image: string;
}

// Define the productSections array with type annotations
const productSections: ProductSection[] = [
  {
    title: "First Grid Column",
    items: [
      "Product Page",
      "Product Left Sidebar",
      "Product Right Sidebar",
      "Product Top Sidebar",
      "Product Without Sidebar",
      "Product Deals",
    ],
  },
  {
    title: "Second Grid Column",
    items: [
      "Product Page",
      "Product Canvas on Left",
      "Product Canvas on Top",
      "Product Canvas on Bottom",
      "Product Full Width",
    ],
  },
  {
    title: "Third Grid Column",
    items: [
      "Product Page",
      "Numbered Pagination",
      "Load More Button",
      "Infinity Scroll Load More",
    ],
  },
  {
    title: "Fourth Grid Column",
    items: [
      {
        name: "Product 1",
        price: "$29.99",
        image: "/hero/shoe-1.jpg",
      },
    ],
  },
];

const Products = () => {
  return (
    <section className="relative">
      <main className="bg-white border shadow-sm">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 max-w-[70vw] mx-auto w-full">
          {/* First Three Grid Columns - Similar Content */}
          {productSections.slice(0, 3).map((section, index) => (
            <div key={index} className="flex flex-col space-y-6">
              <div className="p-4">
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="p-4 hover:bg-gray-200 transition">
                    {/* Render items as text if they are strings */}
                    {typeof item === "string" ? (
                      <h3 className="text-lg font-semibold">{item}</h3>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Last Grid Column - Product Cards */}
          <div className="flex flex-col space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-bold">Fourth Grid Column</h2>
            </div>
            <div className="flex flex-col space-y-4">
              {/* Render items as products if they are ProductItem */}
              {productSections[3].items.map((product, idx) =>
                typeof product !== "string" ? (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      height={30}
                      width={50}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Products;
