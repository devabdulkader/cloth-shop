"use client";
import React, { useState } from "react";

// Define an interface for tab data
interface Tab {
  title: string;
  content: string;
}

// Array of tab data
const tabs: Tab[] = [
  {
    title: "Description",
    content:
      "This is the description of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt maxime quas dignissimos esse voluptatibus impedit, minima explicabo ducimus, voluptates ipsam reiciendis illo iste? Nobis sunt facere animi cum, nemo temporibus tempore repudiandae officiis commodi veniam atque, minima possimus dignissimos soluta aliquid quibusdam iusto excepturi. Accusantium atque ex repellat maxime non quia, tempore inventore in commodi voluptatum, quasi, repudiandae consectetur recusandae animi reprehenderit eius minima a aliquam saepe numquam ut! Laborum, vel? Eveniet ea minus, fugiat aliquam itaque quaerat molestiae ullam hic? Cum error officia sapiente laboriosam quae eos cumque, accusantium aperiam autem veniam fugit reprehenderit fugiat nemo eaque nisi?",
  },
  {
    title: "Delivery Policy",
    content:
      "Details about the delivery policy.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt maxime quas dignissimos esse voluptatibus impedit, minima explicabo ducimus, voluptates ipsam reiciendis illo iste? Nobis sunt facere animi cum, nemo temporibus tempore repudiandae officiis commodi veniam atque, minima possimus dignissimos soluta aliquid quibusdam iusto excepturi. Accusantium atque ex repellat maxime non quia, tempore inventore in commodi voluptatum, quasi, repudiandae consectetur recusandae animi reprehenderit eius minima a aliquam saepe numquam ut! Laborum, vel? Eveniet ea minus, fugiat aliquam itaque quaerat molestiae ullam hic? Cum error officia sapiente laboriosam quae eos cumque, accusantium aperiam autem veniam fugit reprehenderit fugiat nemo eaque nisi?",
  },
  {
    title: "Shipping & Return",
    content:
      "Information on shipping and returns. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt maxime quas dignissimos esse voluptatibus impedit, minima explicabo ducimus, voluptates ipsam reiciendis illo iste? Nobis sunt facere animi cum, nemo temporibus tempore repudiandae officiis commodi veniam atque, minima possimus dignissimos soluta aliquid quibusdam iusto excepturi. Accusantium atque ex repellat maxime non quia, tempore inventore in commodi voluptatum, quasi, repudiandae consectetur recusandae animi reprehenderit eius minima a aliquam saepe numquam ut! Laborum, vel? Eveniet ea minus, fugiat aliquam itaque quaerat molestiae ullam hic? Cum error officia sapiente laboriosam quae eos cumque, accusantium aperiam autem veniam fugit reprehenderit fugiat nemo eaque nisi?",
  },
  {
    title: "Custom Tab",
    content:
      "Custom tab content goes here.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt maxime quas dignissimos esse voluptatibus impedit, minima explicabo ducimus, voluptates ipsam reiciendis illo iste? Nobis sunt facere animi cum, nemo temporibus tempore repudiandae officiis commodi veniam atque, minima possimus dignissimos soluta aliquid quibusdam iusto excepturi. Accusantium atque ex repellat maxime non quia, tempore inventore in commodi voluptatum, quasi, repudiandae consectetur recusandae animi reprehenderit eius minima a aliquam saepe numquam ut! Laborum, vel? Eveniet ea minus, fugiat aliquam itaque quaerat molestiae ullam hic? Cum error officia sapiente laboriosam quae eos cumque, accusantium aperiam autem veniam fugit reprehenderit fugiat nemo eaque nisi?",
  },
];

const AdditionalDetailsTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].title); // Default to the first tab
  const [hoveredTab, setHoveredTab] = useState<string | null>(null); // Track hovered tab

  // Function to render content based on the active tab
  const renderContent = () => {
    const activeTabContent = tabs.find(
      (tab) => tab.title === activeTab
    )?.content;
    return activeTabContent || "Content not found.";
  };

  return (
    <div className="w-full mt-5 overflow-x-auto">
      {/* Tab Headers */}
      <div className="flex justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className="relative py-2 px-4 text-2xl font-bold"
            onClick={() => setActiveTab(tab.title)}
            onMouseEnter={() => setHoveredTab(tab.title)} // Set hovered tab
            onMouseLeave={() => setHoveredTab(null)} // Clear hovered tab
          >
            <span className="relative z-10">{tab.title}</span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[25px] bg-gray-200 z-0 ${
                activeTab === tab.title || hoveredTab === tab.title
                  ? "block"
                  : "hidden"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 text-xl">{renderContent()}</div>
    </div>
  );
};

export default AdditionalDetailsTab;
