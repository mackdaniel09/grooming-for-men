import React from "react";
import Card from "../../CarouselCard";
import HeroSection from "../../HeroSection";
import SectionContainer from "../../SectionContainer";
import { locations, products, services, signatures } from "./Data";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Card {...products} />
      {/* <SectionContainer {...signatures} />
      <SectionContainer {...services} /> */}
    </div>
  );
};

export default Home;
