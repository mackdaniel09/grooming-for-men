import React from "react";
import "../App.css";

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
  video,
}) => {
  return (
    <div className="card bg-dark text-white">
      <div>
        {image ? (
          <div className="card bg-dark text-white ">
            <img src={img} className="header card-img opacity-50" alt="..." />
            <div className="card-img-overlay d-flex flex-column justify-content-center w-50">
              <div classNameName="text-light">
                <h5 className="card-title display-3">{title}</h5>
                <p className="card-text fs-5">{text}</p>
                <p className="card-text fs-5">{secondText}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <video autoPlay loop muted className="video opacity-50">
              <source src={video} type="video/mp4" className="w-100" />
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
