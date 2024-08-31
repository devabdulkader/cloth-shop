import React from "react";
import Image from "next/image";
import fashion from "@/public/hero/nike-1.jpg";

const LimitedOffer: React.FC = () => {
  return (
    <section className="w-full flex 2xl:h-[90vh] flex-col p-6 ">
      <div className="grid 2xl:grid-cols-3 gap-4 2xl:w-full 2xl:h-full">
        {/* First Section (Single Large Card, 1/3 Width) */}
        <section className="relative rounded-2xl overflow-hidden h-[50vh] mt-5 2xl:mt-0 2xl:h-full 2xl:col-span-1">
          <Image
            src={fashion}
            alt="Large Card"
            height={300}
            width={300}
            className="rounded-2xl h-full w-full object-cover"
          />
        </section>

        {/* Second Section (3 Cards, 2/3 Width) */}
        <section className="grid gap-5 2xl:grid-rows-2 2xl:col-span-2">
          {/* Bottom Two Cards (Side by Side, Half Width and Half Height Each) */}
          <div className="grid md:grid-cols-2 gap-5 2xl:h-full">
            <div className="relative rounded-2xl overflow-hidden h-[50vh] 2xl:h-auto ">
              <Image
                src={fashion}
                alt="Bottom Left Card"
                height={300}
                width={300}
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col  p-4 bg-black bg-opacity-30 text-white">
                <h2 className="text-xl font-bold mb-2">Personality Style</h2>
                <p className="text-base max-w-60">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quam, aliquam.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[50vh] 2xl:h-auto ">
              <Image
                src={fashion}
                alt="Bottom Right Card"
                height={300}
                width={300}
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col  p-4 bg-black bg-opacity-30 text-white">
                <h2 className="text-xl font-bold mb-2">Modern Fashion</h2>
                <p className="text-base max-w-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, ex?
                </p>
              </div>
            </div>
          </div>

          {/* Top Card (Full Width, Half Height) */}
          <div className="relative rounded-2xl overflow-hidden h-[50vh] 2xl:h-auto ">
            <Image
              src={fashion}
              alt="Bottom Right Card"
              height={300}
              width={300}
              className="rounded-2xl object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col  p-10 bg-black bg-opacity-30 text-white gap-2 ">
              <p className="text-lg uppercase">Limited Time Only</p>
              <h2 className="text-2xl font-bold mb-2">Sale Upto 40% Off</h2>
              <p className="text-lg max-w-80">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
                consectetur.
              </p>
              <div>
                <button className="bg-white text-black py-3 px-5  rounded-full flex justify-between items-center uppercase   hover:bg-black hover:text-white transition-colors duration-200 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LimitedOffer;
