"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import IconButton from "../common/IconButton";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import ProductCard from "../product/ProductCard";

interface ColorVariant {
  color: string;
  isSelected: boolean;
}

interface Product {
  imageSrc: string;
  title: string;
  price: string;
  rating: number;
  colorVariants: ColorVariant[];
}

interface Icons {
  icon: React.ReactNode;
  tooltip: string;
  href: string;
}

const Icons = [
  { icon: <FaRegStar />, tooltip: "Add to Wishlist" },
  { icon: <MdOutlineShoppingBag />, tooltip: "Add to Cart" },
  { icon: <FiEye />, tooltip: "Quick View" },
];
// Sample Data
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

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} index={index} />
      ))}
    </div>
  );
};

export default ProductList;
