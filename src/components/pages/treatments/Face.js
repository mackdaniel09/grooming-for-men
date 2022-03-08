import React from "react";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import { faceServices1, faceServices2, faceServices3 } from "../data/face";
import { headerFacial } from "../data/treatmentData";

const Face = () => {
  return (
    <div>
      <HeroSection {...headerFacial} />
      <Container {...faceServices1} />
      <Container {...faceServices2} />
      <Container {...faceServices3} />
    </div>
  );
};

export default Face;
