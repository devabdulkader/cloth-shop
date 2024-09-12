"use client";
import React, { useEffect, useState } from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaUndo,
  FaHeart,
  FaShareAlt,
  FaInfoCircle,
  FaClock,
} from "react-icons/fa";
import PaymentCards from "../common/PaymentCards";
import Link from "next/link";
import CartModal from "../common/CartModal";
import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";
import { IAddToItem, IProduct } from "@/types/product";
import { FaClockRotateLeft, FaQuestion, FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/store/features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectIsInWishlist,
  wishlistDecrementQuantity,
  wishlistIncrementQuantity,
} from "@/lib/store/features/wishlist/wishlistSlice";
import { RootState } from "@/lib/store/store";

interface ProductDetailsProps {
  product: IProduct;
}

interface ProductItem {
  id: string;
  url: string;
  color: string;
  alt: string;
}

const ProductDetails = ({ product, onColorClick }: ProductDetailsProps) => {
  const dispatch = useDispatch();

  const items = [
    {
      id: product._id,
      url: product.url,
      alt: product.alt,
      color: product.color,
    },
    ...product.productVariants.map((variant) => ({
      id: variant._id,
      url: variant.url,
      alt: variant.alt,
      color: variant.color,
    })),
  ];

  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes.length > 0 ? product.sizes[0].size : null
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    items[0].color
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(
    items[0].url
  );
  const [selectedId, setSelectedId] = useState<string | null>(items[0].id);

  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const [productItem, setProductItem] = useState<IAddToItem>({
    _id: product._id,
    title: product.title,
    description: product.description,
    url: product.url, // Assuming this is the general product image
    alt: product.alt,
    color: product.color,
    sku: product.sku,
    productCategory: product.productCategory,
    tags: product.tags,
    productBrand: product.productBrand,
    selectedProductId: selectedId || product._id,
    selectedProductUrl: selectedImage || product.url, // If selectedImage is the specific variant
    selectedProductColor: selectedColor || product.color, // Store selected color
    selectedProductSize: selectedSize || product.sizes[0].size, // Store selected size
    gender: product.gender,
    basePrice: product.basePrice,
    buyPrice: product.buyPrice,
    otherCost: product.otherCost, // Optional, can be undefined
    discountPrice: product.discountPrice, // Optional, can be undefined
    sizes: product.sizes, // Assuming this is an array of size options
    deliveryMethods: "", // Placeholder, can be updated with actual delivery methods
    sellingPrice: product.sellingPrice,
    productVariants: product.productVariants, // Assuming it's an array of variants
    quantity: 1, // Default to 1
  });

  useEffect(() => {
    setProductItem((prevProductItem) => ({
      ...prevProductItem,
      url: selectedImage || product.url,
      color: selectedColor || product.color,
      size: selectedSize || "",
      quantity: selectedQuantity, // Include quantity here
    }));
  }, [selectedSize, selectedColor, selectedImage, selectedQuantity]); // Add quantity to dependencies

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    const selectedItem = items.find((item) => item.color === color);
    if (selectedItem) {
      setSelectedImage(selectedItem.url);
      setSelectedId(selectedItem.id);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productItem));
    setShowCartModal(true);
    console.log(productItem);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [productItems, setProductItems] = useState<ProductItem[]>(items);
  const [colorId, setColorId] = useState<string | null>(null);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const activeColorItem = items.find((item) => item.color === product.color);
    if (activeColorItem) {
      setColorId(activeColorItem.id);
    }
  }, [product]);

  const handleColorClick = (index: number) => {
    const selectedColorItem = productItems[index];
    if (selectedColorItem) {
      setSelectedColor(selectedColorItem.color);
      setSelectedImage(selectedColorItem.url); // Update image URL for the selected color
      setSelectedId(selectedColorItem.id); // Also set the selected item's ID
      onColorClick(selectedColorItem.url);
    }
  };

  const increaseQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const isInWishlist = useSelector((state: RootState) =>
    selectIsInWishlist(
      state,
      product._id,
      selectedColor || product.color,
      selectedSize || product.sizes[0]?.size || ""
    )
  );
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(productItem.selectedProductId || ""));
      console.log("product id", productItem.selectedProductId);
    } else {
      dispatch(addToWishlist(productItem));
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setSelectedQuantity(value);
    }
  };

  const handleModalClose = () => {
    setShowCartModal(false);
  };

  return (
    <>
      {showCartModal && <CartModal onClose={handleModalClose} />}

      <div className="flex flex-col justify-start gap-5">
        {/* Header section with product name and review link */}
        <h1 className="text-2xl font-bold">{product.title}</h1>
        {/* Star rating for reviews */}
        <div className=" flex items-center justify-start  gap-3">
          <div className="flex justify-center items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className="text-sm text-gray-400" />
            ))}
          </div>
          <span className="text-gray-600 text-sm">(0)</span>

          <Link
            href="#reviews"
            className="text-slate-800 font-semibold text-sm"
          >
            VIEW ALL REVIEWS
          </Link>
        </div>
        {/* Product price */}
        <h2 className="text-2xl font-semibold text-gray-800">{`€${product.basePrice}`}</h2>
        {/* Product description */}
        <p className="text-gray-700  text-sm">{product.description}</p>
        <div className="flex flex-col gap-2">
          {/* Product tags */}
          <div className="flex space-x-10">
            <strong className="text-gray-800 text-sm w-40 uppercase">
              Tags:
            </strong>{" "}
            <p>{product.tags.map((tag) => tag.name).join(", ")}</p>
          </div>
          {/* Product SKU */}
          <div className="flex space-x-10">
            <strong className="text-gray-800 text-sm w-40 uppercase">
              SKU:
            </strong>
            <p>{product.sku}</p>
          </div>
          {/* Product category */}
          <div className="flex space-x-10">
            <strong className="text-gray-800 text-sm w-40 uppercase">
              Category:
            </strong>{" "}
            <p> {product.productCategory.map((cat) => cat.name).join(", ")}</p>
          </div>
        </div>

        {/* Product size selection */}
        <div className="flex flex-col gap-2">
          <strong className="text-gray-800 text-sm uppercase mb-2">
            Size: {selectedSize || "Select a size"}
          </strong>
          <div className="flex space-x-2">
            {product.sizes.map((size) => (
              <button
                key={size.size}
                className={`mr-2  py-1 px-3 rounded border ${
                  selectedSize === size.size
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300 text-gray-800"
                }`}
                onClick={() => handleSizeClick(size.size)}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
        {/* // Product color selection */}
        <div className="flex flex-col gap-2">
          <strong className="text-gray-800 text-sm uppercase mb-2">
            Color: {productItem.color}
          </strong>

          <div className="flex space-x-2">
            {productItems.map((item, index) => (
              <div
                key={index}
                className={`relative w-10 h-10 flex items-center justify-center rounded-full ${
                  selectedColor === item.color
                    ? "border-black"
                    : "border-gray-300"
                }`}
                style={{
                  border: "2px solid transparent", // This creates space for the outer ring
                  borderRadius: "50%",
                  backgroundColor: "transparent",
                }}
                onClick={() => handleColorClick(index)}
              >
                {/* Outer Ring */}
                <div
                  className={`absolute inset-0 rounded-full border-2 ${
                    selectedColor === item.color
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                ></div>
                {/* Inner Ring */}

                {/* Actual Color */}
                <div
                  className="absolute inset-1 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantity and action buttons */}
        <section>
          <p className="">
            <strong className="text-gray-800 text-sm uppercase mb-2">
              Quantity:
            </strong>
          </p>
          <div className="flex gap-5 mb-2">
            <div className="flex items-center space-x-2 border rounded-full quantity">
              {/* Minus button */}
              <button onClick={decreaseQuantity} className="px-3 ">
                -
              </button>
              <input
                type="number"
                value={selectedQuantity}
                min="1"
                onChange={handleQuantityChange}
                className="w-12 text-center mx-2 "
              />
              <button onClick={increaseQuantity} className="px-3">
                +
              </button>
            </div>

            {/* Add to Bag and Heart buttons */}
            <div className="flex items-center space-x-4  w-full">
              <button
                onClick={handleAddToCart}
                className={`border py-3 px-4 font-semibold shadow text-sm w-full uppercase bg-[#EDEDED]  rounded-full hover:bg-slate-800 hover:text-white transition-colors duration-300 ease-in-out`}
              >
                Add to cart
              </button>
              <button
                onClick={handleWishlistToggle}
                className={`${BUTTON_ANIMATION_CLASSES}  flex items-center p-4 justify-center border rounded-full ${
                  isInWishlist
                    ? "text-gray-200 bg-slate-800"
                    : "text-slate-800 bg-[#EDEDED] hover:text-gray-200 hover:bg-slate-800"
                }`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
          {/* Buy Now button */}
          <Link href="/checkouts" className="">
            <button
              className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} uppercase font-semibold shadow text-sm w-full border p-4 rounded-full`}
            >
              Buy It Now
            </button>
          </Link>
        </section>

        {/* Share, Ask a Question, FAQ Section */}
        <div className="mt-2">
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
        <div className="py-5">
          <PaymentCards />
        </div>
        {/* Product guarantee and shipping information */}
        <div className="">
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
              <FaClockRotateLeft />
              <span>30-Day Money Back Guarantee</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
