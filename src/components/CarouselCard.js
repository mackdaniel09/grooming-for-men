import React, { useState, useEffect } from "react";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Card = ({ sectionTitle, subTitle, featuredItems }) => {
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
        },
      },
    ],
  };

  return (
    <div className="card">
      <div className="container">
        <div className="card-body ">
          <div className="text-center">
            <h2 className="display-4 text-capitalize">{sectionTitle}</h2>
            <p className="text-uppercase">{subTitle}</p>
          </div>
        </div>
        {/* <Slider {...settings} className="p-3">
          {productDetails.map((item) => {
            return (
              <div className="card border-0 mx-1 h-100" key={item.id}>
                <img
                  src={item.image}
                  className="img-fluid mx-auto"
                  alt={item.title}
                  style={{ height: "300px", width: "300px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <a href="#" className="btn btn-outline-dark">
                    {item.price}
                  </a>
                </div>
              </div>
            );
          })}
        </Slider> */}
        <ul>
          {featuredItems.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
