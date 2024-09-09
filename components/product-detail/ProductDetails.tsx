"use client";
import React, { useEffect, useState } from "react";
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
import { IProduct } from "@/types/product";
import useProductSelection from "@/hooks/useProductSelection";

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  // Initialize hook
  const {
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
    handleSizeChange,
    handleColorChange,
    handleQuantityChange,
    decreaseQuantity,
    increaseQuantity,
    addToCart,
    addToWishlist,
    getSelectionState,
    handleImageChange,
    isProductInWishlist
  } = useProductSelection({ product });
  const [productItems, setProductItems] = useState<IProduct[]>([]);
  const [addToId, setAddToId] = useState<string>("");
  const [showCartModal, setShowCartModal] = useState(false);
  const handleColorClick = (item) => {
    console.log(item);
    setAddToId(item.id);
    handleImageChange(item.url);
  };
  useEffect(() => {
    if (product) {
      const items = [
        {
          id: product._id,
          url: product.url,
          color: product.color,
          alt: product.alt,
        },
        ...(product.productVariants?.map((variant) => ({
          id: variant._id,
          url: variant.url,
          color: variant.color,
          alt: variant.alt,
        })) || []),
      ];

      setProductItems(items);
    }
  }, [product]);

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
          {product.tags.map((tag) => tag.name).join(", ")}
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
          <strong className="text-gray-800 text-xl">
            Size: {selectedSize || "Select a size"}
          </strong>
          <div className="flex space-x-2 mt-5">
            {product.sizes.map((size) => (
              <button
                key={size._id}
                onClick={() => handleSizeChange(size.size)}
                className={`border border-gray-300 rounded px-5 py-3 text-gray-700 ${
                  selectedSize === size.size
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
        {/* // Product color selection */}
        <div className="mb-4">
          <strong className="text-gray-800 text-xl">Color:</strong>
          <div className="flex space-x-2 mt-5">
            {productItems.map((img) => (
              <div
                key={img.color}
                className={`relative h-8 w-12 border cursor-pointer ${
                  selectedColor === img.color ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: img.color }}
                onClick={() => {
                  handleColorChange(img.color);
                  handleColorClick(img);
                }}
              >
                {selectedColor === img.color && (
                  <div className="absolute inset-0 border-2 border-white p-1"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Quantity and action buttons */}
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
                step="1"
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
                onClick={() => {
                  addToCart(addToId);
                  handleModalOpen();
                }}
                className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center justify-center w-full p-4 border rounded-full bg-gray-100`}
              >
                Add to Bag
              </button>
              <button
                onClick={() => addToWishlist(addToId)}
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
            <li className="flex items-center space-x-2">
              <FaShippingFast />
              <span>Free Shipping on orders over €50</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaHeadset />
              <span>24/7 Customer Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaUndo />
              <span>Easy Returns within 30 days</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClock />
              <span>Fast Delivery in 3-5 working days</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClockRotateLeft  />
              <span>30-Day Money Back Guarantee</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
