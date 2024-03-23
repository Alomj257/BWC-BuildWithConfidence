import React from "react";
import "./AboutHome.css";
const JoinNow = () => {
  return (
    <div className="bg-info p-5" style={{ marginTop: "10rem" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex">
            <div className="m-auto">
              <img
                src="/images/about/b.png"
                style={{ marginTop: "-20rem" }}
                alt=""
                className="w-100 h-100"
              />
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <div className="d-flex">
                {" "}
                <div
                  className="ms-auto"
                  style={{ width: "8rem", marginTop: "-7rem" }}
                >
                  <img
                    className="h-100 w-100 rounded-circle"
                    src="/images/about/P1.png"
                    alt=""
                    // style={{ marginTop: "-5rem" }}
                  />
                </div>
              </div>
              <div className="text-white">
                <h2 className="fw-bold ">
                  WE ARE HIRING ONLY THE BEST TRADESPEOPLE
                </h2>
                <p>
                  Work at your own pace and win more work. Utilise our
                  innovative tools to help you bid, manage documents and
                  workloads.
                </p>
                <button className="btn btn-dark rounded-5 px-4">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
