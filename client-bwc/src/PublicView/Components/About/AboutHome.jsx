import React from "react";
import "./AboutHome.css";
import { GrShieldSecurity } from "react-icons/gr";
import {
  FaHammer,
  FaPersonHarassing,
  FaQuestion,
  FaRegCreditCard,
} from "react-icons/fa6";
const AboutHome = () => {
  return (
    <div className="about">
      <div>
        <div className="container">
          <h1 className="fs-1 fw-bold my-2">About Us</h1>
          <h5 className="fw-bold">OUR STORY</h5>
          <p>
            BWC was born out of a shared frustration with the inefficiencies and
            challenges inherent in traditional building processes. As
            homeowners, contractors, and developers ourselves, we experienced
            firsthand the pains of sourcing reliable tradespeople, managing
            contracts, and ensuring payment security. Determined to create a
            better way, we set out to develop a platform that would redefine how
            building projects are executed.
          </p>
        </div>
        <div className="bg-info py-3">
          <div className="container ">
            <h5 className="fw-bold">OUR MISSION</h5>
            <p>
              At BWC, our mission is simple: to empower individuals and
              businesses with the tools and resources they need to succeed in
              their building endeavors. Whether you're renovating your home,
              managing multiple construction projects, or seeking skilled
              tradespeople, we're here to simplify the process and make your
              experience as seamless as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <h5 className="fw-bold">
          KEY ISSUES FACED WITHIN THE BUILDING INDUSTRY
        </h5>
        <div className="d-flex">
          {issueData?.map((da) => (
            <div className="p-3 d-flex gap-2">
              <div className="d-flex fs-2 m-auto bg-dark text-info rounded-circle p-3">
                {da?.icon}
              </div>
              <span className="fw-bold">{da?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHome;

const issueData = [
  { name: "Unreliable tradespeople and consumer", icon: <GrShieldSecurity /> },
  { name: "Lack of transparency", icon: <FaQuestion /> },
  {
    name: "Payment security and fraudulent activity",
    icon: <FaRegCreditCard />,
  },
  { name: "Contractual disputes ", icon: <FaPersonHarassing /> },
  { name: "Lack of industry regulations", icon: <FaHammer /> },
];
