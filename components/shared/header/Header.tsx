import React from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import MobileNav from "./MobileNav";
import UserAccountSidebar from "../user-account-sidebar/UserAccountSidebar";

const Header = () => {
  return (
    <div>
      {/* <TopHeader /> */}
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
