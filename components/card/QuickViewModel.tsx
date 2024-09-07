import React, { useState, useRef, useEffect } from "react";
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
import Link from "next/link";

interface QuickViewModalProps {
  product: IProduct;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  const swiperRef = useRef<any>(null);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCartModal, setShowCartModal] = useState(false);

  const {
    selectedSize,
    selectedColor,
    quantity,
    handleSizeChange,
    handleColorChange,
    handleQuantityChange,
    decreaseQuantity,
    increaseQuantity,
    addToCart,
    addToWishlist,
    handleImageChange,
  } = useProductSelection({ product });

  const productVariants = product?.productVariants || [];

  // Set default variant and image when product or variants change
  useEffect(() => {
    if (productVariants.length > 0) {
      const defaultVariant = productVariants[0];
      setSelectedVariantId(defaultVariant._id);
      setSelectedImage(defaultVariant.url);
    }
  }, [productVariants]);

  const handleAddToCart = () => {
    if (selectedVariantId) {
      addToCart(selectedVariantId); // Pass the selected variant ID and quantity
      toast.success("Item added to cart!");
    } else {
      toast.error("Please select a variant.");
    }
  };

  const handleAddToWishlist = () => {
    if (selectedVariantId) {
      addToWishlist(); // Pass the selected variant ID
      toast.success("Item added to wishlist!");
    } else {
      toast.error("Please select a variant.");
    }
  };

  const handleModalOpen = () => {
    setShowCartModal(true);
  };

  const handleModalClose = () => {
    setShowCartModal(false);
    onClose();
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.activeIndex;
      const currentVariant = productVariants[activeIndex];
      if (currentVariant) {
        setSelectedVariantId(currentVariant._id);
        setSelectedImage(currentVariant.url); // Ensure this is updated
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {showCartModal && <CartModal onClose={handleModalClose} />}
      <div
        className={`${
          showCartModal ? "hidden" : "flex"
        } bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden`}
      >
        {/* Swiper section */}
        <div className="w-1/2 relative">
          <Swiper
            spaceBetween={10}
            modules={[FreeMode, Navigation]}
            className="mySwiper2 h-full"
            onInit={(swiper) => {
              swiperRef.current = swiper; // Store swiper instance
            }}
            onSlideChange={handleSlideChange}
          >
            {productVariants.map((variant, index) => (
              <SwiperSlide
                key={index}
                className={`rounded-md overflow-hidden relative p-5 ${
                  variant.url === selectedImage ? "swiper-slide-active" : ""
                }`}
              >
                <Image
                  src={variant.url}
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
        <div className="w-1/2 px-5 flex flex-col items-start justify-start overflow-y-auto relative">
          <button
            onClick={onClose}
            className="text-gray-600 text-lg self-end absolute top-3"
          >
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
              {product.sizes.map((size) => (
                <button
                  key={size._id}
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
              {product.productVariants.map((variant) => (
                <div
                  key={variant.color}
                  onClick={() => handleColorChange(variant.color)}
                  className={`h-8 w-8 cursor-pointer rounded-full border-2 border-gray-300 ${
                    selectedColor === variant.color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: variant.color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity and action buttons */}
          <section className="w-full">
            <p className="mb-5 w-full">
              <strong className="text-gray-800 text-xl">Quantity:</strong>
            </p>
            <div className="flex gap-5">
              <div className="flex items-center mb-4 space-x-2 border rounded-full bg-blue-">
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
                    handleAddToCart();
                    handleModalOpen();
                  }}
                  className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center justify-center w-full p-4 border rounded-full bg-gray-100`}
                >
                  Add to Bag
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center justify-center w-full p-4 border rounded-full bg-gray-100`}
                >
                  <FaHeart className="text-red-500" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
