import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/custom/CustomButton";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="relative">
        {/* Add your image here */}
        <Image
          src="/common/404-sleep-cat.webp"
          alt="Page Not Found"
          width={600}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="mt-8 text-4xl font-bold text-gray-900 uppercase">
        Page Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We’re sorry — something has gone wrong on our end.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <CustomButton
          href="/"
          buttonText="Back To Homepage"
          buttonClassName="rounded-full text-xs sm:text-base bg-slate-800 text-white px-8 py-3 lg:py-4"
          buttonAnimation="transition-opacity duration-300 hover:opacity-90"
        />
        <CustomButton
          href="/products"
          buttonText="Continue Shopping"
          buttonClassName="rounded-full text-xs sm:text-base bg-slate-800 text-white px-8 py-3 lg:py-4 "
          buttonAnimation="transition-opacity duration-300 hover:opacity-90"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
