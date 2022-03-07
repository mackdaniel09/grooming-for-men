import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand text-capitalize display-3 d-flex align-items-center"
          to="/"
        >
          <span className="display-3">1847</span>
          <span className="d-none d-sm-block">Executive grooming for men</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="1847.yougotagift">
                Buy Voucher
              </Link>
            </li>
            <li className="nav-item dropdown nav-light">
              <Link
                className="nav-link dropdown-toggle"
                id="story"
                role="button"
                data-toggle="dropdown"
                data-hover="dropdown"
                to="/about-us"
              >
                Our Story
              </Link>
              <ul
                className="dropdown-menu bg-dark dropdown-menu-dark"
                aria-labelledby="story"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    Blog
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="services"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/treatments"
              >
                Services
              </Link>
              <ul
                className="dropdown-menu bg-dark dropdown-menu-dark"
                aria-labelledby="services"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/treatments/hair-services"
                  >
                    Hair
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/treatments/shaves">
                    Beard
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/treatments/manicures-predicures"
                  >
                    Hands & Feet
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/treatments/massages">
                    Body & Massages
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/treatments/facials">
                    Waxing & Hair Removal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/treatments/hair-removal">
                    Beard
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="products"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/"
              >
                Buy Products
              </Link>
              <ul
                className="dropdown-menu bg-dark dropdown-menu-dark"
                aria-labelledby="products"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    Skincare
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Shaving & After Shave
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Beard & Mustache
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    All Products
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/locations">
                Locations
              </Link>
            </li>
            <button className="d-none d-lg-block btn btn-light text-capitalize mx-1 ">
              book now
            </button>
            <button
              type="button"
              className=" d-none d-lg-block btn btn-outline-light text-capitalize mx-1 "
            >
              franchise
            </button>
            <li className="nav-item h6">
              <Link className="nav-link text-white" to="/">
                <FaFacebook />
              </Link>
            </li>
            <li className="nav-item h6">
              <Link className="nav-link text-white" to="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
