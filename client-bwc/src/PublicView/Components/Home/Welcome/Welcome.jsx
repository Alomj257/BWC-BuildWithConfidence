import React from "react";
import "./Welcome.css";
import Navbar from "../Navbar/Navbar";
const Welcome = () => {
  return (
    <div className="welcome d-flex flex-column">
      <Navbar />
      <div
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
            <button className="welcome-btn me-3 ">Post A Job</button>
            <button className="welcome-btn">Trade sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
