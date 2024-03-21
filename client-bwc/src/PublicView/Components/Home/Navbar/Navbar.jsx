import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="welcome-navbar">
      <ul className="d-flex m-0">
        <Link
          to="/"
          className="text-decoration-none p-3 fs-4 fw-bold text-white"
        >
          <li className="d-flex justify-content-between">
            <i className="bx bx-right-arrow-alt mx-3 my-auto fs-1"></i>{" "}
            <span className="my-auto"> BWC</span>
          </li>
        </Link>
        <ul className="d-flex ms-auto me-2 my-0 welcome-navbar ">
          <Link
            to="/"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>About</li>
          </Link>
          <Link
            to="/"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Consumer</li>
          </Link>
          <Link
            to="/"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Tradeperson</li>
          </Link>
          <Link
            to="/"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>FAQ</li>
          </Link>
          <Link
            to="/"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Articles</li>
          </Link>
          <Link
            to="/"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Contact </li>
          </Link>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
