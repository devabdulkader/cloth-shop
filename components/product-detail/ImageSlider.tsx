import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ZoomedImage from "./ZoomedImage";
import ArrowButton from "../button/ArrowButton";
import { IProduct, IProductVariant } from "@/types/product";
import { RxCross1 } from "react-icons/rx";

interface ImageSliderProps {
  product: IProduct;
  currentSlide: string; // Added currentSlide prop
}

const ImageSlider: React.FC<ImageSliderProps> = ({ product, currentSlide }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [height, setHeight] = useState<number>(200);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [productItems, setProductItems] = useState<IProductVariant[]>([]);
  const [imageId, setImageId] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      const items: IProductVariant[] = [
        {
          _id: product._id,
          url: product.url,
          color: product.color,
          alt: product.alt,
        },
        ...(product.productVariants?.map((variant: IProductVariant) => ({
          _id: variant._id,
          url: variant.url,
          color: variant.color,
          alt: variant.alt,
        })) || []),
      ];

      setProductItems(items);
    }
  }, [product]);

  // Update the mainSwiper's current slide when currentSlide prop changes
  // Ensure swiper is initialized before calling slideTo
  // Update the mainSwiper's current slide when currentSlide prop changes
  useEffect(() => {
    if (mainSwiper) {
      const slideIndex = productItems.findIndex(
        (item) => item.url === currentSlide
      );
      if (slideIndex !== -1) {
        mainSwiper.slideTo(slideIndex, 300); // Adjust speed as needed
      }
    }
  }, [currentSlide, mainSwiper, productItems]);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1280) {
        const newHeight = 200 + (screenWidth / 768) * 450;
        setHeight(newHeight);
      } else {
        setHeight(1000);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };
  const [isVertical, setIsVertical] = useState(false);

  // Handle direction based on screen size
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 640) {
        setIsVertical(true); // sm breakpoint
      } else {
        setIsVertical(false);
      }
    };

    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex flex-col-reverse sm:flex-row w-full h-[600px] sm:h-[700px] gap-5 lg:sticky top-0 ${
        isFullscreen ? "z-layer-4" : "z-auto"
      }`}
    >
      <div className="">
        <Swiper
          direction={isVertical ? "vertical" : "horizontal"} // Conditionally change direction
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={setThumbsSwiper}
          loop={true}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            // Tailwind sm: ≥ 640px
            640: {
              slidesPerView: 4, // Show 2 slides on small screens
            },
            // Tailwind md: ≥ 768px
            // 768: {
            //   slidesPerView: 3, // Show 3 slides on medium screens
            // },
            // Tailwind lg: ≥ 1024px
          }}
          className="mySwiper w-full h-36 sm:h-full relative overflow-hidden "
        >
          {productItems.map((image, index) => (
            <SwiperSlide
              key={index}
              className="border rounded-md overflow-hidden border-black cursor-pointer  "
            >
              <Image
                src={image.url}
                alt=""
                height={300}
                width={300}
                className="object-cover h-full w-full rounded-md"
              />
            </SwiperSlide>
          ))}
          <div
            className="absolute z-10  bottom-16 left-1/2 transform -translate-x-1/2"
            onClick={() => thumbsSwiper?.slideNext()}
          >
            <ArrowButton direction={isVertical ? "top" : "right"} />
          </div>
          <div
            className="absolute z-10  bottom-0 left-1/2 transform -translate-x-1/2"
            onClick={() => thumbsSwiper?.slidePrev()}
          >
            <ArrowButton direction={isVertical ? "bottom" : "left"} />
          </div>
        </Swiper>
      </div>
      <div
        className={`group ${
          isFullscreen
            ? "bg-white left-0 fixed z-layer-5 inset-0   top-0 h-screen w-screen"
            : "relative w-full h-full sm:w-4/5"
        }`}
      >
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          onSwiper={setMainSwiper}
          className={`mySwiper2 h-full ${
            isFullscreen
              ? "fixed  bg-white w-[90%] z-layer-3 sm:w-[500px]"
              : "relative w-full z-auto"
          }`}
          onClick={openFullscreen}
        >
          {productItems.map((image, index) => (
            <SwiperSlide
              key={index}
              className="rounded-md overflow-hidden relative h-full"
            >
              {isFullscreen ? (
                <Image
                  src={image.url}
                  alt=""
                  className="object-cover relative z-layer-4  w-full h-full rounded-md"
                  width={300}
                  height={300}
                />
              ) : (
                <ZoomedImage src={image.url} />
              )}
            </SwiperSlide>
          ))}

          <div
            className="absolute z-10  left-0 top-1/2 transform -translate-y-1/2"
            onClick={() => mainSwiper?.slidePrev()}
          >
            <ArrowButton direction="left" />
          </div>
          <div
            className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2"
            onClick={() => mainSwiper?.slideNext()}
          >
            <ArrowButton direction="right" />
          </div>
          {isFullscreen && (
            <>
              <div
                className="absolute z-layer-2 left-0 top-1/2 transform -translate-y-1/2"
                onClick={() => mainSwiper?.slidePrev()}
              >
                <ArrowButton direction="left" />
              </div>
              <div
                className="absolute  z-layer-2 right-0 top-1/2 transform -translate-y-1/2"
                onClick={() => mainSwiper?.slideNext()}
              >
                <ArrowButton direction="right" />
              </div>

              <button
                className="absolute z-layer-2 left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 bg-white rounded-full size-16 flex justify-center items-center"
                onClick={closeFullscreen}
              >
                <RxCross1 className="text-2xl" />
              </button>
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
