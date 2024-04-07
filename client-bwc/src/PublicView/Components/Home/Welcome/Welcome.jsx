import React from "react";
import "./Welcome.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div id="bwc" className="welcome d-flex flex-column">
      <Navbar />
      <div
        id="home"
        className=" text-white col-8  d-flex my-auto flex-column"
        style={{ height: "inherit" }}
      >
        <div className="p-5 col-8 m-auto">
          <h1 className="fw-bold text-warning col-10 my-4 text-uppercase">
            all in one platform for building services
          </h1>
          <h5 className="fw-bold my-4">
            Everything you need to source, build and manage your building
            project within one platform
          </h5>
          <div className="mt-4">
            <Link
              to="/consumer"
              className="welcome-btn text-dark text-decoration-none me-3 "
            >
              Post A Job
            </Link>
            <Link
              to="/auth"
              className="welcome-btn text-dark text-decoration-none"
            >
              Trade sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
