import React from "react";
import "./JobCom.css";
import JobComCard from "./JobComCard";
const JobCom = () => {
  return (
    <div className="container">
      <div className="job-header rounded  p-4">
        <h3>Find your dream job there!</h3>
        <p>
          Explore the latest job openings and apply the best job opportunities
          available toady!{" "}
        </p>
        <div className="d-flex  rounded-4 bg-white text-dark ps-3 pe-1 py-1 fs-6">
          <span className="my-auto d-flex ">
            <i className="bx bx-search fs-3 my-auto"></i>
          </span>
          <input
            type="text"
            className="bg-transparent border-0 w-100 p-2"
            style={{ outline: "none" }}
            placeholder="Search Job"
          />
          <div className="my-auto">
            <button className="btn btn-blue p-2 px-3 rounded-4">Search</button>
          </div>
        </div>
      </div>
      <div>
        <JobComCard />
        <hr />
        <JobComCard />
        <hr />
        <JobComCard />
      </div>
    </div>
  );
};

export default JobCom;
