import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ArrowButton from "../button/ArrowButton";

interface SwiperNavButtonsProps {
  prevLeftPosition?: string;
  prevRightPosition?: string;
  LeftIcon?: React.ElementType;
  RightIcon?: React.ElementType;
}

const SwiperNavButtons: React.FC<SwiperNavButtonsProps> = ({
  prevLeftPosition,
  prevRightPosition,
  LeftIcon = FiChevronLeft, // Default icon
  RightIcon = FiChevronRight, // Default icon
}) => {
  const swiper = useSwiper();

  return (
    <>
      <div
        className={`${prevLeftPosition} `}
        onClick={() => swiper.slidePrev()}
      >
        <ArrowButton direction="right" />
      </div>
      <div
        className={`${prevRightPosition}`}
        onClick={() => swiper.slideNext()}
      >
        <ArrowButton direction="left" />
      </div>
    </>
  );
};

export default SwiperNavButtons;
