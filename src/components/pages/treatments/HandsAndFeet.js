import React from "react";
import HeroSection from "../../HeroSection";
import { headerHandsAndFeet } from "../data/treatmentData";

const HandsAndFeet = () => {
  return (
    <div>
      <HeroSection {...headerHandsAndFeet} />
    </div>
  );
};

export default HandsAndFeet;
