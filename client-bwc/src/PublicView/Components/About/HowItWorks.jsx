import React from "react";
import { FaHospitalUser, FaPersonDressBurst, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
const HowItWorks = () => {
  return (
    <div>
      <div className="container">
        <h3 className="fw-bold my-4">HOW IT WORKS</h3>
        <div>
          <p>
            Our platform is FREE to use and you don’t pay for leads, you only
            pay a small fee when you are awarded the job!
          </p>
        </div>
        <div className="my-3 d-flex gap-4">
          {processStep?.map((da) => (
            <div className="d-flex flex-column  m-auto text-capitalize">
              <div className="m-auto d-flex fs-1 p-3 bg-info text-white rounded-circle">
                {da?.icons}
              </div>
              <span className="mx-auto">{da?.name}</span>
            </div>
          ))}
        </div>

        <h3 className="my-4">5 REASONS TO JOIN US</h3>
        {reasons?.map((data, key) => (
          <div className="d-flex gap-4 my-3">
            <div className="m-auto d-flex ">
              <span className="fs-5 p-3 m-auto bg-info text-white rounded-circle">
                {key + 1}
              </span>
            </div>
            <div>{data}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

const processStep = [
  { name: "profile", icons: <FaUser /> },
  { name: "search for jobs", icons: <FaSearch /> },
  { name: "bid for jobs", icons: <FaHospitalUser /> },
  { name: "manage all jobs", icons: <FaPersonDressBurst /> },
  { name: "get rated", icons: <IoStar /> },
];

const reasons = [
  "Joining our platform provides tradespeople with access to a diverse pool of potential customers, expanding their client base and increasing opportunities for business growth.",
  "Our platform offers a streamlined booking process, allowing tradespeople to efficiently manage appointments, schedules, and client communications, saving time and minimizing administrative tasks.",
  "Our platform provides secure payment processing mechanisms, ensuring timely and hassle-free transactions for tradespeople. With built-in payment protection measures, tradespeople can minimize the risk of non-payment or disputes.",
  "Our platform offers tradespeople the flexibility to manage their own schedules, set their rates, and choose the types of projects they want to undertake, empowering them to work on their terms while enjoying the benefits of our platform's support and infrastructure.",
  "Being part of our platform signifies credibility and trustworthiness to potential clients. Tradespeople benefit from the platform's reputation and adherence to quality standards, boosting their credibility in the eyes of consumers.",
];
