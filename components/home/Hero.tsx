// "use client";
// import Image from "next/image";
// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import shoe_2 from "@/public/hero/shoe-2.jpg";
// import nike_2 from "@/public/hero/nike-2.jpg";
// import { motion } from "framer-motion";

// const titleVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } },
// };

// const descriptionVariants = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
// };

// const buttonVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
// };
// const imageVariants = {
//   hidden: { scale: 1 },
//   visible: {
//     scale: 1.1,
//     transition: { duration: 4, ease: "easeInOut" },
//   },
// };
// const Hero = () => {
//   return (
//     <section className="py-20">
//       <div className="w-full lg:h-[70vh] xl:h-[90vh]">
//         <div className="lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:h-full px-5 xl:px-10 2xl:px-20  lg:gap-5">
//           {/* First Section */}
//           <div className="relative rounded-2xl overflow-hidden h-[350px] md:h-[500px] lg:h-full w-full lg:col-span-3  my-5 lg:my-0">
//             <motion.div
//               className="relative w-full h-full"
//               variants={imageVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <Image
//                 src={shoe_2}
//                 alt="First Card"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-2xl"
//               />
//             </motion.div>
//             <div className="absolute inset-0 flex flex-col p-7 md:p-10 lg:p-20 bg-black bg-opacity-30 text-white">
//               <motion.h2
//                 style={{ lineHeight: "1.3" }}
//                 className="text-2xl md:text-4xl  xl:text-5xl  font-bold max-w-60 md:max-w-lg  "
//                 variants={titleVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 Sports Shoes For An Active Lifestyle
//               </motion.h2>
//               <motion.p
//                 className="text-sm md:text-lg py-2 lg:py-5"
//                 variants={descriptionVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 Curating a shoe wardrobe for an active lifestyle
//               </motion.p>
//               <motion.div
//                 className="mt-4"
//                 variants={buttonVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 <button className="bg-white text-black text-base lg:text-lg font-semibold py-2 lg:py-4 px-4 md:px-6 lg:px-10 rounded-full transition-colors duration-300 hover:bg-black hover:text-white ">
//                   Shop Now
//                 </button>
//               </motion.div>
//             </div>
//           </div>

//           {/* Second Section */}
//           <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-full lg:grid-rows-2 lg:grid-cols-1 lg:col-span-1 lg:h-full">
//             {/* First Card in Second Section */}
//             <div className="relative rounded-2xl overflow-hidden h-[580px] sm:h-96  lg:h-full">
//               <Image
//                 src={nike_2}
//                 alt="Second Card"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-2xl"
//               />
//               <div className="absolute inset-0 flex p-7  ">
//                 <h2
//                   className=" text-white text-2xl md:text-4xl 2xl:text-5xl font-bold lg:text-3xl"
//                   style={{ lineHeight: "1.3" }}
//                 >
//                   Premium Sports Shoes
//                 </h2>
//               </div>
//               <svg
//                 className="absolute bottom-0 right-0"
//                 width="104"
//                 height="105"
//                 viewBox="0 0 84 85"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M77 18C83.603 11.397 84 3 84 0V85H0C2.5 85 11.7833 84.2528 18 77C23.5714 70.5 24 63.5 24 62C24 60.5 23.5 48 33 37C40.4317 28.3948 52.5 25 58 25C62 25 70.5 24.5 77 18Z"
//                   fill="white"
//                 />
//               </svg>
//               <div className="absolute bottom-0 right-0 size-16 rounded-full bg-black flex justify-center items-center">
//                 <IoIosArrowRoundForward className="text-white text-5xl" />
//               </div>
//             </div>

//             {/* Second Card in Second Section */}
//             <div className="relative rounded-2xl overflow-hidden bg-[rgb(254,249,224)] h-[580px] sm:h-96  lg:h-full">
//               <div className="w-full h-full">
//                 <div className="p-7 w-full sm:max-w-sm md:max-w-lg">
//                   <h2
//                     className="text-2xl md:text-4xl  2xl:text-5xl font-bold mb-2  lg:text-3xl"
//                     style={{ lineHeight: "1.3" }}
//                   >
//                     New & Exclusive Collections
//                   </h2>
//                   <p className="text-sm  md:text-base lg:text-xl lg:leading-relaxed py-3 max-w-sm">
//                     Exclusive Preview of the Breakthrough Products Transforming
//                     Active Lifestyles
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Image from "next/image";
import React from "react";
import shoe_2 from "@/public/hero/shoe-2.jpg";
import AnimatedSection from "../motion/AnimatedSection";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="w-full lg:h-[70vh] xl:h-[90vh]">
        <div className="lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:h-full px-5 xl:px-10 2xl:px-20 lg:gap-5">
          {/* First Section */}
          <AnimatedSection
            title="Sports Shoes For An Active Lifestyle"
            description="Curating a shoe wardrobe for an active lifestyle"
            buttonText="Shop Now"
            imageSrc={shoe_2.src}
            alt="First Card"
            containerClassName="relative rounded-2xl overflow-hidden h-[350px] md:h-[500px] lg:h-full w-full lg:col-span-3 my-5 lg:my-0 bg-[#F4F7FD]" // Custom container class
            titleClassName="text-white" // Custom title class
            descriptionClassName="text-gray-200" // Custom description class
            buttonClassName="bg-white text-black text-base lg:text-lg font-semibold py-2 lg:py-4 px-4 md:px-6 lg:px-10 rounded-full transition-colors duration-300 hover:bg-black hover:text-white" // Custom button class
          />

          {/* Second Section */}
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-full lg:grid-rows-2 lg:grid-cols-1 lg:col-span-1 lg:h-full">
            {/* First Card in Second Section */}
            <div className="relative rounded-2xl overflow-hidden h-[500px] sm:h-96 lg:h-full">
              <Image
                src={shoe_2}
                alt="Second Card"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 flex p-7">
                <h2
                  className="text-white text-2xl md:text-4xl 2xl:text-5xl font-bold lg:text-3xl"
                  style={{ lineHeight: "1.3" }}
                >
                  Premium Sports Shoes
                </h2>
              </div>
              <svg
                className="absolute bottom-0 right-0"
                width="104"
                height="105"
                viewBox="0 0 84 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M77 18C83.603 11.397 84 3 84 0V85H0C2.5 85 11.7833 84.2528 18 77C23.5714 70.5 24 63.5 24 62C24 60.5 23.5 48 33 37C40.4317 28.3948 52.5 25 58 25C62 25 70.5 24.5 77 18Z"
                  fill="white"
                />
              </svg>
              <div className="absolute bottom-0 right-0 size-16 rounded-full bg-black flex justify-center items-center">
                <IoIosArrowRoundForward className="text-white text-5xl" />
              </div>
            </div>

            {/* Second Card in Second Section */}
            <div className="relative rounded-2xl overflow-hidden bg-[rgb(254,249,224)] h-[500px] sm:h-96 lg:h-full">
              <div className="w-full h-full">
                <div className="p-7 w-full sm:max-w-sm md:max-w-lg">
                  <h2
                    className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-2 lg:text-3xl"
                    style={{ lineHeight: "1.3" }}
                  >
                    New & Exclusive Collections
                  </h2>
                  <p className="text-sm md:text-base lg:text-xl lg:leading-relaxed py-3 max-w-sm">
                    Exclusive Preview of the Breakthrough Products Transforming
                    Active Lifestyles
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
