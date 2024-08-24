import FashionFusion from "@/components/home/FashionFusion";
import FashionStatement from "@/components/home/FashionStatement";
import Hero from "@/components/home/Hero";
import HotTrend from "@/components/home/HotTrend";
import LimitedOffer from "@/components/home/LimitedOffer";
import NewArrival from "@/components/home/NewArrival";
import React from "react";

const Landing = () => {
  return (
    <div>
      <Hero />
      <FashionStatement />
      <HotTrend />
      <FashionFusion />
      <LimitedOffer />
      <NewArrival />
    </div>
  );
};

export default Landing;
