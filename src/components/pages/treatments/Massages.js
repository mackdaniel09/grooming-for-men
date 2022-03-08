import React from "react";
import Container from "../../Container";
import HeroSection from "../../HeroSection";
import {
  massageService1,
  massageService2,
  massageService3,
} from "../data/massage";
import { headerBodyMassages } from "../data/treatmentData";
import Face from "./Face";

const Massages = () => {
  return (
    <div>
      <HeroSection {...headerBodyMassages} />
      <Container {...massageService1} />
      <Container {...massageService2} />
      <Container {...massageService3} />

      <Face />
    </div>
  );
};

export default Massages;
