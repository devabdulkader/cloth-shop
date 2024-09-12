"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiCalendarTodoFill, RiDeleteBin5Line } from "react-icons/ri";
import QuickViewModel from "@/components/card/QuickViewModel";
import { IAddToItem, IStoreItem } from "@/types/product";
import { RootState } from "@/lib/store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "@/lib/store/features/wishlist/wishlistSlice";

const WishlistPage: React.FC = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [wishlistItem, setWishlistItem] = useState<IStoreItem | undefined>();

  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlistItems
  );
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.wishlistCount
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };

  const removeWishLIstItem = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  const handleModalOpen = (item: IStoreItem) => {
    const product = wishlistItems.find((prod) => prod.uuid === item.uuid);

    if (product) {
      setWishlistItem(product);
      setShowModal(true);
    } else {
      console.warn("Product not found:", item.uuid);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      {showModal && wishlistItem && (
        <QuickViewModel onClose={handleModalClose} product={wishlistItem} />
      )}

      <div className="text-center py-20 md:py-40">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-medium uppercase">
          Page Wishlist
        </h1>
        <p className="text-sm font-normal py-2">
          <Link href="/">Home</Link> &#x2022; <span>Page Wishlist</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 pb-10 md:pb-20">
        {wishlistItems?.map((item) => (
          <div
            key={item.uuid}
            className="flex flex-row justify-between items-center rounded-xl border p-4 md:p-8 hover:shadow-xl duration-300"
          >
            <div className="flex flex-row items-center gap-4">
              <RiDeleteBin5Line
                size={18}
                className="cursor-pointer"
                onClick={() => removeWishLIstItem(item.uuid)}
              />
              <Image
                src={item.selectedProductUrl}
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
                  <span>{formatDate(item.date)}</span>
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
