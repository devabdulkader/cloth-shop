import React from "react";
import ReviewCard from "../card/ReviewCard";
import Reviews from "./Reviews";

const ReviewProduct = () => {
  return (
    <div className="w-full flex gap-5">
      <ReviewCard />
      <Reviews />
    </div>
  );
};

export default ReviewProduct;
