"use client";
import Image from "next/image";
import React, { useState } from "react";
import nike from "@/public/hero/nike-1.jpg";

// Sample Data
const data = [
  {
    image: nike,
    title: "Hot Trend 1",
    description: "Explore the latest trends in style and fashion.",
    buttonText: "Learn More",
  },
  {
    image: nike,
    title: "Hot Trend 2",
    description: "Discover the best in trendy outfits and accessories.",
    buttonText: "Shop Now",
  },
  {
    image: nike,
    title: "Hot Trend 3",
    description: "Find out what's new in the fashion world.",
    buttonText: "Explore",
  },
  {
    image: nike,
    title: "Hot Trend 4",
    description: "Get ahead with the latest fashion trends.",
    buttonText: "Discover",
  },
];

const HotTrend = () => {
  const [lastHoveredIndex, setLastHoveredIndex] = useState<number | null>(null);
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState<number | null>(
    null
  );

  return (
    <section className="w-full py-10">
      <div className="grid md:grid-cols-2 lg:flex lg:flex-row gap-4 lg:px-32">
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
            className={`relative rounded-2xl lg:h-[90vh] overflow-hidden  w-full flex-1 bg-gray-200 h-80 transition-all duration-500 ease-in-out ${
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
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-black bg-opacity-30 text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-sm md:text-base mb-4">{item.description}</p>
              <button className="bg-white text-black py-2 px-4 rounded-full">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotTrend;
