import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface SwiperNavButtonsProps {
  className?: string;
}

const SwiperNavButtons: React.FC<SwiperNavButtonsProps> = ({
  className = "",
}) => {
  const swiper = useSwiper();

  return (
    <div className={` px-4 z-10 ${className}`}>
      <button
        className="prev-btn rounded-full bg-white hover:bg-black text-black hover:text-white flex items-center justify-center p-3 transition-colors duration-300 ease-in-out"
        onClick={() => swiper.slidePrev()}
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        className="next-btn rounded-full bg-white hover:bg-black text-black hover:text-white flex items-center justify-center p-3 transition-colors duration-300 ease-in-out"
        onClick={() => swiper.slideNext()}
      >
        <FiChevronRight className="text-2xl" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
