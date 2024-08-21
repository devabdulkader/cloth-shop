import React from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
