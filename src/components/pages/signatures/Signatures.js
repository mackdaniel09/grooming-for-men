import React from "react";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import { signatures, manicure, shave, massage } from "../data/signatures";

const Signatures = () => {
  return (
    <div>
      <HeroSection {...signatures} />
      <Container {...manicure} />
      <Container {...shave} />
      <Container {...massage} />
    </div>
  );
};

export default Signatures;
