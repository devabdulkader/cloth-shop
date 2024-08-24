"use client";
import Image from "next/image";
import React, { useState } from "react";
import nike from "@/public/hero/nike-1.jpg";
import { GoArrowUpRight } from "react-icons/go";

// Define the type for the data items
interface HotTrendItem {
  image: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

// Sample Data
const data: HotTrendItem[] = [
  {
    image: nike,
    title: "Running Shoes",
    description: "Explore the latest trends in style and fashion.",
    buttonText: "Explore Category",
    href: "#",
  },
  {
    image: nike,
    title: "Basketball Shoes",
    description: "Discover the best in trendy outfits and accessories.",
    buttonText: "Explore Category",
    href: "#",
  },
  {
    image: nike,
    title: "Training Shoes",
    description: "Find out what's new in the fashion world.",
    buttonText: "Explore Category",
    href: "#",
  },
  {
    image: nike,
    title: "Outdoor Shoes",
    description: "Get ahead with the latest fashion trends.",
    buttonText: "Explore Category",
    href: "#",
  },
];

const HotTrend = () => {
  const [lastHoveredIndex, setLastHoveredIndex] = useState<number | null>(null);
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState<number | null>(
    null
  );

  return (
    <section className="w-full py-10">
      <div className="grid sm:grid-cols-2 lg:flex lg:flex-row gap-4 px-5 xl:px-10 2xl:px-20">
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
            className={`relative rounded-2xl h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden  w-full flex-1 bg-gray-200  transition-all duration-500 ease-in-out group ${
              lastHoveredIndex === index ? "flex-[1.5]" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black bg-opacity-30 text-white gap-3">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 max-w-40 leading-normal">
                {item.title}
              </h2>
              <p className="text-sm md:text-base mb-4">{item.description}</p>
              <button className="bg-white text-black py-3 px-5  rounded-full flex justify-between items-center uppercase  group hover:bg-black hover:text-white transition-colors duration-200 ease-in-out">
                <span className="text-sm xl:text-lg ">{item.buttonText}</span>
                <GoArrowUpRight className="text-2xl transform transition-transform group-hover:rotate-45" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotTrend;
