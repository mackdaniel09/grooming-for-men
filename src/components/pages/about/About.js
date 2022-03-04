import React from "react";
import { imageCaps, desc, living } from "../data/story";
import "../../../styles/AboutStyle.css";
import { Link } from "react-router-dom";
import "../../../App.css";

const About = () => {
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
          {/* {living.map((img, index) => (
            // <div className="col col-md-3">
            //   <div className="bg-primary mb-2">
            //     <div className="col h-100" key={index}>
            //       <div className="card shadow h-75">
            //         <img src={image} className="img-thumbnail" alt="image" />
            //       </div>
            //     </div>
            //   </div>
            // </div>
           
          ))} */}
          {living.map((img, index) => (
            <div>
              <img src={img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
