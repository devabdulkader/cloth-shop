import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import UserAccountSidebar from "../user-account-sidebar/UserAccountSidebar";
import DesktopSearchBar from "./searchBar/DesktopSearchBar";
import SideBarMobile from "./SideBarMobile";
import CustomBackDrop from "@/components/custom/CustomBackDrop";
import { useDispatch, useSelector } from "react-redux";
import { closeNav } from "@/lib/store/features/nav/navSlice";
import { RootState } from "@/lib/store/store";
import CartSideBar from "./CartSideBar";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <div className="relative">
      <DesktopSearchBar />
      <UserAccountSidebar />
      <SideBarMobile />
      <CartSideBar />

      <div className="hidden  lg:block z-50">
        <TopNav />
        <Navbar />
      </div>
      <div className="lg:hidden relative z-50 bg-white">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
