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
      <div className="flex justify-between border-b">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className={`py-2 px-4 ${
              activeTab === tab.title ? "border-b-2 border-black font-bold" : ""
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4">{renderContent()}</div>
    </div>
  );
};

export default AdditionalDetailsTab;
