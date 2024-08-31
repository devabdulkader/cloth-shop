// components/NavIcons.tsx
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import UserSidebarToggler from "../user-account-sidebar/UserSidebarToggler";
import { useDispatch, useSelector } from "react-redux";
import { toggleDesktopSearchBar } from "@/lib/store/features/searchBar/desktopSearchBarSlice";
import CustomIcon from "@/components/custom/CustomIcon";
import { MdOutlineShoppingBag } from "react-icons/md";
import CustomSearchIcon from "@/components/custom/CustomSearchIcon";

const NavIcons: React.FC = () => {
  const dispatch = useDispatch();

  // Access the correct part of the state
  const isDesktopSearchBarOpen = useSelector(
    (state: any) => state.desktopSearchBar.isDesktopSearchBarOpen
  );

  return (
    <div className="space-x-8 flex justify-center items-center">
 
      <button  className="cursor-pointer"
       onClick={() => dispatch(toggleDesktopSearchBar())}
      >
        <CustomSearchIcon />
      </button>

      <UserSidebarToggler />

      <CustomIcon Icon={IoStarOutline} iconClassName="text-2xl" quantity={3} />

      <CustomIcon
        Icon={MdOutlineShoppingBag}
        iconClassName="text-2xl"
        quantity={5}
      />
    </div>
  );
};

export default NavIcons;
