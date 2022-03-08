import React from "react";
import "../App.css";

const Container = ({
  image,
  imgFirst,
  info,
  title,
  subtext,
  text,
  gallery,
}) => {
  return (
    <>
      <div>
        {info ? (
          <>
            <div className="card bg-dark text-light">
              <div className="container my-5 shadow">
                <div
                  className={
                    imgFirst ? "d-md-flex flex-row" : "d-flex flex-row-reverse"
                  }
                >
                  <div className="col-md-6 img-wrapper">
                    <img src={image} className="rounded " alt="img" />
                  </div>
                  <div className="col-md-6 px-2 lh-1">
                    <div className="display-5">{title}</div>
                    {gallery.map((item) =>
                      item.readmore ? (
                        <div className="card-body">
                          <div className="card-title d-md-flex justify-content-between lh-1">
                            <p className="fw-normal">{item.title}</p>
                            <p className="fw-lighter">{item.price}</p>
                          </div>
                          <p className="card-text fw-light lh-1 mb-0">
                            {item.subtext}{" "}
                          </p>

                          <div
                            className="accordion accordion-flush"
                            id={item.accordionParent}
                          >
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id={item.accordionHeading}
                              >
                                <button
                                  className="accordion-button collapsed bg-dark text-light fs-6 fw-light  ps-0"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${item.accordionCollapse}`}
                                  aria-expanded="false"
                                  aria-controls={item.accordionCollapse}
                                >
                                  READ MORE
                                </button>
                              </h2>
                              <div
                                id={item.accordionCollapse}
                                className="accordion-collapse collapse text-light"
                                aria-labelledby={item.accordionHeading}
                                data-bs-parent={`#${item.accordionParent}`}
                              >
                                <div className="accordion-body bg-dark text-light fw-light">
                                  <p>{item.hidden}</p>
                                  <p>{item.hiddenPrice}</p>
                                  <p>{item.hiddenPrice2}</p>
                                  <p>{item.hiddenPrice3}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
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
