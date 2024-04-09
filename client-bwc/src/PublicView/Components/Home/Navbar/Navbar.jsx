import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="welcome-navbar">
      <ul className="d-flex m-0">
        <NavLink
          to="/"
          className="text-decoration-none p-3 fs-4 fw-bold text-white"
        >
          <li className="d-flex justify-content-between">
            <i className="bx bx-right-arrow-alt mx-3 my-auto fs-1"></i>{" "}
            <span className="my-auto"> BWC</span>
          </li>
        </NavLink>
        <ul className="d-flex ms-auto me-2 my-0 welcome-navbar ">
          <Link
            to="home"
            spy={true}
            offset={-150}
            duration={0}
            smooth={true}
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Home</li>
          </Link>
          <NavLink
            to="/about"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/consumer"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Consumer</li>
          </NavLink>
          <NavLink
            to="/tradeperson"
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Tradeperson</li>
          </NavLink>
          <Link
            to="faq"
            spy={true}
            offset={-150}
            duration={0}
            smooth={true}
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>FAQ</li>
          </Link>
          <Link
            to="articles"
            spy={true}
            offset={-150}
            duration={0}
            smooth={true}
            className="text-decoration-none  p-3 fs-lg-4 fs-md-5 text-white"
          >
            <li>Articles</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            offset={-150}
            duration={0}
            smooth={true}
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
