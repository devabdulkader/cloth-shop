"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { closeCartSidebar } from "@/lib/store/features/cartSidebar/cartSidebarSlice";
import { RootState } from "@/lib/store/store";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

import CustomCrossBar from "@/components/custom/CustomCrossBar";
import CustomBackDrop from "@/components/custom/CustomBackDrop";
import Image from "next/image";
import Link from "next/link";
import { RiPlayLargeFill } from "react-icons/ri";

interface Tag {
  title: string;
  href: string;
}

// Updated tags array with specific tags
const tags: Tag[] = [
  { title: "Men", href: "/men" },
  { title: "Women", href: "/women" },
  { title: "Shoes", href: "/shoes" },
  { title: "Cloth", href: "/cloth" },
  // Add more tags as needed
];

const CartSideBar: React.FC = () => {
  const dispatch = useDispatch();
  const isCartSidebarOpen = useSelector(
    (state: RootState) => state.cartSidebar.isCartSidebarOpen
  );

  const handleCartClose = () => {
    dispatch(closeCartSidebar());
  };

  return (
    <>
      {/* Background Overlay */}
      {isCartSidebarOpen && <CustomBackDrop onClose={handleCartClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-layer-2 bg-white h-full w-96 px-8 shadow-lg transform transition-transform duration-500 ${
          isCartSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <main className="relative z-20 h-full">
          <div className="flex items-center space-x-5 py-5 border-b">
            <h3>My Cart</h3>
            <div className="flex relative bg-black text-white py-2 px-3 rounded-md">
              <span className="text-sm flex items-center justify-center ">
                0 Items
              </span>
              <RiPlayLargeFill className="rotate-180 absolute -left-3 text-2xl text-black" />
            </div>

            <div onClick={handleCartClose} className="absolute right-0">
              <CustomCrossBar />
            </div>
          </div>

          {/* Sidebar Items */}
          <div className="grid place-items-center pt-10">
            <Image
              src="/common/cart-empty.webp"
              alt="Empty Cart"
              width={300}
              height={300}
              className="size-54"
            />
          </div>

          <div className="py-8 flex flex-col items-center gap-4">
            {tags.map((tag, index) => (
              <Link
                key={index}
                href={tag.href}
                className="block rounded-full w-48 bg-gray-200 text-gray-800 px-4 py-3 text-center transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
              >
                {tag.title}
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default CartSideBar;
