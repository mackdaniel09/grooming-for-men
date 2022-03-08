import React from "react";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import { headerShaves } from "../data/treatmentData";
import {
  shaveServices1,
  shaveServices2,
  shaveServices3,
} from "../data/shaveData";

const Beard = () => {
  return (
    <div>
      <HeroSection {...headerShaves} />
      <Container {...shaveServices1} />
      <Container {...shaveServices2} />
      <Container {...shaveServices3} />
    </div>
  );
};

export default Beard;
