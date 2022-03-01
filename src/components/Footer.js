import React from "react";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Ceo from "./images/CEO-middle-east-2.png";
import Traveler from "./images/condenast_traveler-copy.png";
import Gq from "./images/GQ_Magazine-01.png";
import Esquire from "./images/esquire-copy.png";

function Footer({ sectionTitle, reviews }) {
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
    <>
      <div className="bg-dark text-light footer">
        <div className="card-title text-center display-5">{sectionTitle}</div>
        <Slider {...settings} className="p-3">
          {reviews.map((review) => {
            <div className="card" key={review.id}>
              <p className="card-text">{review.name}</p>
              <img src={review.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{review.comment}A</p>
              </div>
            </div>;
          })}
        </Slider>
        <hr />
        <div className="container">
          <div className="row text-center display-5">
            <div className="col">As seen on</div>
          </div>
          <div className="row mt-5">
            <div className="row">
              <div className="col">
                <img src={Ceo} alt="ceo" className="w-50 h-75 mx-2 mx-auto" />
              </div>
              <div className="col">
                <img src={Traveler} alt="ceo" className="w-50 h-50  mx-auto" />
              </div>
              <div className="col">
                <img src={Gq} alt="ceo" className="w-50 h-50  mx-auto" />
              </div>
              <div className="col">
                <img src={Esquire} alt="ceo" className="w-50 h-50  mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md text-capitalize text-decoration-none d-flex flex-column">
              <Link
                to="/"
                className="text-decoration-none text-secondary py-1 fs-4"
              >
                buy voucher
              </Link>

              <Link
                to="/"
                className="text-decoration-none text-secondary py-1 fs-4"
              >
                our story
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary py-1 fs-4"
              >
                buy products online
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary py-1 fs-4"
              >
                locations
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary py-1 fs-4"
              >
                contact
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary py-1 fs-4"
              >
                blog
              </Link>
            </div>
            <div className="col-md">
              <p className="text-secondary">
                THROUGH OUR CURATED SELECTION OF THE VERY BEST MEN’S GROOMING
                SERVICES, FROM OUR BARBER SHOP, MANICURE AND PEDICURE STUDIES,
                AND AWARD WINNING MASSAGE AND FACIAL ROOMS, THE 1847 BRAND
                OFFERS A SPACE TO RELAX, UNWIND AND RESET. OUR GOAL IS TO
                PROVIDE EXCEPTIONAL ATTENTION TO DETAIL AND SINCERE CARE FOR
                YOUR WELLBEING.
              </p>
            </div>
            <div className="col-md text-center">
              <Link to="/" className="text-light px-1 fs-4">
                <FaFacebook />
              </Link>
              <Link to="/" className="text-light px-1 fs-4">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
