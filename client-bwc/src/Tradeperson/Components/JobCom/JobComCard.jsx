import React from "react";
import "./JobCom.css";
const JobComCard = () => {
  return (
    <div className="job-card p-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <span className="my-auto p-3 logo rounded-circle">
            <i className="bx bxs-shopping-bag fs-3"></i>
          </span>
          <div className="mx-3">
            <div className="fw-bold fs-5">Senior software developer</div>{" "}
            <small className="text-muted">company</small>
          </div>
        </div>
        <div className="d-flex">
          <span className="threeDot p-1 my-auto rounded-circle">
            <i className="bx  fs-3 bx-dots-vertical-rounded"></i>
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between my-2 mt-4 fw-bold ">
        <span className="d-flex">
          <i className="bx fs-4 pe-2 bx-time-five  "></i>{" "}
          <span className="my-auto "> Full time</span>
        </span>
        <span className="d-flex">
          <i className="bx fs-4 pe-2 bxs-shopping-bag-alt "></i>{" "}
          <span className="my-auto">1 yr</span>
        </span>
        <span className="d-flex">
          <i className="bx fs-4 pe-2 bx-map"></i>
          <span className="my-auto">location</span>
        </span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odio
          deserunt officiis, dolore ex officia necessitatibus accusamus nostrum
          ut in fugiat, error minima, aspernatur recusandae vitae voluptas culpa
          quo est?
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <span className="d-flex">
          <i className="bx fs-3 pe-2 bx-dollar-circle text-primary"></i>
          <span className="my-auto">
            <span className="fw-bold">$20k-$50k</span> /Month
          </span>
        </span>
        <span className="d-flex">
          <i className="bx fs-3 pe-2 bx-group text-primary"></i>
          <span className="my-auto">
            <span className="fw-bold">45</span> applied
          </span>
        </span>
        <button className="btn btn-blue">Apply Now</button>
      </div>
    </div>
  );
};

export default JobComCard;
