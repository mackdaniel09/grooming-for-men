import React from "react";
import HeroSection from "../../HeroSection";

import { headerWaxing } from "../data/treatmentData";

const Waxing = () => {
  return (
    <div>
      <HeroSection {...headerWaxing} />
    </div>
  );
};

export default Waxing;
