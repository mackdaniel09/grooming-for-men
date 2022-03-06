import React from "react";
import Card from "../../CarouselCard";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import SectionContainer from "../../SectionContainer";
import { header, products, services, signatures } from "../data/homeData";

const Home = () => {
  return (
    <div>
      <HeroSection {...header} />
      <Card {...products} />
      <SectionContainer {...signatures} />
      <SectionContainer {...services} />
    </div>
  );
};

export default Home;
