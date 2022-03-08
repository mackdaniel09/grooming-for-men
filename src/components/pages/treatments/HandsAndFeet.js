import React from "react";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import {
  manicureServices1,
  manicureServices2,
  manicureServices3,
} from "../data/handsAndFeet";
import { headerHandsAndFeet } from "../data/treatmentData";

const HandsAndFeet = () => {
  return (
    <div>
      <HeroSection {...headerHandsAndFeet} />
      <Container {...manicureServices1} />
      <Container {...manicureServices2} />
      <Container {...manicureServices3} />
    </div>
  );
};

export default HandsAndFeet;
