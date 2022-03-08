import React from "react";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import { headerWaxing } from "../data/treatmentData";
import {
  waxingServices1,
  waxingServices2,
  waxingServices3,
} from "../data/waxing";

const Waxing = () => {
  return (
    <div>
      <HeroSection {...headerWaxing} />
      <Container {...waxingServices1} />
      <Container {...waxingServices2} />
      <Container {...waxingServices3} />
    </div>
  );
};

export default Waxing;
