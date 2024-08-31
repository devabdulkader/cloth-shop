import React from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import MobileNav from "./MobileNav";
import UserAccountSidebar from "../user-account-sidebar/UserAccountSidebar";
import DesktopSearchBar from "./searchBar/DesktopSearchBar";
import SideBarMobile from "./SideBarMobile";
import CustomBackDrop from "@/components/custom/CustomBackDrop";
import { useDispatch, useSelector } from "react-redux";
import { closeNav } from "@/lib/store/features/nav/navSlice";
import { RootState } from "@/lib/store/store";

const Header = () => {
  return (
    <div className="relative">
      {/* <TopHeader /> */}
      <DesktopSearchBar />
      <UserAccountSidebar />
      <SideBarMobile />

      <div className="hidden xl:block relative z-50">
        <Navbar />
      </div>
      <div className="xl:hidden relative z-50 bg-white">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
