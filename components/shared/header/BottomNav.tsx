import CustomIcon from "@/components/custom/CustomIcon";
import React from "react";
import { FaHome, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoGridOutline, IoHomeOutline } from "react-icons/io5";

const BottomNav: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md z-layer-1 fixed left-0 bottom-0 w-full border-t border-gray-300 md:hidden">
      {/* Home Item */}
      <div className="flex-1 flex flex-col items-center py-2 border-r border-gray-300">
        <IoHomeOutline className="text-xl mb-1" />
        <span className="text-xs">Home</span>
      </div>

      {/* Shopping Item */}
      <div className="flex-1 flex flex-col items-center py-2 border-r border-gray-300">
        <IoGridOutline className="text-xl mb-1" />
        <span className="text-xs">Shopping</span>
      </div>

      {/* Wishlist Item */}
      <div className="flex-1 flex flex-col items-center py-2 border-r border-gray-300">
        <CustomIcon
          Icon={FaRegHeart}
          iconClassName="text-xl mb-1"
          quantity={3}
        />

        <span className="text-xs">Wishlist</span>
      </div>

      {/* Account Item */}
      <div className="flex-1 flex flex-col items-center py-2">
        <FiUser className="text-xl mb-1" />
        <span className="text-xs">Account</span>
      </div>
    </div>
  );
};

export default BottomNav;
