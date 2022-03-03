import React from "react";
import "../styles/SectionStyle.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

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
          {features.map(({ image, title, index, hasButton, button, link }) => {
            return (
              <Fade bottom big>
                <Link
                  className="col card card-img mx-auto w-100 bg-dark shadow p-3 mb-5 rounded border border-secondary"
                  key={index}
                  to={link}
                >
                  <div className="col d-flex justify-content-center align-item-center  ">
                    <div className="row">
                      <div className="col-lg-6 mb-3 mb-lg-0 ">
                        <div className="hover hover-2 text-white rounded ">
                          <img src={image} alt="" className="card-img w-100" />
                          <div className="hover-overlay"></div>
                          <div className="hover-2-content px-5 py-4">
                            <h3 className="hover-2-title text-uppercase font-weight-bold mb-0">
                              <span className="font-weight-light">{title}</span>
                            </h3>
                            <div className="hover-2-description text-uppercase mb-3">
                              {hasButton ? (
                                <div className="d-grid gap-2 col-6 mx-auto">
                                  <button
                                    className="btn btn-light bg-transparent text-light"
                                    type="button"
                                  >
                                    {button}
                                  </button>
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
