import React from "react";
import HeroSection from "../../HeroSection";
import { headerHandsAndFeet } from "../data/treatmentData";

const Face = () => {
  return (
    <div>
      <HeroSection {...headerHandsAndFeet} />
    </div>
  );
};

export default Face;
