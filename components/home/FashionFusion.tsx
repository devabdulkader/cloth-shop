import Image from "next/image";
import React from "react";
import fashion from "@/public/hero/nike-1.jpg";
import { GoArrowUpRight } from "react-icons/go";
import CustomImage from "../custom/CustomImage";

const FashionFusion: React.FC = () => {
  return (
    <section className="">
      <div className=" flex flex-col sm:flex-row gap-5">
        {/* First Div - 2/5 Width */}
        <div className="w-full sm:w-2/5 p-6 h-[500px] bg-gray-100 rounded-2xl flex flex-col justify-center">
          <p className="text-lg mb-4">Fashion Fusion</p>
          <h2 className="text-3xl xl:text-4xl font-bold mb-4 max-w-80 capitalize leading-normal xl:leading-relaxed">
            Where creativity, meets style
          </h2>

          <div>
            <button className="py-2   rounded-md flex">
              <span>Explore Now</span> <GoArrowUpRight className="text-2xl " />
            </button>
          </div>
        </div>

        {/* Second Div - 3/5 Width */}
        <div className="w-full sm:w-3/5 h-[500px] relative rounded-2xl overflow-hidden group">
          <CustomImage src={fashion} alt="Fashion" />
          <div className="absolute inset-x-0 bottom-0 text-center p-4  text-white">
            <p className="text-lg mb-2">Pro Style</p>
            <h2 className="text-2xl font-bold">Super Modern Fashion</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionFusion;
