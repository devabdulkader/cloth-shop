// components/NavIcons.tsx
"use client";
import React, { useState, useEffect } from "react";
import { IoStarOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleDesktopSearchBar } from "@/lib/store/features/searchBar/desktopSearchBarSlice";
import CustomIcon from "@/components/custom/CustomIcon";
import { MdOutlineShoppingBag } from "react-icons/md";
import CustomSearchIcon from "@/components/custom/CustomSearchIcon";
import { toggleCartSidebar } from "@/lib/store/features/cartSidebar/cartSidebarSlice";
import { toggleUserSidebar } from "@/lib/store/features/userSidebar/userSidebarSlice";
import { AiOutlineUser } from "react-icons/ai";
import { RootState } from "@/lib/store/store";

const NavIcons: React.FC = () => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false); // State to track if the component is mounted
  const cartCount = useSelector((state: RootState) => state.cart.cartCount);
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.wishlistCount
  );

  useEffect(() => {
    setIsMounted(true); // Set to true after component is mounted
  }, []);

  const handleCartClick = () => {
    dispatch(toggleCartSidebar());
  };

  const handleUserClick = () => {
    dispatch(toggleUserSidebar());
  };

  if (!isMounted) return null; // Avoid rendering until component has mounted

  return (
    <div className="space-x-8 flex justify-center items-center">
      <button
        className="cursor-pointer"
        onClick={() => dispatch(toggleDesktopSearchBar())}
      >
        <CustomSearchIcon />
      </button>

      <CustomIcon
        Icon={AiOutlineUser}
        iconClassName="text-2xl"
        onClick={handleUserClick}
      />

      <CustomIcon
        Icon={IoStarOutline}
        iconClassName="text-2xl"
        quantity={wishlistCount}
        href="/wishlist"
      />

      <CustomIcon
        Icon={MdOutlineShoppingBag}
        iconClassName="text-2xl"
        quantity={cartCount}
        onClick={handleCartClick}
      />
    </div>
  );
};

export default NavIcons;
