import React from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div>
      {/* <TopHeader /> */}
      <div>
        <Navbar />
      </div>
      <MobileNav />
    </div>
  );
};

export default Header;
