import React from "react";
import "../../../App.css";
import { header } from "../data/treatmentData";
import HeroSection from "../../HeroSection";
import SectionContainer from "../../SectionContainer";
import { services } from "../data/homeData";
import { Outlet } from "react-router-dom";

const Treatments = () => {
  return (
    <div>
      <HeroSection {...header} />
      <SectionContainer {...services} />

      <Outlet />
    </div>
  );
};

export default Treatments;
