// components/NavIcons.tsx
import React from "react";
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

const NavIcons: React.FC = () => {
  const dispatch = useDispatch();

  // Access the correct part of the state
  const isDesktopSearchBarOpen = useSelector(
    (state: any) => state.desktopSearchBar.isDesktopSearchBarOpen
  );
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
        quantity={3}
        href="/wishlist"
      />

      <CustomIcon
        Icon={MdOutlineShoppingBag}
        iconClassName="text-2xl"
        quantity={5}
        onClick={handleCartClick}
      />
    </div>
  );
};

export default NavIcons;
