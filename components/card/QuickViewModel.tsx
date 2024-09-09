"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ArrowButton from "../button/ArrowButton";
import { IProduct } from "@/types/product";
import Link from "next/link";

import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";
import CustomCrossBar from "../custom/CustomCrossBar";
import useProductSelection from "@/hooks/useProductSelection";
import CartModal from "../common/CartModal";

interface QuickViewModelProps {
  product: IProduct;
  onClose: () => void;
  activeImage?: string;
  activeColor?: string;
}
interface ProductItem {
  id: string;
  url: string;
  color: string;
  alt: string;
}

const QuickViewModel: React.FC<QuickViewModelProps> = ({
  product,
  onClose,
  activeImage,
  activeColor,
}) => {
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

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [colorId, setColorId] = useState<string | null>(null);
  const [showCartModal, setShowCartModal] = useState(false);

  // Initialize product items and find the initial active image and color
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

      // Find and set the initial color based on activeColor
      const activeColorItem = items.find((item) => item.color === activeColor);
      if (activeColorItem) {
        setColorId(activeColorItem.id);
      }
    }
  }, [product, activeColor]);

  // Set the initial slide index based on activeImage
  useEffect(() => {
    if (mainSwiper && activeImage) {
      const initialIndex = productItems.findIndex(
        (item) => item.url === activeImage
      );
      if (initialIndex !== -1) {
        mainSwiper.slideTo(initialIndex);
      }
    }
  }, [mainSwiper, activeImage, productItems]);

  const handleColorClick = (index: number) => {
    const selectedColorItem = productItems[index];
    if (selectedColorItem) {
      setColorId(selectedColorItem.id);
    }
  };

  const handleAddToCart = () => {
    if (colorId) {
      addToCart(colorId);
      setShowCartModal(true);
    } else {
      console.log("No color selected");
    }
  };

  const handleModalClose = () => {
    setShowCartModal(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      {showCartModal && <CartModal onClose={handleModalClose} />}
      <div
        className={`${
          showCartModal ? "" : ""
        }bg-white flex max-w-6xl mx-auto w-full h-[550px] rounded-lg overflow-hidden`}
      >
        {/* Left Side: Main Image */}
        <div className="h-full w-1/2 relative rounded-lg overflow-hidden">
          <Swiper
            className="mySwiper2 w-full h-full "
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            onSwiper={setMainSwiper}
          >
            {productItems.map((item, index) => (
              <SwiperSlide key={index} className="rounded-md  overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover h-full w-full rounded-md p-5"
                />
              </SwiperSlide>
            ))}
            <div
              className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => mainSwiper?.slideNext()}
            >
              <ArrowButton direction="left" />
            </div>
            <div
              className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => mainSwiper?.slidePrev()}
            >
              <ArrowButton direction="right" />
            </div>
          </Swiper>
        </div>

        {/* Right Side: Color Boxes */}
        <div className="w-1/2 h-full relative  overflow-y-auto flex flex-col items-start justify-start p-4">
          {/* Product details section */}
          <div className=" px-5 flex w-full flex-col items-start justify-start  relative">
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
              {product.productCategory?.map((cat) => cat.name).join(", ")}
            </div>

            {/* Size Selection */}
            <div className="mb-4 flex flex-col gap-4">
              <strong className="text-gray-800">Size:</strong>
              <div className="flex space-x-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size._id}
                    onClick={() => handleSizeChange(size.size)}
                    className={`p-5 border border-gray-200 rounded-[3px] hover:border-black h-8 w-14 flex justify-center items-center ${
                      selectedSize === size.size
                        ? "bg-slate-800 text-white  duration-150 transition-all ease-out"
                        : ""
                    }`}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="flex flex-col gap-4 justify-start">
              <strong className="text-gray-800">Color:</strong>

              <Swiper
                direction={"horizontal"}
                spaceBetween={0}
                slidesPerView={productItems.length}
                pagination={{ clickable: true }}
                onSwiper={setThumbsSwiper}
                loop={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper h-full flex gap-5"
              >
                {productItems.map((item, index) => (
                  <SwiperSlide key={index} className="cursor-pointer pr-3 ">
                    <div
                      onClick={() => handleColorClick(index)}
                      className={`rounded-full h-8 w-8 border transition-all duration-100 ease-in-out 
            ${
              colorId === item.id
                ? "border-blue-500 p-1" // Active state with blue border and padding
                : "border-gray-400"
            } hover:p-1 hover:border-gray-400`}
                    >
                      {/* Inner div for the actual color */}
                      <div
                        className="h-full w-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Quantity and action buttons */}
            <section className="w-full">
              <p className="my-5 w-full">
                <strong className="text-gray-800 text-xl">Quantity:</strong>
              </p>
              <div className="flex ">
                <div className="flex items-center mb-4 mr-4 space-x-2  border rounded-full ">
                  {/* Minus button */}
                  <button
                    onClick={decreaseQuantity}
                    className=" border-gray-300 p-3"
                  >
                    -
                  </button>

                  {/* Quantity input */}
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="text-center w-20 border-0 outline-none"
                  />

                  {/* Plus button */}
                  <button
                    onClick={increaseQuantity}
                    className=" border-gray-300 p-3"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag and Heart buttons */}
                <div className="flex items-center space-x-2 mb-4 w-full">
                  <button
                    onClick={handleAddToCart}
                    className={`border py-3 px-4 w-full  rounded-full hover:bg-slate-800 hover:text-white transition-colors duration-300 ease-in-out`}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <Link href="/checkouts">
                  <button className="mb-4 w-full border py-3 rounded-full hover:bg-slate-800 hover:text-white transition-colors duration-300 ease-in-out">
                    {/* Link to View Full Product */}
                    Buy It Now
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;
