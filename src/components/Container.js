import React from "react";
import "../App.css";

const Container = ({ image, info, title, subtext, text, gallery }) => {
  return (
    <>
      <div>
        {info ? (
          <div className="card-body ">
            {/* <h5 className="card-title align-middle">{title}</h5>
                <small className="text-muted">{small}</small>
              <p className="card-text">{text}</p> */}
          </div>
        ) : (
          <>
            <div className="container mt-5">
              <div className="card mb-3 py-5 px-2">
                <div className="row g-0">
                  <div className="col-lg-4">
                    <img
                      src={image}
                      className="img-fluid rounded-start h-100"
                      alt={title}
                      style={{ height: "500px" }}
                    />
                  </div>
                  <div className="col-md-8 my-auto h-50 ">
                    <div className="card-body">
                      <h5 className="card-title align-middle h1 text-capitalize">
                        {title}
                      </h5>
                      <small className="text-muted fs-6">{subtext}</small>
                      <p className="card-text mt-3 fs-5">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                {gallery.map((item, index) => {
                  return (
                    <div className="col-md-4">
                      <div className="col h-100" key={index}>
                        <div className="card shadow h-75 ">
                          <img
                            src={item.img}
                            className="img-thumbnail h-100"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card text-center container-fluid w-100 mt-2 bg-dark py-3 border-secondary border-bottom ">
              <div className="card-body">
                <a href="#" className="btn btn-light btn-lg text-uppercase ">
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Container;
