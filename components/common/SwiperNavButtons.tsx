import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button
        className="prev-btn size-20 rounded-full bg-white hover:bg-black text-black hover:text-white flex items-center justify-center p-3 transition-colors duration-300 ease-in-out"
        onClick={() => swiper.slidePrev()}
      >
        <FiChevronLeft className="text-4xl" />
      </button>
      <button
        className="next-btn size-20 rounded-full bg-white hover:bg-black text-black hover:text-white flex items-center justify-center p-3 transition-colors duration-300 ease-in-out"
        onClick={() => swiper.slideNext()}
      >
        <FiChevronRight className="text-4xl" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
