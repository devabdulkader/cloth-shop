import FashionFusion from "@/components/home/FashionFusion";
import Hero from "@/components/home/Hero";
import ExploreCategory from "@/components/home/ExploreCategory";
import LimitedOffer from "@/components/home/LimitedOffer";
import NewArrival from "@/components/home/NewArrival";

import InstagramSlider from "@/components/home/InstagramSlider";
import LatestNews from "@/components/home/LatestNews";
import Policy from "@/components/home/Policy";
import Testimonials from "@/components/home/Testimonials";
import React from "react";
import NewestProduct from "@/components/home/NewestProduct";
import Statement from "@/components/home/Statement";
const Landing = () => {
  return (
   <>
    <div>
      <div className="flex flex-col gap-6 lg:gap-10 xl:gap-16 pt-16 md:pt-20 lg:pt-0 px-5 xl:px-10 2xl:px-20 pb-10">
        <Hero />
        <ExploreCategory />
        <Statement />
        <NewArrival />
        <FashionFusion />
        <NewestProduct />

        <LimitedOffer />

        <Policy />
        <LatestNews />
        <Testimonials />
      </div>

      <InstagramSlider />
    </div>
   </>
  );
};

export default Landing;
