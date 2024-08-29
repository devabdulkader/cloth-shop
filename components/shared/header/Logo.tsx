"use client";
import Image from "next/image";
import React from "react";
import Logo2 from "@/public/common/Logo_1.webp";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={Logo2}
        className="w-28 md:w-32 lg:w-40"
        alt="Logo 2"
      />
    </div>
  );
};

export default Logo;
