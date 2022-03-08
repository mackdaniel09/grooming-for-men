import React from "react";
import HeroSection from "../../HeroSection";
import { headerShaves } from "../data/treatmentData";

const Beard = () => {
  return (
    <div>
      <HeroSection {...headerShaves} />
    </div>
  );
};

export default Beard;
