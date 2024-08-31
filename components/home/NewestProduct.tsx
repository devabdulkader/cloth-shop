"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import IconButton from "../common/IconButton";

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

// Sample Data
const products = [
  {
    imageSrc: "/hero/nike-2.jpg",
    title: "Product 1",
    price: "$29.99",
    rating: 4,
    colorVariants: [
      { color: "#ff0000", isSelected: true },
      { color: "#00ff00", isSelected: false },
      { color: "#0000ff", isSelected: false },
    ],
    actions: [
      { icon: <FaHeart />, tooltip: "Add to Wishlist" },
      { icon: <FaShoppingCart />, tooltip: "Add to Cart" },
      { icon: <FaEye />, tooltip: "Quick View" },
    ],
  },
  {
    imageSrc: "/hero/nike-2.jpg",
    title: "Product 2",
    price: "$39.99",
    rating: 5,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: true },
      { color: "#0000ff", isSelected: false },
    ],
    actions: [
      { icon: <FaHeart />, tooltip: "Add to Wishlist" },
      { icon: <FaShoppingCart />, tooltip: "Add to Cart" },
      { icon: <FaEye />, tooltip: "Quick View" },
    ],
  },
  {
    imageSrc: "/hero/nike-2.jpg",
    title: "Product 3",
    price: "$49.99",
    rating: 3,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: false },
      { color: "#0000ff", isSelected: true },
    ],
    actions: [
      { icon: <FaHeart />, tooltip: "Add to Wishlist" },
      { icon: <FaShoppingCart />, tooltip: "Add to Cart" },
      { icon: <FaEye />, tooltip: "Quick View" },
    ],
  },
  {
    imageSrc: "/hero/nike-2.jpg",
    title: "Product 4",
    price: "$59.99",
    rating: 4,
    colorVariants: [
      { color: "#ff0000", isSelected: false },
      { color: "#00ff00", isSelected: true },
      { color: "#0000ff", isSelected: false },
    ],
    actions: [
      { icon: <FaHeart />, tooltip: "Add to Wishlist" },
      { icon: <FaShoppingCart />, tooltip: "Add to Cart" },
      { icon: <FaEye />, tooltip: "Quick View" },
    ],
  },
];

const NewestProduct: React.FC = () => {
  const [hoveredProductIndex, setHoveredProductIndex] = useState<number | null>(
    null
  );
  const [blinkStartIndex, setBlinkStartIndex] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let interval: NodeJS.Timeout | null = null;

    if (hoveredProductIndex !== null) {
      // Start blink effect
      setBlinkStartIndex(hoveredProductIndex);

      timer = setTimeout(() => {
        setBlinkStartIndex(null); // Remove blink effect after 1 second
      }, 500);

      // Ensure the effect is continuous
      interval = setInterval(() => {
        if (hoveredProductIndex === null) {
          clearInterval(interval!);
        } else {
          setBlinkStartIndex(null);
        }
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [hoveredProductIndex]);

  const handleMouseEnter = (index: number) => {
    setHoveredProductIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredProductIndex(null);
  };

  return (
    <section className="w-full py-10 px-5 xl:px-10 2xl:px-20">
      <div className="flex flex-col items-center justify-center text-center py-10">
        <p className="uppercase mb-2">Product</p>
        <h2 className="capitalize text-3xl lg:text-5xl">
          Our newest product line
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src={product.imageSrc}
                alt={product.title}
                height={300}
                width={300}
                className="rounded-2xl transition-transform duration-300 h-full w-full object-cover"
              />
              {/* White opacity blink effect */}
              <div
                className={`absolute inset-0 bg-white transition-opacity duration-300 ${
                  blinkStartIndex === index ? "opacity-30" : "opacity-0"
                }`}
              />
            </div>
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>

              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-500 ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl font-semibold mb-2">{product.price}</p>

              {/* Color variants div */}
              <div
                className={`flex gap-2 transition-opacity duration-300 ${
                  hoveredProductIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {product.colorVariants.map((variant, i) => (
                  <span
                    key={i}
                    className={`h-6 w-10 inline-block mr-2 border ${
                      variant.isSelected ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: variant.color }}
                  />
                ))}
              </div>

              <div
                className={`absolute top-4 right-4 flex flex-col gap-2 ${
                  hoveredProductIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {product.actions.map((action, i) => (
                  <IconButton
                    key={i}
                    icon={action.icon}
                    tooltip={action.tooltip}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewestProduct;
