"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import nike from "@/public/hero/nike-1.jpg";
import { GoArrowUpRight } from "react-icons/go";
import ResponsiveHeightWrapper from "../common/ResponsiveHeightWrapper";

// Define the type for the data items
interface CategoryItem {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

// Sample Data
const data: CategoryItem[] = [
  {
    image: "/explore-category/category-1.webp",
    title: "Running Shoes",
    description: "Explore the latest trends in style and fashion.",
    buttonText: "Explore Category",
    href: "#",
  },
  {
    image: "/explore-category/category-2.webp",
    title: "Basketball Shoes",
    description: "Discover the best in trendy outfits and accessories.",
    buttonText: "Explore Category",
    href: "#",
  },
  {
    image: "/explore-category/category-3.webp",
    title: "Training Shoes",
    description: "Find out what's new in the fashion world.",
    buttonText: "Explore Category",
    href: "#",
  },
  {
    image: "/explore-category/category-4.webp",
    title: "Outdoor Shoes",
    description: "Get ahead with the latest fashion trends.",
    buttonText: "Explore Category",
    href: "#",
  },
];

const ExploreCategory: React.FC = () => {
  const breakpoints = {
    minWidthSmall: 375,
    maxWidthSmall: 768,
    minWidthMedium: 768,
    maxWidthMedium: 1024,
    minWidthLarge: 1024,
    maxWidthLarge: 1440,
  };

  const heights = {
    heightSmallStart: 500,
    heightSmallEnd: 600,
    heightMediumStart: 600,
    heightMediumEnd: 700,
    heightLargeStart: 600,
    heightLargeEnd: 800,
  };

  const [lastHoveredIndex, setLastHoveredIndex] = useState<number | null>(null);
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState<number | null>(
    null
  );

  return (
    <section className="w-full py-10">
      <div className="grid md:grid-cols-2 lg:flex lg:flex-row gap-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setCurrentHoveredIndex(index);
              if (lastHoveredIndex !== index) {
                setLastHoveredIndex(index);
              }
            }}
            onMouseLeave={() => {
              if (currentHoveredIndex === index) {
                setCurrentHoveredIndex(null);
              }
            }}
            className={`relative rounded-2xl overflow-hidden w-full flex-1 bg-gray-200 transition-all duration-500 ease-in-out group ${
              lastHoveredIndex === index ? "flex-[1.5]" : ""
            }`}
          >
            <ResponsiveHeightWrapper
              breakpoints={breakpoints}
              heights={heights}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6  text-white gap-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 max-w-40 leading-normal lg:leading-relaxed">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base mb-4">{item.description}</p>
                <button className="bg-white text-black py-3 px-5 rounded-full flex justify-between items-center uppercase group hover:bg-black hover:text-white transition-colors duration-200 ease-in-out">
                  <span className="text-sm xl:text-md  ">
                    {item.buttonText}
                  </span>
                  <GoArrowUpRight className="text-2xl transform transition-transform group-hover:rotate-45" />
                </button>
              </div>
            </ResponsiveHeightWrapper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategory;
