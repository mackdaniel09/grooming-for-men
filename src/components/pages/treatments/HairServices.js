import React from "react";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import { headerHair } from "../data/treatmentData";
import {
  hairServices1,
  hairServices2,
  hairServices3,
} from "../data/hairServices";

const HairServices = () => {
  return (
    <div>
      <HeroSection {...headerHair} />
      <Container {...hairServices1} />
      <Container {...hairServices2} />
      <Container {...hairServices3} />
    </div>
  );
};

export default HairServices;
