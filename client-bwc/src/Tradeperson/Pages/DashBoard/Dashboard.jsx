import React, { useState } from "react";
import "./Dashboard.css";
import backgroundImage from "../../../assests/banner/b.png";

import { useNavigate } from "react-router-dom";
import RightSidebar from "../../../Consumer/components/RightSidebar/RightSidebar";
import Finanacial from "../../../Consumer/components/FinancialContract/Financial/Finanacial";
import Signiture from "../../../Consumer/components/FinancialContract/Signiture/Signiture";
import MemeberShip from "../../../Consumer/components/FinancialContract/Membership/MemeberShip";
import LiveJobs from "../../../Consumer/components/FinancialContract/LiveJob/LiveJobs";

function TradeDashboard() {
  const [contract, setContract] = useState("financial");
  const [right, setRight] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex">
        <div className="outlet">
          <div className="dashboard-heading mb-5">
            <h2>
              Welcome to BWC ecosystem!{" "}
              <span style={{ color: "gold" }}>
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </h2>
          </div>
          <div
            className="dashboard-banner"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="banner-text">
              <h3>Let's create your first job.</h3>
              <p>Click 'tradeperson' to access our vetted tradeperson nearby</p>
              <p>Click 'start now' if you already choosen a tradeperson</p>
              <button
                className="banner-button tradeperson"
                onClick={() => navigate("/tradeperson/consumer/nearby")}
              >
                Start Now
              </button>
              {/* <button className="banner-button start-now">Start Now</button> */}
            </div>
          </div>
          <div className="dashboard-box">
            <div
              className={`${contract === "financial" ? "active" : ""} box`}
              onClick={() => setContract("financial")}
            >
              <h3>Financial Summary</h3>
            </div>
            <div
              className={`${contract === "signiture" ? "active" : ""} box`}
              onClick={() => setContract("signiture")}
            >
              <h3>Create a Signature</h3>
            </div>
            <div
              className={`${contract === "membership" ? "active" : ""} box`}
              onClick={() => setContract("membership")}
            >
              <h3>Membership</h3>
            </div>
            <div
              className={`${contract === "live" ? "active" : ""} box`}
              onClick={() => setContract("live")}
            >
              <h3>Live Jobs</h3>
            </div>
          </div>
          {contract === "financial" && <Finanacial />}
          {contract === "signiture" && <Signiture />}
          {contract === "membership" && <MemeberShip />}
          {contract === "live" && <LiveJobs />}
        </div>
        <div className="right-sidebar">
          {!right ? (
            <i
              className="bx  right-icon bxs-chevrons-right"
              onClick={() => setRight(!right)}
            ></i>
          ) : (
            <i
              className="bx right-icon bxs-chevrons-left"
              onClick={() => setRight(!right)}
            ></i>
          )}
          <div
            className={`rightside-content ${right ? "set-right-sidebar" : ""}`}
          >
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default TradeDashboard;
