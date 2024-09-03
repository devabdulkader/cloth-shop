"use client";
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import ProductCard from "../product/ProductCard";
import ProductProgress from "./ProductProgress";

// Define the prop type for the ProductList component
interface ProductListProps {
  layoutClass?: string;
}

// Define the structure of a color variant
interface ColorVariant {
  color: string;
  isSelected: boolean;
}

// Define the structure of a product
interface Product {
  imageSrc: string;
  title: string;
  price: string;
  rating: number;
  colorVariants: ColorVariant[];
}

// Sample icons data
const icons = [
  { icon: <FaRegStar />, tooltip: "Add to Wishlist" },
  { icon: <MdOutlineShoppingBag />, tooltip: "Add to Cart" },
  { icon: <FiEye />, tooltip: "Quick View" },
];

// Sample product data
const products = [
  {
    imageSrc: "/products/product-1.webp",
    title: "Product 1",
    price: "$29.99",
    rating: 4,
    colorVariants: [
      { color: "#ff0000", isSelected: true },
      { color: "#00ff00", isSelected: false },
      { color: "#0000ff", isSelected: false },
    ],
  },
  {
    imageSrc: "/products/product-2.webp",
    title: "Product 2",
    price: "$39.99",
    rating: 5,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: true },
      { color: "#0000ff", isSelected: false },
    ],
  },
  {
    imageSrc: "/products/product-3.webp",
    title: "Product 3",
    price: "$49.99",
    rating: 3,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: false },
      { color: "#0000ff", isSelected: true },
    ],
  },
  {
    imageSrc: "/products/product-4.webp",
    title: "Product 4",
    price: "$59.99",
    rating: 4,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: true },
      { color: "#0000ff", isSelected: false },
    ],
  },
  {
    imageSrc: "/products/product-5.webp",
    title: "Product 4",
    price: "$59.99",
    rating: 4,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: true },
      { color: "#0000ff", isSelected: false },
    ],
  },
  {
    imageSrc: "/products/product-6.webp",
    title: "Product 4",
    price: "$59.99",
    rating: 4,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: true },
      { color: "#0000ff", isSelected: false },
    ],
  },
  {
    imageSrc: "/products/product-7.webp",
    title: "Product 4",
    price: "$59.99",
    rating: 4,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: true },
      { color: "#0000ff", isSelected: false },
    ],
  },
];
const ProductList: React.FC<ProductListProps> = ({ layoutClass = "" }) => {
  const [currentCount, setCurrentCount] = useState(12); // Initial count of products displayed
  const totalCount = 23; // Total number of products

  const handleLoadMore = () => {
    // Simulate loading more items
    setCurrentCount((prevCount) => Math.min(prevCount + 12, totalCount));
  };

  return (
    <div>
      <div className={` ${layoutClass} gap-5 place-items-center`}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} index={index} />
        ))}
      </div>
      <div className="p-4">
        <ProductProgress
          currentCount={currentCount}
          totalCount={totalCount}
          onLoadMore={handleLoadMore}
        />
        {/* Other content */}
      </div>
    </div>
  );
};

export default ProductList;
