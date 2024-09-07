import React from "react";
import { FaStar } from "react-icons/fa6";

const ReviewCard = () => {
  return (
    <div className="sm:w-[450px] w-full bg-white border-[1px] border-gray-300 shadow-lg  flex flex-col gap-5 p-5">
      <h3 className="font-bold text-2xl">Review</h3>
      <div className="h-24 bg-gray-100 flex items-center justify-center rounded-md">
        <div className="flex gap-2 items-center">
          <FaStar className="text-yellow-400 text-4xl" />
          <span className="font-bold text-5xl">0.0</span>
        </div>
        <span className="h-16 w-[2px] m-5 py-5 bg-gray-200"></span>
        <div className="flex flex-col justify-center items-center">
          <span>0</span>
          <span>reviews</span>
        </div>
      </div>
      <section className="bg-gray-100 flex flex-col items-center justify-between p-5 gap-5 rounded-md">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <span>5</span> <FaStar />
          </div>
          <div className="h-[5px] bg-slate-400 rounded-full w-full mx-5"></div>{" "}
          {/* Increased height and distinct color */}
          <span>0</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <span>4</span> <FaStar />
          </div>
          <div className="h-[5px] bg-slate-400 rounded-full w-full mx-5"></div>{" "}
          {/* Increased height and distinct color */}
          <span>0</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <span>3</span> <FaStar />
          </div>
          <div className="h-[5px] bg-slate-400 rounded-full w-full mx-5"></div>{" "}
          {/* Increased height and distinct color */}
          <span>0</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <span>2</span> <FaStar />
          </div>
          <div className="h-[5px] bg-slate-400 rounded-full w-full mx-5"></div>{" "}
          {/* Increased height and distinct color */}
          <span>0</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <span>1</span> <FaStar />
          </div>
          <div className="h-[5px] bg-slate-400 rounded-full w-full mx-5"></div>{" "}
          {/* Increased height and distinct color */}
          <span>0</span>
        </div>
      </section>
      <div className="h-24 bg-gray-100 flex flex-col p-5 gap-3 items-center justify-center rounded-md">
        <h2 className="font-bold text-xl">Click to review</h2>
        <div className="flex gap-2">
          <FaStar className="text-slate-700 text-4xl" />
          <FaStar className="text-slate-700  text-4xl" />
          <FaStar className="text-slate-700 text-4xl" />
          <FaStar className="text-slate-700  text-4xl" />
          <FaStar className="text-slate-700  text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
