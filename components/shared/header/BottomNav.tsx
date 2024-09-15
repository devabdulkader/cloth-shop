import CustomIcon from "@/components/custom/CustomIcon";
import { RootState } from "@/lib/store/store";
import React from "react";
import { FaHome, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { toggleUserSidebar } from "@/lib/store/features/userSidebar/userSidebarSlice";
import Link from "next/link";

const BottomNav: React.FC = () => {
  const dispatch = useDispatch();

  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.wishlistCount
  );
  const handleUserClick = () => {
    dispatch(toggleUserSidebar());
  };
  return (
    <div className="flex justify-between items-center bg-white shadow-md z-layer-1 fixed left-0 bottom-0 w-full border-t border-gray-300 md:hidden">
      {/* Home Item */}
      <div className="flex-1 flex flex-col items-center py-2 border-r border-gray-300">
    
        <CustomIcon
          Icon={IoHomeOutline}
          iconClassName="text-xl mb-1"
          href="/"
          title="Home"
        />
      </div>

      {/* Shopping Item */}
      <div className="flex-1 flex flex-col items-center py-2 border-r border-gray-300">
      <CustomIcon
          Icon={IoGridOutline}
          iconClassName="text-xl mb-1"
          href="/products"
          title="Shopping"
        />

      
      </div>

      {/* Wishlist Item */}
      <div className="flex-1 flex flex-col items-center py-2 border-r border-gray-300">
        <CustomIcon
          Icon={FaRegHeart}
          iconClassName="text-xl mb-1"
          href="/wishlist"
          quantity={wishlistCount}
          title="Wishlist"
        />
      </div>

      {/* Account Item */}
      <div className="flex-1 flex flex-col items-center py-2">
        <CustomIcon
          Icon={AiOutlineUser}
          iconClassName="text-2xl"
          onClick={handleUserClick}
          title="Account"
        />{" "}
      </div>
    </div>
  );
};

export default BottomNav;
