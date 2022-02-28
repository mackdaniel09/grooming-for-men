import React from "react";
import "../App.css";
import bgVideo from "./images/header.mp4";

const HeroSection = () => {
  return (
    <div className="card bg-dark text-white">
      <div>
        <video autoPlay loop muted className="video opacity-50">
          <source src={bgVideo} type="video/mp4" className="w-100" />
        </video>
      </div>
      <div className="card-img-overlay d-flex justify-content-center align-items-center">
        <div className="container text-center">
          <h1 className="card-title display-3 fw-normal">
            World’s No.1 Luxury Men’s Spa
          </h1>
          <p className="card-text display-6 fw-lighter">
            Winner of 2021 & 2020 Male Spa Awards
          </p>
          <button className="btn  btn-outline-light btn-lg border text-uppercase ">
            book treatment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
