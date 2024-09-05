"use client";
import React, { useState } from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaUndo,
  FaHeart,
  FaShareAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaClock,
  FaClockRotateLeft,
  FaQuestion,
  FaStar,
} from "react-icons/fa6";
import PaymentCards from "../common/PaymentCards";
import Link from "next/link";
import CartModal from "../common/CartModal";
import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";

type ProductDetailsProps = {
  title: string;
  description: string;
  basePrice: number;
  buyPrice: number;
  otherCost: number;
  discountPrice: number;
  sku: string;
  totalQuantity: number;
  lowStockQuantity: number;
  displayImage: {
    url: string;
    alt: string;
    color: string;
  };
  productCategory: { name: string }[];
  productAttributes: { attributeName: string; attributeValue: string }[];
  productSEO: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    searchEngineListings: string;
  }[];
  productVariants: {
    tags: string[];
    size: string[];
    quantity: number;
    sellingPrice: number;
    status: boolean;
  }[];
  productBrand: {
    name: string;
    description: string;
    logoURL: string;
  }[];
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number | "">(1); // Initialize quantity state
  const [selectedSize, setSelectedSize] = useState<string>(
    product.productVariants[0]?.size[0] || ""
  ); // Initialize with the first size if available
  const [showCartModal, setShowCartModal] = useState(false);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Number(value);
    if (value === "" || (!isNaN(numericValue) && numericValue > 0)) {
      setQuantity(value === "" ? "" : numericValue);
    }
  };

  const decreaseQuantity = () => {
    if (quantity !== "" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity === "" || quantity > 0) {
      setQuantity((quantity === "" ? 0 : quantity) + 1);
    }
  };

  const handleModalOpen = () => {
    setShowCartModal(true);
  };
  const handleModalClose = () => {
    setShowCartModal(false);
  };

  return (
    <>
      {showCartModal && <CartModal onClose={handleModalClose} />}

      <div className="flex flex-col space-y-8 py-10">
        {/* Header section with product name and review link */}
        <div>
          <h1 className="text-3xl font-bold mt-5 md:mt-0 mb-5">
            {product.title}
          </h1>
          <div className="flex items-center space-x-3">
            {/* Star rating for reviews */}
            <div className="text-yellow-500 text-lg flex items-center justify-center py-5 gap-5">
              {" "}
              <div className="flex justify-center items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="text-2xl" />
                ))}
              </div>
              <div className="flex justify-center items-center pt-1">
                <span className="text-gray-600">(0)</span>
                <Link href="#reviews" className="text-blue-500 hover:underline">
                  VIEW ALL REVIEWS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product price */}
        <div className="text-2xl font-semibold text-gray-800">{`€${product.basePrice}`}</div>

        {/* Product description */}
        <div className="mb-4">
          <p className="text-gray-700 mb-2 text-xl">{product.description}</p>
        </div>

        {/* Product tags */}
        <div className="mb-4">
          <strong className="text-gray-800 text-xl">Tags:</strong>{" "}
          {product.productVariants[0]?.tags.join(", ")}
        </div>

        {/* Product SKU */}
        <div className="mb-4">
          <strong className="text-gray-800 text-xl">SKU:</strong> {product.sku}
        </div>

        {/* Product category */}
        <div className="mb-4">
          <strong className="text-gray-800 text-xl">Category:</strong>{" "}
          {product.productCategory.map((cat) => cat.name).join(", ")}
        </div>

        {/* Product size selection */}
        <div className="mb-4">
          <strong className="text-gray-800 text-xl ">
            Size: {selectedSize || "Select a size"}
          </strong>
          <div className="flex space-x-2 mt-5">
            {product.productVariants[0]?.size.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border border-gray-300 rounded px-5 py-3 text-gray-700 ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <section>
          <p className="mb-5">
            <strong className="text-gray-800 text-xl">Quantity:</strong>
          </p>
          <div className="flex gap-5">
            <div className="flex items-center mb-4 space-x-2 border rounded-full quantity">
              {/* Minus button */}
              <button
                onClick={decreaseQuantity}
                className="p-2 border-gray-300"
              >
                -
              </button>

              {/* Quantity input */}
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="text-center w-20 border-0 outline-none"
                min="1"
                step="1" // Step size for increment/decrement
              />

              {/* Plus button */}
              <button
                onClick={increaseQuantity}
                className="p-2 border-gray-300"
              >
                +
              </button>
            </div>

            {/* Add to Bag and Heart buttons */}
            <div className="flex items-center space-x-4 mb-4 w-full">
              <button
                onClick={handleModalOpen}
                className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center  justify-center w-full p-4 border rounded-full bg-gray-100`}
              >
                Add to Bag
              </button>
              <button
                className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center p-4 justify-center border rounded-full bg-gray-100`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </section>

        {/* Buy Now button */}
        <Link href="/checkouts" className="mb-4">
          <button
            className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} w-full border p-4 rounded-full`}
          >
            Buy It Now
          </button>
        </Link>

        {/* Share, Ask a Question, FAQ Section */}
        <div className="mb-8">
          <div className="flex space-x-6">
            {/* Share */}
            <div className="flex items-center space-x-2">
              <FaShareAlt className="text-gray-600 text-2xl" />
              <span className="text-gray-700">Share</span>
            </div>

            {/* Ask a Question */}
            <div className="flex items-center space-x-2">
              <FaQuestion className="text-gray-600 text-2xl" />
              <span className="text-gray-700">Ask a Question</span>
            </div>

            {/* FAQ */}
            <div className="flex items-center space-x-2">
              <FaInfoCircle className="text-gray-600 text-2xl" />
              <span className="text-gray-700">FAQ</span>
            </div>
          </div>
        </div>

        {/* Payment cards */}
        <div>
          <PaymentCards />
        </div>

        {/* Product guarantee and shipping information */}
        <div className="mb-5">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li className="flex items-center text-xl">
              <FaClockRotateLeft className="text-gray-600 mr-2" />
              Orders ship within 5 to 10 business days.
            </li>
            <li className="flex items-center text-xl">
              <FaShippingFast className="text-gray-600 mr-2" />
              Hooray! This item ships free to the US.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
