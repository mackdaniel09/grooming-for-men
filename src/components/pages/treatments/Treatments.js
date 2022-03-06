import React from "react";
import "../../../App.css";
import { header } from "../data/treatmentData";
import HeroSection from "../../HeroSection";
import SectionContainer from "../../SectionContainer";
import { services } from "../data/homeData";
import Container from "../../Container";
import { hair } from "../data/treatmentData";

const Treatments = () => {
  return (
    <div>
      <HeroSection {...header} />
      <SectionContainer {...services} />
      {/* <Container {...hair} /> */}
    </div>
  );
};

export default Treatments;
