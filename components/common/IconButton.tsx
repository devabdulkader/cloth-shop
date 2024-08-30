"use client";
import React from "react";
import { motion } from "framer-motion";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import { BUTTON_ANIMATION_CLASSES } from "@/lib/constant";

interface IconButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  additionalClass?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  tooltip,
  additionalClass,
}) => {
  return (
    <button
      className={`flex items-center justify-end text-gray-700 group space-x-5 ${additionalClass} `}
    >
      <span className="text-sm relative h-10 flex items-center justify-center px-5 transition-all duration-300 bg-black text-white transform  rounded-xl -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ">
        {tooltip}

        <IoMdArrowDropright className="text-4xl absolute -right-5 text-black top-0" />
      </span>
      <Link
        href="#"
        className={`bg-white size-10 flex justify-center items-center rounded-full text-black hover:bg-black hover:text-white  ${BUTTON_ANIMATION_CLASSES}`}
      >
        {icon}
      </Link>
    </button>
  );
};

export default IconButton;
