import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";
import useProductSelection from "@/hooks/useProductSelection";
import { IProduct } from "@/types/product";
import ArrowButton from "../button/ArrowButton";
import { FreeMode, Navigation } from "swiper/modules";
import CustomCrossBar from "../custom/CustomCrossBar";
import CartModal from "../common/CartModal";
import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

interface QuickViewModalProps {
  product: IProduct;
  onClose: () => void;
  activeImage: string;
}

const QuickViewModal = ({
  product,
  onClose,
  activeImage,
}: QuickViewModalProps) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState<string>(activeImage); // Added state for selectedImage

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
  const images = [
    {
      url: product.url,
      alt: product.alt,
    },
    ...productVariants.map((variant) => ({
      url: variant.url,
      alt: variant.alt,
    })),
  ];
  // Combine main image with variants
  const colors = [
    {
      color: product.color,
    },
    ...product.productVariants.map((variant) => ({
      color: variant.color,
    })),
  ];

  const handleAddToCart = () => {
    if (selectedVariantId) {
      addToCart(selectedVariantId); // Pass the selected variant ID and quantity
      toast.success("Item added to cart!");
    } else {
      toast.error("Please select a variant.");
    }
  };

  const [showCartModal, setShowCartModal] = useState(false);

  const handleModalOpen = () => {
    setShowCartModal(true);
  };

  const handleModalClose = () => {
    setShowCartModal(false);
    onClose();
  };

  const handleSlideChange = () => {
    if (swiperInstance) {
      const activeIndex = swiperInstance.activeIndex;
      const currentImage = images[activeIndex];
      if (currentImage) {
        const variant = productVariants.find((v) => v.url === currentImage.url);
        setSelectedVariantId(variant?._id || null);
      }
    }
  };

  const getInitialSlideIndex = () => {
    const index = images.findIndex((image) => image.url === activeImage);
    return index >= 0 ? index : 0; // Fallback to the first slide if no match
  };

  useEffect(() => {
    if (swiperInstance) {
      const initialIndex = getInitialSlideIndex();
      swiperInstance.slideTo(initialIndex); // Move Swiper to the selected image
    }
  }, [selectedImage, swiperInstance]);

  useEffect(() => {
    // Update image when color changes
    const selectedVariant = product.productVariants.find(
      (variant) => variant.color === selectedColor
    );
    if (selectedVariant) {
      setSelectedImage(selectedVariant.url);
    } else {
      setSelectedImage(product.url);
    }
  }, [selectedColor]);

  return (
    <div className="fixed inset-0 z-50 md:flex items-center justify-center bg-black bg-opacity-50 hidden">
      {showCartModal && <CartModal onClose={handleModalClose} />}
      <div
        className={`${
          showCartModal ? "hidden" : "flex"
        } bg-white w-[70%] lg:h-[65%] rounded-lg overflow-hidden`}
      >
        {/* Swiper section */}
        <div className="w-1/2 relative">
          <Swiper
            spaceBetween={10}
            modules={[FreeMode, Navigation]}
            className="mySwiper2 h-full"
            onInit={(swiper) => {
              setSwiperInstance(swiper); // Store swiper instance
            }}
            onSlideChange={handleSlideChange}
            initialSlide={getInitialSlideIndex()} // Set the initial slide index
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className={`rounded-md overflow-hidden relative p-5 `}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
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
            onClick={() => swiperInstance?.slidePrev()}
          >
            <ArrowButton direction="left" />
          </div>
          <div
            className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => swiperInstance?.slideNext()}
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
              {colors.map((variant) => (
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
            <div className="flex  flex-col lg:flex-row  gap-5">
              <div className="flex items-center lg:mb-4 space-x-2 border py-2 rounded-full bg-blue-">
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
                  className="text-center w-20 border-0 outline-none "
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
                  className={`${BUTTON_ANIMATION_CLASSES} px-6 py-2 text-white bg-black rounded-full hover:bg-gray-900`}
                >
                  Add to Bag
                </button>
                <button
                  onClick={() => addToWishlist(product._id)}
                  className={`${BUTTON_ANIMATION_CLASSES} text-black border border-black rounded-full px-6 py-2 hover:bg-gray-200`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 8.121a3.375 3.375 0 014.757 0L12 10.293l2.121-2.172a3.375 3.375 0 014.757 4.757L12 21.207l-6.878-6.878a3.375 3.375 0 010-4.757z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Close button */}
          <div
            className="absolute top-5 right-5 cursor-pointer"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuickViewModal;
