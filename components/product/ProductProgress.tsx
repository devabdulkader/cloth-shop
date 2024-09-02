import React from "react";

interface ProductProgressProps {
  currentCount: number; // Number of products currently displayed
  totalCount: number; // Total number of products available
  onLoadMore: () => void; // Function to handle loading more items
}

const ProductProgress: React.FC<ProductProgressProps> = ({
  currentCount,
  totalCount,
  onLoadMore,
}) => {
  // Calculate the progress percentage
  const progressPercentage = (currentCount / totalCount) * 100;

  return (
    <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
      {/* Top Text */}
      <div className="text-lg font-medium mb-2">
        Showing {currentCount} of {totalCount} products
      </div>

      {/* Progress Bar */}
      <div className="relative mb-4">
        <div className="w-60 bg-gray-200  rounded-full h-2">
          <div
            className="bg-slate-800 h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Load More Items Button */}
      <div>
        <button
          onClick={onLoadMore}
          className=" bg-slate-800 text-white py-4 w-60 flex items-center justify-center rounded-full transition-colors duration-300 ease-in-out"
        >
          Load More Items
        </button>
      </div>
    </div>
  );
};

export default ProductProgress;
