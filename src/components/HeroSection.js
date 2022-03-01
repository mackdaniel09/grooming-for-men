import React from "react";
import "../App.css";
import bgVideo from "./images/header.mp4";
import { Link } from "react-router-dom";

const HeroSection = ({
  image,
  img,
  title,
  text,
  secondText,
  hasButton,
  button,
  link,
}) => {
  return (
    <div className="card bg-dark text-white">
      <div>
        {image ? (
          <div class="card bg-dark text-white">
            <img
              src={img}
              class="header card-img bg-dark opacity-75"
              alt="..."
            />
            <div class="card-img-overlay d-flex flex-column justify-content-center">
              <div className="text-light">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <p class="card-text">{secondText}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <video autoPlay loop muted className="video opacity-50">
              <source src={bgVideo} type="video/mp4" className="w-100" />
            </video>
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
              <div className="container text-center">
                <h1 className="card-title display-3 fw-normal">{title}</h1>
                <p className="card-text display-6 fw-lighter">{text}</p>
                <p className="card-text display-6 fw-lighter">{secondText}</p>
                {hasButton ? (
                  <Link
                    className="btn  btn-outline-light btn-lg border text-uppercase"
                    to={link}
                  >
                    {button}
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
