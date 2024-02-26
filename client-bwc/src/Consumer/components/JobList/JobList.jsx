import React from "react";
import img from "../../../assests/profile/P1.png";
import "./JobList.css";
const JobList = () => {
  return (
    <div className="container">
      {data.map((data, key) => (
        <div key={key} className="list-body my-4 bg-white shadow p-5 rounded">
          <div className="d-flex justify-content-between flex-wrap">
            <div>
              <div className="d-flex">
                <div className="company-logo m-auto ">
                  <img src={img} className="w-100 m-auto" alt="" />
                </div>
                <div className="ms-2">
                  <h5 className="m-0">{data.desig}</h5>
                  <small className="text-muted">{data.company}</small>{" "}
                  <span className="text-muted">{data.location}</span>
                </div>
              </div>
            </div>
            <div className="fw-bold"> $3K-$5K</div>
          </div>
          <p className="my-3 text-justify">{data.detail}</p>
          <div className="d-flex gap-3">
            <small className="bg-light fw-bold py-1 px-2 rounded">
              {" "}
              Remote
            </small>
            <small className="bg-light fw-bold py-1 px-2 rounded">
              {" "}
              Full Time
            </small>{" "}
            <small className="bg-light fw-bold py-1 px-2 rounded">
              {" "}
              UX
            </small>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;

const data = [
  {
    desig: "Software developer",
    company: "Ali baba",
    location: "washington, USA",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur alias cupiditate odit ipsum velit dolorum sequi accusamus aperiam praesentium nihil, corporis error, aliquam velit.",
  },
  {
    desig: "Software developer",
    company: "Ali baba",
    location: "washington, USA",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur alias cupiditate odit ipsum velit dolorum sequi accusamus aperiam praesentium nihil, corporis error, aliquam velit.",
  },
  {
    desig: "Software developer",
    company: "Ali baba",
    location: "washington, USA",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur alias cupiditate odit ipsum velit dolorum sequi accusamus aperiam praesentium nihil, corporis error, aliquam velit.",
  },
  {
    desig: "Software developer",
    company: "Ali baba",
    location: "washington, USA",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur alias cupiditate odit ipsum velit dolorum sequi accusamus aperiam praesentium nihil, corporis error, aliquam velit.",
  },
  {
    desig: "Software developer",
    company: "Ali baba",
    location: "washington, USA",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur alias cupiditate odit ipsum velit dolorum sequi accusamus aperiam praesentium nihil, corporis error, aliquam velit.",
  },
];
