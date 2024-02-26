import React, { useState } from "react";
import "./PostJob.css";
const PostJobCom = () => {
  const [work, setWork] = useState("");
  const [budget, setbudget] = useState("");
  const [vat, setvat] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div>
      <h2 className="text-center my-4 fw-bold work-heading">
        {step === 1 && "Type of works"}
        {step === 2 && "Description"}
        {step === 3 && "Budget"}
        {step === 4 && "Headline"}
        {step === 5 && "Location"}
        {step === 6 && "Hooriay! Your job post active"}
      </h2>
      <ul className="my-5" style={{ listStyle: "decimal" }}>
        {step === 1 && (
          <li>
            <span className="fw-bold">
              What is works are looking to get done
            </span>
            <div className="row w-100 row-cols-md-4 mt-5">
              <div className="p-2">
                <div
                  className={`${
                    work === "plumbing" ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => setWork("plumbing")}
                >
                  Plumbing
                </div>
              </div>
              <div className="p-2">
                <div
                  className={`${
                    work === "mechanical" ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => setWork("mechanical")}
                >
                  Mechanical
                </div>
              </div>
              <div className="p-2">
                <div
                  className={`${
                    work === "structural" ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => setWork("structural")}
                >
                  Structural
                </div>
              </div>
              <div className="p-2">
                <div
                  className={`${
                    work === "design" ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => setWork("design")}
                >
                  Design
                </div>
              </div>{" "}
              <div className="p-2">
                <div
                  className={`${work === "build" ? "work-acitive" : ""} post-1`}
                  onClick={() => setWork("build")}
                >
                  {" "}
                  New Build
                </div>
              </div>{" "}
              <div className="p-2">
                <div
                  className={`${
                    work === "extension" ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => setWork("extension")}
                >
                  Extension
                </div>
              </div>{" "}
              <div className="p-2">
                <div
                  className={`${
                    work === "painting" ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => setWork("painting")}
                >
                  Paintng & Decorating
                </div>
              </div>
            </div>
          </li>
        )}
        {step === 2 && (
          <li className="my-5">
            <span className="fw-bold">Enter your job descripition</span>
            <div className="my-5 row w-100">
              <textarea
                name=""
                id=""
                className="w-100  p-2 rounded"
                placeholder="enter your job description"
                rows="5"
              ></textarea>
            </div>
          </li>
        )}
        {step === 3 && (
          <>
            <li>
              <span className="fw-bold">Do you have a budget mind?</span>
              <div className="row w-100 row-cols-md-4 my-5">
                <div className="p-2">
                  <div
                    className={`${
                      budget === "yes" ? "work-acitive" : ""
                    } post-1`}
                    onClick={() => setbudget("yes")}
                  >
                    Yes
                  </div>
                </div>
                <div className="p-2">
                  <div
                    className={`${
                      budget === "no" ? "work-acitive" : ""
                    } post-1`}
                    onClick={() => setbudget("no")}
                  >
                    No
                  </div>
                </div>
              </div>
            </li>

            <li>
              <span className="fw-bold">Please enter your budget figure</span>

              <div className="w-100 row row-cols-4 my-5">
                <div className="p-2">
                  <input
                    type="text"
                    className="w-100 post-1 border-0 bg-transperent"
                    placeholder="25.000"
                  />
                </div>
                <div className="p-2">
                  <div className=" post-1">GBP Starting Pounds</div>
                </div>
              </div>
            </li>
            <li>
              <span className="fw-bold">is this inclusive of VAT?</span>
              <div className="w-100 row row-cols-4 my-5">
                <div className="p-2">
                  <div
                    className={`${vat === "yes" ? "work-acitive" : ""} post-1`}
                    onClick={() => setvat("yes")}
                  >
                    Yes
                  </div>
                </div>
                <div className="p-2">
                  <div
                    className={`${vat === "no" ? "work-acitive" : ""} post-1`}
                    onClick={() => setvat("no")}
                  >
                    No
                  </div>
                </div>
              </div>
            </li>
          </>
        )}
      </ul>
      <div className="d-flex justify-content-between my-3 container">
        <div
          className="btn btn-primary mb-5"
          onClick={() => step > 1 && setStep(step - 1)}
        >
          Back
        </div>
        <div
          className="btn btn-primary mb-5"
          onClick={() => step < 6 && setStep(step + 1)}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default PostJobCom;
