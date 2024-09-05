import React, { useState, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";
import useProductSelection from "@/hooks/useProductSelection";
import { IProduct } from "@/types/product";
import ArrowButton from "../button/ArrowButton";
import { FreeMode, Navigation } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomCrossBar from "../custom/CustomCrossBar";
import CartModal from "../common/CartModal";
import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";

// Initialize Swiper modules

interface QuickViewModalProps {
  product: IProduct;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const swiperRef = useRef<any>(null);

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
  } = useProductSelection({ product });

  const productVariants = product?.productVariants || []; // Corrected here
  const sizes = product?.sizes || [];
  const colors = product?.productVariants.map((img) => img.color) || []; // Corrected here

  const handleAddToCart = () => {
    addToCart(); // Ensure addToCart function handles variant details correctly
    toast.success("Item added to cart!");
  };

  const handleAddToWishlist = () => {
    addToWishlist(); // Ensure addToWishlist function works as expected
    toast.success("Item added to wishlist!");
  };

  const [showCartModal, setShowCartModal] = useState(false);

  const handleModalOpen = () => {
    setShowCartModal(true);
  };

  const handleModalClose = () => {
    setShowCartModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {showCartModal && <CartModal onClose={handleModalClose} />}
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 flex rounded-lg overflow-hidden">
        {/* Swiper section */}
        <div className="w-1/2 relative">
          <Swiper
            spaceBetween={10}
            modules={[FreeMode, Navigation]}
            className="mySwiper2 h-full"
            onInit={(swiper) => {
              swiperRef.current = swiper; // Store swiper instance
            }}
          >
            {productVariants.map((image, index) => (
              <SwiperSlide
                key={index}
                className="rounded-md overflow-hidden relative"
              >
                <Image
                  src={image.url}
                  alt={`Image of ${product.title}`}
                  className="object-cover w-full h-full rounded-md"
                  width={300}
                  height={300}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div
            className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowButton direction="left" />
          </div>
          <div
            className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowButton direction="right" />
          </div>
        </div>

        {/* Product details section */}
        <div className="w-1/2 p-6 flex flex-col">
          <button onClick={onClose} className="text-gray-600 text-lg self-end">
            <CustomCrossBar />
          </button>
          <h1 className="text-2xl font-bold mt-5">{product.title}</h1>
          <div className="text-2xl font-semibold text-gray-800 mt-2">{`€${product.basePrice}`}</div>
          <div className="mt-4 mb-6">
            <strong className="text-gray-800">SKU:</strong> {product.sku}
          </div>
          <div className="mb-4">
            <strong className="text-gray-800">Category:</strong>{" "}
            {product.productCategory.map((cat) => cat.name).join(", ")}
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <strong className="text-gray-800">Size:</strong>
            <div className="flex space-x-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size._id} // Use _id as the key
                  onClick={() => handleSizeChange(size.size)}
                  className={`border rounded px-4 py-2 text-gray-700 ${
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

          {/* Color Selection */}
          <div className="mb-4">
            <strong className="text-gray-800">Color:</strong>
            <div className="flex space-x-2 mt-2">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`h-8 w-8 cursor-pointer rounded-full border-2 border-gray-300 ${
                    selectedColor === color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-4">
            <strong className="text-gray-800">Quantity:</strong>
            <div className="flex items-center space-x-2 mt-2">
              <button
                onClick={decreaseQuantity}
                className="p-2 border rounded-full text-gray-700"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="text-center w-16 border rounded"
                min="1"
                step="1"
              />
              <button
                onClick={increaseQuantity}
                className="p-2 border rounded-full text-gray-700"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            {/* Add to Bag and Heart buttons */}
            <div className="flex items-center space-x-4 mb-4 w-full">
              <button
                onClick={() => {
                  handleAddToCart(); // Ensure function is called correctly
                  handleModalOpen(); // Open cart modal after adding to cart
                }}
                className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center justify-center w-full p-4 border rounded-full bg-gray-100`}
              >
                Add to Bag
              </button>
              <button
                onClick={() => {
                  handleAddToWishlist(); // Ensure function is called correctly
                  handleModalOpen(); // Open cart modal after adding to wishlist
                }}
                className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center p-4 justify-center border rounded-full bg-gray-100`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default QuickViewModal;
