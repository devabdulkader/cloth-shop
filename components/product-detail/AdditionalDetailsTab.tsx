"use client";
import React, { useState } from "react";

// Define an interface for the component props
interface AdditionalDetailsTabProps {
  description: string;
  deliveryPolicy: string;
  shippingReturnPolicy: string;
}

const AdditionalDetailsTab: React.FC<AdditionalDetailsTabProps> = ({
  description,
  deliveryPolicy,
  shippingReturnPolicy,
}) => {
  const [activeTab, setActiveTab] = useState<string>("Description"); // Default to the first tab
  const [hoveredTab, setHoveredTab] = useState<string | null>(null); // Track hovered tab

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return description;
      case "Delivery Policy":
        return deliveryPolicy;
      case "Shipping & Return":
        return shippingReturnPolicy;
      default:
        return "Content not found.";
    }
  };

  return (
    <div className="w-full mt-5 overflow-x-auto ">
      {/* Tab Headers */}
      <div className="flex justify-between">
        {["Description", "Delivery Policy", "Shipping & Return"].map((tab) => (
          <button
            key={tab}
            className="relative py-2 px-4 text-2xl font-bold"
            onClick={() => setActiveTab(tab)}
            onMouseEnter={() => setHoveredTab(tab)} // Set hovered tab
            onMouseLeave={() => setHoveredTab(null)} // Clear hovered tab
          >
            <span className="relative z-10 ">{tab}</span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[25px] bg-gray-200  ${
                activeTab === tab || hoveredTab === tab ? "block" : "hidden"
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
