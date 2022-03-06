import React from "react";
import Slider from "react-slick";
import barberShop from "../../images/barberShop.png";
import "../../../styles/AboutStyle.css";
import "../../../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageCaps, desc, living, storyCarousel } from "../data/story";
import { Link } from "react-router-dom";

const About = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="card border-secondary">
        <img src={imageCaps.image} className="card-img-top h-50 " alt="..." />
        <div className="card-body text-center bg-dark py-3 text-light ">
          <h5 className="card-title display-4">{imageCaps.title}</h5>
          <p className="card-text fs-5 w-75 mx-auto">{imageCaps.text}</p>
          <button className="btn btn-outline-light text-uppercase ">
            <Link to="/treatments" className="text-light fs-5">
              {imageCaps.link}
            </Link>
          </button>
        </div>
      </div>
      <div className="card bg-dark text-white" style={{ height: "320px" }}>
        <img src={barberShop} className="card-img " alt="..." />
        <div className="card-img-overlay bg-dark text-light h-75 w m-auto p-0 overflow-hidden">
          <Slider {...settings}>
            {storyCarousel.map((story, index) => (
              <div
                className="card bg-dark carousel-card-story overflow-md-auto"
                key={index}
              >
                <div className="card-body h-100">
                  <h5 className="card-title fs-md-5 fw-light h-100 lh-sm">
                    "{story.texts}"
                  </h5>
                  <p className="card-text">
                    <small>- {story.author}</small>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="card bg-secondary text-light border-secondary">
        <div className="row g-0">
          {desc.map((text, index) => {
            return (
              <div className="col-md-4 mx-auto" key={index}>
                <div className="card-body" key={index}>
                  <p className="card-text">{text.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container py-3">
        <div className="row">
          {living.map((img, index) => (
            <>
              <div className="col-md-3">
                <div
                  className="btn mb-2 "
                  style={{ height: "500px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#imageModal"
                >
                  <div className="col h-100" key={index}>
                    <div className="card shadow h-100">
                      <img
                        src={img.img}
                        className="img-thumbnail img-living-wrapper "
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal fade"
                id="imageModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
