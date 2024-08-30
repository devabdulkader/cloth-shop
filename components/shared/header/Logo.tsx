"use client";
import Image from "next/image";
import React from "react";
import Logo2 from "@/public/common/Logo_1.webp";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/">
        <Image src={Logo2} className="w-28" alt="Logo 2" />
      </Link>
    </div>
  );
};

export default Logo;
