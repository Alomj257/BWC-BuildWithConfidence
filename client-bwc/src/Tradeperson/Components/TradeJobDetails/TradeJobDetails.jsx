import React, { useState } from "react";
import "./TradeJobDetails.css";

const TradeJobDetails = () => {
  const [isActive, setActive] = useState("overview");
  return (
    <div className="tradeJobDetail container my-5">
      <div className="trade-header bg-dark-blue text-white p-4 rounded">
        <h5 className="fw-bold">Building a kitchen</h5>
        <div className="d-flex justify-content-between my-4">
          <div
            className="my-auto d-flex gap-3"
            style={{ width: "3rem", aspectRatio: "1/1" }}
          >
            <img
              src="/images/about/b.png"
              alt=" img"
              className="w-100 h-100 rounded-circle"
            />{" "}
            <span className="my-auto fw-bold">Tradeperson</span>
          </div>
          <div className="my-auto fw-bold pe-3">Download Contract </div>
        </div>
      </div>
      <div className="d-flex gap-4 my-4 border-bottom ">
        <div
          onClick={() => setActive("overview")}
          className={isActive === "overview" ? "trade-active" : ""}
          style={{ cursor: "pointer" }}
        >
          Overview
        </div>
        <div
          onClick={() => setActive("details")}
          className={isActive === "details" ? "trade-active" : ""}
          style={{ cursor: "pointer" }}
        >
          Details
        </div>
      </div>
      {isActive === "overview" && (
        <div className="trade-overview">
          <div className="my-2">
            <div className="fw-bold"> Contract Sum </div>
            <div>$5,000</div>
          </div>
          <div className="d-flex gap-4 my-3">
            <div className="d-flex flex-column text-center ">
              <span className="fw-bold">Milstone Paid</span>
              <span>$1,000</span>
            </div>
            <div className="d-flex flex-column text-center ">
              <span className="fw-bold">Milstone Remaining</span>
              <span>$3,000</span>
            </div>
            <div className="d-flex flex-column text-center ">
              <span className="fw-bold">Escrow Amount</span>
              <span>$4,000</span>
            </div>
          </div>

          <h4 className="my-3 fw-bold">Payment Milestones</h4>
          <div>
            <div className="d-flex gap-4 my-3 align-items-center">
              <div>
                <div className="d-flex">
                  <span className="rounded-circle m-auto  text-white p-3 px-4 bg-dark-blue">
                    1
                  </span>{" "}
                </div>
              </div>
              <span>Milestone 1</span>
              <span>Due 12 March 2024</span>
              <div className="ms-auto">
                <button className="btn btn-dark-blue text-white">Paid</button>
              </div>
            </div>
            <div className="d-flex gap-4 my-3 align-items-center">
              <div>
                <div className="d-flex">
                  <span className="rounded-circle m-auto  text-white p-3 px-4 bg-dark-blue">
                    2
                  </span>{" "}
                </div>
              </div>
              <span>Milestone 2</span>
              <span>Due 15 March 2024</span>
              <div className="d-flex gap-3 ms-auto">
                <button className="btn btn-dark-blue text-white">
                  Release Payment
                </button>
                <button className="btn btn-outline-dark-blue ">Dispute</button>
              </div>
            </div>
            <div className=" col-md-5 ms-auto">
              <p>
                Tradeperson has requested payment, you have up to 3 working days
                to either release payment or dispute the request
              </p>
            </div>
          </div>
        </div>
      )}

      {isActive === "details" && (
        <div className="tradejob-details">
          <div className="my-4 p-3 mx-0 px-0">
            <h5 className="fw-bold">Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium veniam tenetur, saepe accusantium quidem ad rerum
              reiciendis dolorem, consequuntur hic, unde quas ipsam optio. Ab
              autem laudantium animi aliquam, doloribus optio commodi veritatis
              illum assumenda aut dolores facere ipsa debitis nam dignissimos
              deserunt perspiciatis fugiat odit nesciunt quam neque. Molestias
              nemo culpa impedit, quam a tenetur at eveniet vel quo magni
              repellendus aliquam consectetur ipsum quae dolorem voluptate modi
              rem ipsa explicabo. A voluptatem velit deserunt nisi blanditiis
              nemo ut quod similique! Velit voluptas reiciendis, saepe eius
              exercitationem deleniti culpa quas est illo fuga incidunt,
              laboriosam odit rem libero! Voluptatibus.
            </p>
          </div>
          <h4 className="fw-bold my-3">Summary</h4>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="fw-bold">Contract Type</div>
              <div className="px-3 bg-dark-blue text-white rounded py-2">
                Fixed
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="fw-bold">Start Time</div>
              <div className="px-3 bg-dark-blue text-white rounded py-2">
                12 mar 2024
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="fw-bold">Total spent</div>
              <div className="px-3 bg-dark-blue text-white rounded py-2">
                $23,000
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeJobDetails;
