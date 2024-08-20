import React from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <div className="py-2 border">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
