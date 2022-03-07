import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
// import spotlight from "../../images/img-pl-spotlight-new.png";
import "../../../App.css";
import { vocherNav, content } from "../data/vocher";
const Voucher = () => {
  return (
    <>
      <div class="d-md-flex justify-content-between shadow rounded mb-5 p-2">
        <div className="images-logo d-flex justify-content-around p-1">
          <div className="col mx-md-2 shadow-sm border rounded d-flex align-items-center p-1 lh-1">
            <small>Secure Payment</small>
          </div>
          {vocherNav.map((item, index) => {
            return (
              <div
                className="col mx-md-2 shadow-sm border rounded p-1"
                key={index}
              >
                <img src={item.img} alt={item.text} className="img-logo" />
              </div>
            );
          })}
        </div>
        <button className="btn btn-outline-dark">
          <AiOutlineShoppingCart size={28} />
        </button>
      </div>

      <div class="card mb-3 py-3 ">
        <div class="row g-0 d-flex justify-content-around">
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title display-5">{content.title}</h5>
              <p className="card-text">
                <ul>
                  {content.listItems.map((list, index) => (
                    <li key={index}>{list.list}</li>
                  ))}
                </ul>
              </p>
              <p class="card-text">
                <small class="text-muted">{content.small}</small>
              </p>
              <button type="button" class="btn btn-dark btn-lg">
                {content.button}
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src={content.image}
              class="img-fluid rounded-start"
              alt="title image"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div class="d-flex justify-content-evenly ">
          <div className="col d-flex ">
            <Link to="/" className="text-decoration-none mx-2 text-danger">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/" className="text-decoration-none mx-2 text-danger">
              Terms of Use
            </Link>
          </div>
          <div className="col text-end">
            <p>
              Powered by{" "}
              <Link to="/" className="text-danger text-decoration-none">
                YouGotAGift
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voucher;
