import React from "react";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Card = ({ sectionTitle, subTitle, carouselItems, featuredItems }) => {
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
    <div className="card mb-5">
      <div className="container">
        <div className="card-body ">
          <div className="text-center">
            <h2 className="display-4 text-capitalize">{sectionTitle}</h2>
            <p className="text-uppercase">{subTitle}</p>
          </div>
        </div>
        <Slider {...settings} className="p-5 w-100">
          {featuredItems.map((item) => {
            return (
              <div className="card carousel-card border-0 " key={item.id}>
                <img
                  src={item.image}
                  className="mx-auto d-block"
                  alt={item.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <a href="#" className="btn btn-outline-dark mb-5">
                    {item.price}
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
