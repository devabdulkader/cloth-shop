// components/Logo.tsx
"use client";
import Image from "next/image";
import React from "react";
import Logo2 from "@/public/common/Logo_1.webp";

import { FaStore } from "react-icons/fa"; // Example icon, you can choose another

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* <FaStore className="text-2xl" />
      <span className="text-2xl font-bold">Minas</span> */}
      <Image src={Logo2} className="w-44" alt="Logo 2" />
    </div>
  );
};

export default Logo;
