// components/NavIcons.tsx
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import UserSidebarToggler from "../user-account-sidebar/UserSidebarToggler";
import { useDispatch, useSelector } from "react-redux";
import { toggleDesktopSearchBar } from "@/lib/store/features/searchBar/desktopSearchBarSlice";

const NavIcons: React.FC = () => {
  const dispatch = useDispatch();

  // Access the correct part of the state
  const isDesktopSearchBarOpen = useSelector(
    (state: any) => state.desktopSearchBar.isDesktopSearchBarOpen
  );

  return (
    <div className="space-x-8 flex justify-center items-center">
      <IoMdSearch
        className="text-2xl cursor-pointer"
        onClick={() => dispatch(toggleDesktopSearchBar())}
      />

      <UserSidebarToggler />

      <IoStarOutline className="text-2xl" />
    </div>
  );
};

export default NavIcons;
