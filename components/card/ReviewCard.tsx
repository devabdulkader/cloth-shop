import React from "react";
import { FaStar } from "react-icons/fa6";

const ReviewCard = () => {
  return (
    <div className="w-[450px]  bg-white border-[1px] border-gray-300  shadow-lg h-[500px]  flex flex-col gap-5  p-5 ">
      <h3 className="font-bold text-2xl">Review</h3>
      <div className="h-24 bg-gray-100 flex items-center justify-center">
        <div className="flex gap-2">
          <FaStar className="text-yellow-400 text-4xl" />
          <span className="font-bold text-5xl">0.0</span>
        </div>
        <span className="h-16 w-[2px] m-5 py-5 bg-gray-200"></span>
        <div className="flex flex-col justify-center items-center">
          <span>0</span>
          <span>reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
