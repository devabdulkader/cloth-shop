// components/Logo.tsx
"use client";
import React from "react";
import { FaStore } from "react-icons/fa"; // Example icon, you can choose another

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <FaStore className="text-2xl" />
      <span className="text-2xl font-bold">Minas</span>
    </div>
  );
};

export default Logo;
