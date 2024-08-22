import FashionStatement from "@/components/home/FashionStatement";
import Hero from "@/components/home/Hero";
import HotTrend from "@/components/home/HotTrend";

import InstagramSlider from "@/components/home/InstagramSlider";
import LatestNews from "@/components/home/LatestNews";
import Policy from "@/components/home/Policy";
import Testimonials from "@/components/home/Testimonials";
import React from "react";

const Landing = () => {
  return <>
    <Hero />
    <FashionStatement />
    <HotTrend />
    <Policy />
    <LatestNews />
    <Testimonials />
    <InstagramSlider />
  </>;


}

export default Landing;
