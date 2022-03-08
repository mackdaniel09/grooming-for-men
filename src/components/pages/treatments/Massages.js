import React from "react";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import {
  massageService1,
  massageService2,
  massageService3,
} from "../data/massage";
import { headerBodyMassages } from "../data/treatmentData";

const Massages = () => {
  return (
    <div>
      <h1>This is massage page</h1>
      <HeroSection {...headerBodyMassages} />
      <Container {...massageService1} />
      <Container {...massageService2} />
      <Container {...massageService3} />
    </div>
  );
};

export default Massages;
