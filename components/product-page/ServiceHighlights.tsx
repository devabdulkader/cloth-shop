import React from "react";
import { BsTruck } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";
import { FaTruck, FaHeadset, FaUndo } from "react-icons/fa"; // Example icons from react-icons
import { PiHeadset, PiTruckDuotone } from "react-icons/pi";

const ServiceHighlights: React.FC = () => {
  return (
    <div className="bg-white border-b border-t py-24">
      <div className="container w-full mx-auto flex flex-col md:flex-row justify-between items-center ">
        {/* Free Delivery */}
        <div className="flex items-center mb-4 md:mb-0 gap-5 ">
          <div className="size-16 shadow-md bg-white rounded-full flex justify-center items-center">
            <PiTruckDuotone className="text-3xl text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Free Delivery</h3>
            <p className="text-sm">Free shipping on all orders above $200</p>
          </div>
        </div>

        {/* Support 24/7 */}
        <div className="flex items-center space-x-4">
          <div className="size-16 shadow-md bg-white rounded-full flex justify-center items-center">
            <PiHeadset className="text-3xl text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support 24/7</h3>
            <p className="text-sm">Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>

        {/* 7 Days Return */}
        <div className="flex items-center space-x-4">
          <div className="size-16 shadow-md bg-white rounded-full flex justify-center items-center">
            <CiUndo className="text-3xl text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">7 Days Return</h3>
            <p className="text-sm">Return it within 30 days for an exchange</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
