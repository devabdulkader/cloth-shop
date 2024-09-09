"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiCalendarTodoFill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import QuickViewWishlistModal from "@/components/common/QuickViewWishlistModal";
import useProductSelection from "@/hooks/useProductSelection";

interface Wishlist {
  id: string; // Changed to string
  title: string;
  date: string;
  quantity: number;
  price: number;
  selectedImage: string; // Changed to selectedImage to match your hook
  category: string[];
  sku: string;
  sizes: string[];
  buyPrice: number; // Ensure this matches with your actual data structure
  dateAdded: string; // Ensure this matches with your actual data structure
}

const WishlistPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [wishlist, setWishlist] = useState<Wishlist[]>([]);
  const [wishlistModal, setWishlistModal] = useState<Wishlist | undefined>(
    undefined
  );
  const { removeFromWishlist } = useProductSelection({ product: {} as any }); // Passing a dummy product

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };

  const removeWishLIstItem = (item: Wishlist) => {
    const { id, variantId, productId } = item;

    // Check if item has variantId
    if (variantId) {
      // If variantId exists, call removeFromWishlist with variantId
      removeFromWishlist(variantId);
    } else {
      // If variantId does not exist, call removeFromWishlist with productId
      removeFromWishlist(productId);
    }

    // Update the wishlist state
    setWishlist((prevWishlistData) =>
      prevWishlistData.filter((wishlistItem) => wishlistItem.id !== id)
    );
  };

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const handleModalOpen = (item: Wishlist) => {
    setWishlistModal(item);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setWishlistModal(undefined);
  };

  return (
    <div className="container">
      {/* {showModal && wishlistModal && (
        <QuickViewWishlistModal
          onClose={handleModalClose}
          wishlistItem={wishlistModal}
        />
      )} */}

      <div className="text-center py-20 md:py-40">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-medium uppercase">
          Page Wishlist
        </h1>
        <p className="text-sm font-normal py-2">
          <Link href="/">Home</Link> &#x2022; <span>Page Wishlist</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 pb-10 md:pb-20">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-between items-center rounded-xl border p-4 md:p-8 hover:shadow-xl duration-300"
          >
            <div className="flex flex-row items-center gap-4">
              <RiDeleteBin5Line
                size={18}
                className="cursor-pointer"
                onClick={() => removeWishLIstItem(item)}
              />
              <Image
                src={item.selectedImage}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="text-[12px] text-gray-700">
                <p className="font-bold">{item.title}</p>
                <p>${item.buyPrice}</p>
                <p className="flex gap-2 items-center">
                  <RiCalendarTodoFill size={14} />
                  <span>{formatDate(item.dateAdded)}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => handleModalOpen(item)}
              className="w-48 py-4 text-center hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold"
            >
              Quick View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
