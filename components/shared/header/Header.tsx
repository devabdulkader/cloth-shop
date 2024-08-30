import React from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import MobileNav from "./MobileNav";
import UserAccountSidebar from "../user-account-sidebar/UserAccountSidebar";
import DesktopSearchBar from "./searchBar/DesktopSearchBar";

const Header = () => {
  return (
    <div className="relative">
      {/* <TopHeader /> */}
      <DesktopSearchBar />
      <UserAccountSidebar />

      <div className="hidden xl:block relative z-50">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
