// components/NavIcons.tsx
"use client";
import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleDesktopSearchBar } from "@/lib/store/features/searchBar/desktopSearchBarSlice";
import CustomIcon from "@/components/custom/CustomIcon";
import { MdOutlineShoppingBag } from "react-icons/md";
import CustomSearchIcon from "@/components/custom/CustomSearchIcon";
import { toggleCartSidebar } from "@/lib/store/features/cartSidebar/cartSidebarSlice";
import { toggleUserSidebar } from "@/lib/store/features/userSidebar/userSidebarSlice";
import { AiOutlineUser } from "react-icons/ai";
import useProductSelection from "@/hooks/useProductSelection";
import { RootState } from "@/lib/store/store";

const NavIcons: React.FC = () => {
  const dispatch = useDispatch();
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const [wishlistItemCount, setWishlistItemCount] = useState<number>(0);
  const cartCount = useSelector((state: RootState) => state.cart.cartCount);

  const wishlistCount = useSelector((state: RootState) => state.wishlist.wishlistCount);

  const handleCartClick = () => {
    dispatch(toggleCartSidebar());
  };

  const handleUserClick = () => {
    dispatch(toggleUserSidebar());
  };

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
