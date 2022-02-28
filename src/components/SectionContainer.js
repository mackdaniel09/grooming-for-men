import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const SectionContainer = ({ sectionTitle, subTitle, features }) => {
  return (
    <div className="card bg-dark text-light">
      <div className="container">
        <div className="card-body ">
          <div className="text-center">
            <h2 className="display-4 text-capitalize">{sectionTitle}</h2>
            <p className="text-uppercase">{subTitle}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {features.map(({ image, title, button }) => {
            return (
              <div className="col">
                <div
                  className="card"
                  style={{ height: "300px", width: "600px" }}
                >
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                      <div className="card w-100 h-100">
                        {/* <img src={image} class="card-img-top" alt={title} /> */}
                        <h2>{title}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
