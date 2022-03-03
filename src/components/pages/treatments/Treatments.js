import React from "react";
import "../../../App.css";
import { header } from "../data/treatmentData";
import HeroSection from "../../HeroSection";
import SectionContainer from "../../SectionContainer";
import { services } from "../data/homeData";
import Container from "../../Container";

const Treatments = () => {
  return (
    <div>
      <HeroSection {...header} />
      <SectionContainer {...services} />
    </div>
  );
};

export default Treatments;
