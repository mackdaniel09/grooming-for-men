import React from "react";
import HeroSection from "../../HeroSection";
import { headerLocations, locationDetails } from "../data/location";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaMobile, FaClock } from "react-icons/fa";
import { Fade } from "react-reveal";

const Locations = () => {
  return (
    <div>
      <HeroSection {...headerLocations} />
      <div className="card bg-dark text-light">
        <div className="container">
          <div className="card-body ">
            <div className="text-center">
              <h2 className="display-4 text-capitalize">Locations</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row row-cols-1 row-cols-md-2 g-4 ">
            {locationDetails.map((item, index) => {
              return (
                <Fade bottom big>
                  <div class="col">
                    <div class="card bg-dark border-secondary">
                      <div class="card-body">
                        <h5 class="card-title display-6">{item.title}</h5>
                        <p class="card-text">
                          <ul class="list-group my-2">
                            <li class="list-group-item bg-dark text-light d-flex align-items-center">
                              <MdLocationOn className="me-1 fs-5" /> {item.map}
                            </li>
                            <li class="list-group-item  bg-dark text-light d-flex align-items-center">
                              <MdEmail className="me-1 fs-5" /> {item.email}
                            </li>
                            <li class="list-group-item  bg-dark text-light d-flex align-items-center">
                              <FaMobile className="me-1 fs-5" /> {item.number}
                            </li>
                            <li class="list-group-item  bg-dark text-light d-flex align-items-center">
                              <FaClock className="me-1 fs-5" /> {item.time}
                            </li>
                          </ul>
                          <button
                            type="button"
                            class="btn btn-outline-light btn-lg"
                          >
                            SALON DETAILS
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
        <div className="card mt-5 border-0">
          <div className="card-body text-center bg-dark py-3 text-light border-bottom">
            <h5 className="card-title fs-5 mb-3">
              1847 can be found in all four corners of the residential and
              commercial districts of Dubai in the most elite locations from the
              discreetly luxurious Emirates Towers Boulevard to the prestigious
              Grosvenor House Hotel.
            </h5>
            <p className="card-text fs-6 w-75 mx-auto">
              The United Arab Emirates is a melting pot of different
              nationalities, cultures, and lifestyles, idealizing creativity and
              creating a unique atmosphere where global brands are established
              and can strive. Utilizing this opportunity 16 years ago, helped us
              in developing an award-winning, globally recognized brand, that is
              located at the center of every culturally significant commercial
              and residential districts, hosting to date 10 locations in Dubai
              and 1 location in Abu Dhabi. With a focus on local and global
              expansion, we are the embodiment of UAE’s strive towards success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
