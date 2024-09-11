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
import { IProduct } from "@/types/product";
import { FaClockRotateLeft, FaQuestion, FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/features/cart/cartSlice";

interface ProductDetailsProps {
  product: IProduct;
}

interface ProductItem {
  id: string;
  url: string;
  color: string;
  alt: string;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
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

  const [productItem, setProductItem] = useState<IProduct>({
    _id: product._id,
    selectedProductId: selectedId || "",
    title: product.title,
    description: product.description,
    gender: product.gender,
    basePrice: product.basePrice,
    buyPrice: product.buyPrice,
    otherCost: product.otherCost,
    discountPrice: product.discountPrice,
    url: selectedImage || product.url,
    color: selectedColor || product.color,
    deliveryMethods: "",
    size: selectedSize || "",
    sellingPrice: product.sellingPrice,
    productVariants: product.productVariants,
    availableSizes: product.sizes,
    quantity: selectedQuantity || 1,
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
                key={size.size}
                className={`mr-2 mb-2 py-1 px-3 rounded border ${
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
        <div className="mb-4">
          <strong className="text-gray-800 text-xl">Color:</strong>
          <div className="flex space-x-2 mt-5">
            {productItems.map((item, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full mr-2 mb-2 ${
                  selectedColor === item.color ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ backgroundColor: item.color }}
                onClick={() => handleColorClick(index)}
              >
                {/* Inner div for the actual color */}
                <div
                  className="h-full w-full rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
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
                className="bg-gray-300 px-3 py-1 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={selectedQuantity}
                min="1"
                onChange={handleQuantityChange}
                className="w-12 text-center mx-2 border border-gray-300 rounded"
              />
              <button
                onClick={increaseQuantity}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                +
              </button>
            </div>

            {/* Add to Bag and Heart buttons */}
            <div className="flex items-center space-x-4 mb-4 w-full">
              <button
                onClick={handleAddToCart}
                className={`border py-3 px-4 w-full  rounded-full hover:bg-slate-800 hover:text-white transition-colors duration-300 ease-in-out`}
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
