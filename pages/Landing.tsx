import FashionFusion from "@/components/home/FashionFusion";
import FashionStatement from "@/components/home/FashionStatement";
import Hero from "@/components/home/Hero";
import HotTrend from "@/components/home/HotTrend";
import LimitedOffer from "@/components/home/LimitedOffer";
import NewArrival from "@/components/home/NewArrival";

import InstagramSlider from "@/components/home/InstagramSlider";
import LatestNews from "@/components/home/LatestNews";
import Policy from "@/components/home/Policy";
import Testimonials from "@/components/home/Testimonials";
import React from "react";

const Landing = () => {
  return (
    <>
      <Hero />
      <FashionStatement />
      <HotTrend />
      <FashionFusion />
      <LimitedOffer />
      <NewArrival />
      <Policy />
      <LatestNews />
      <Testimonials />
      <InstagramSlider />
    </>
  );
};

export default Landing;
