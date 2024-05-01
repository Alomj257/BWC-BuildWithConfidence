import React, { useState } from "react";
import "./PostJob.css";
import img from "../../../../assests/job-post/cong.gif";
import ReviewJobPost from "./ReviewJobPost";
import { useAuth } from "../../../../context/AuthContext";
import DatePicker from "react-datepicker";
const PostJobCom = () => {
  const [auth] = useAuth();
  const [work, setWork] = useState([]);
  const [desc, setDesc] = useState("");
  const [isBudget, setIsBudget] = useState();
  const [budget, setbudget] = useState("");
  const [vat, setvat] = useState();
  const [step, setStep] = useState(1);
  const [headline, setheadline] = useState("");
  const [location, setLocation] = useState("");
  const [start, setStart] = useState({
    time: "",
    day: "",
    week: "",
  });
  const [completion, setCompletion] = useState({
    time: "",
    day: "",
    week: "",
  });
  const data = {
    work,
    desc,
    budget,
    vat,
    headline,
    location,
    start,
    completion,
    postedBy: auth?.user?._id,
  };
  const handleWork = (value) => {
    if (work.includes(value)) {
      setWork(work.filter((item) => item !== value));
    } else {
      setWork([...work, value]);
    }
  };

  return (
    <div>
      <h2 className="text-center my-4 fw-bold work-heading">
        {step === 1 && "Type of works"}
        {step === 2 && "Description"}
        {step === 3 && "Timeline"}
        {step === 4 && "Budget"}
        {step === 5 && "Headline"}
        {step === 6 && "Location"}
        {step === 8 && "Hooriay! Your job post active"}
      </h2>
      <ul className=" job-post-ul " style={{ listStyle: "decimal" }}>
        {step === 1 && (
          <li>
            <span className="fw-bold">
              What is works are looking to get done
            </span>
            <div className="row w-100 row-cols-md-4 mt-5">
              <div className="p-2">
                <div
                  className={`${
                    work?.includes("plumbing") ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => handleWork("plumbing")}
                >
                  Plumbing
                </div>
              </div>
              <div className="p-2">
                <div
                  className={`${
                    work.includes("mechanical") ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => handleWork("mechanical")}
                >
                  Mechanical
                </div>
              </div>
              <div className="p-2">
                <div
                  className={`${
                    work.includes("structural") ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => handleWork("structural")}
                >
                  Structural
                </div>
              </div>
              <div className="p-2">
                <div
                  className={`${
                    work.includes("design") ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => handleWork("design")}
                >
                  Design
                </div>
              </div>{" "}
              <div className="p-2">
                <div
                  className={`${
                    work.includes("build") ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => handleWork("build")}
                >
                  New Build
                </div>
              </div>{" "}
              <div className="p-2">
                <div
                  className={`${
                    work.includes("extension") ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => handleWork("extension")}
                >
                  Extension
                </div>
              </div>{" "}
              <div className="p-2">
                <div
                  className={`${
                    work.includes("painting") ? "work-acitive" : ""
                  } post-1`}
                  onClick={() => handleWork("painting")}
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-100  p-2 rounded"
                placeholder="enter your job description"
                rows="5"
              ></textarea>
            </div>
          </li>
        )}
        {step === 4 && (
          <>
            <li>
              <span className="fw-bold">Do you have a budget mind?</span>
              <div className="row w-100 row-cols-md-4 my-5">
                <div className="p-2">
                  <div
                    className={`${isBudget ? "work-acitive" : ""} post-1`}
                    onClick={() => setIsBudget(true)}
                  >
                    Yes
                  </div>
                </div>
                <div className="p-2">
                  <div
                    className={`${!isBudget ? "work-acitive" : ""} post-1`}
                    onClick={() => setIsBudget(false)}
                  >
                    No
                  </div>
                </div>
              </div>
            </li>

            {isBudget && (
              <li>
                <span className="fw-bold">Please enter your budget figure</span>

                <div className="w-100 row row-cols-4 my-5">
                  <div className="p-2">
                    <input
                      value={budget}
                      onChange={(e) => setbudget(e.target.value)}
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
            )}
            <li>
              <span className="fw-bold">is this inclusive of VAT?</span>
              <div className="w-100 row row-cols-4 my-5">
                <div className="p-2">
                  <div
                    className={`${vat ? "work-acitive" : ""} post-1`}
                    onClick={() => setvat(true)}
                  >
                    Yes
                  </div>
                </div>
                <div className="p-2">
                  <div
                    className={`${!vat ? "work-acitive" : ""} post-1`}
                    onClick={() => setvat(false)}
                  >
                    No
                  </div>
                </div>
              </div>
            </li>
          </>
        )}

        {step === 3 && (
          <>
            <li>
              <span className="fw-bold">
                When you are looking to get this job started?
              </span>
              <div className="row w-100 row-cols-md-4 my-5">
                <div className="p-2">
                  <div
                    className={`${
                      start?.time === "As soon as possible"
                        ? "work-acitive"
                        : ""
                    } post-1 position-relative`}
                  >
                    {/* <span> As soon as possible</span> */}
                    {/* <input
                      type="date"
                      className="position-absolute  border-0  bg-transparent"
                      style={{ inset: 0, outline: "none", opacity: 0.2 }}
                    /> */}
                    <DatePicker
                      selected={start?.time || new Date()}
                      className="w-100 bg-transparent border-0 shadow-none date-peacker"
                      onChange={(date) => setStart({ ...start, time: date })}
                      popperPlacement="bottom-start"
                    />
                  </div>
                </div>
                <div className="p-2">
                  <div className=" post-1 p-0">
                    <input
                      type="text"
                      onChange={(e) =>
                        setStart({ ...start, day: e.target.value })
                      }
                      style={{ outline: "none" }}
                      className="w-100 bg-transparent border-0 p-2 "
                      placeholder="  Exactly Day"
                    />
                  </div>
                </div>
                <div className="p-2">
                  <div className=" post-1 p-0">
                    <input
                      onChange={(e) =>
                        setStart({ ...start, week: e.target.value })
                      }
                      type="text"
                      style={{ outline: "none" }}
                      className="w-100 bg-transparent border-0 p-2 "
                      placeholder="   Desired Week"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span className="fw-bold">Desired project completion date</span>
              <div className="row w-100 row-cols-md-4 my-5">
                <div className="p-2">
                  <div
                    className={`${
                      completion?.time === "As soon as possible"
                        ? "work-acitive"
                        : ""
                    } post-1`}
                  >
                    <DatePicker
                      selected={completion?.time || new Date()}
                      className="w-100 bg-transparent border-0 shadow-none date-peacker"
                      onChange={(date) =>
                        setCompletion({ ...completion, time: date })
                      }
                      popperPlacement="bottom-start"
                    />
                  </div>
                </div>
                <div className="p-2">
                  <div className=" post-1 p-0">
                    <input
                      type="text"
                      onChange={(e) =>
                        setCompletion({ ...completion, day: e.target.value })
                      }
                      style={{ outline: "none" }}
                      className="w-100 bg-transparent border-0 p-2 "
                      placeholder="  Exactly Day"
                    />
                  </div>
                </div>
                <div className="p-2">
                  <div className=" post-1 p-0">
                    <input
                      onChange={(e) =>
                        setCompletion({ ...completion, week: e.target.value })
                      }
                      type="text"
                      style={{ outline: "none" }}
                      className="w-100 bg-transparent border-0 p-2 "
                      placeholder="   Desired Week"
                    />
                  </div>
                </div>
              </div>
            </li>
          </>
        )}
        {step === 5 && (
          <li>
            <span className="fw-bold">Give your job headline</span>
            <div className="row w-100 row-cols-md-4 my-5">
              <div className="p-2">
                <div className=" post-1 p-0">
                  <input
                    value={headline}
                    onChange={(e) => setheadline(e.target.value)}
                    type="text"
                    style={{ outline: "none" }}
                    className="w-100 bg-transparent border-0 p-2 "
                    placeholder="installing new carpet tiles"
                  />
                </div>
              </div>
            </div>
          </li>
        )}

        {step === 6 && (
          <>
            <li>
              <span className="fw-bold">Provide a postcode of the job</span>
              <div className="row w-100 row-cols-md-4 my-5">
                <div className="p-2">
                  <div className=" post-1 p-0">
                    <input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      type="text"
                      style={{ outline: "none" }}
                      className="w-100 bg-transparent border-0 p-2 "
                      placeholder="location"
                    />
                  </div>
                </div>
              </div>
            </li>
          </>
        )}
        {step === 8 && (
          <div className="w-100 h-100">
            <img src={img} alt="" className="w-100 h-100" />
          </div>
        )}
        {step === 7 && (
          <ReviewJobPost data={data} step={step} setStep={setStep} />
        )}
      </ul>
      <div className="d-flex justify-content-between my-3 container">
        <div
          className="btn job-btn mb-5"
          onClick={() => step > 1 && setStep(step - 1)}
        >
          <i className="bx bx-chevrons-left"></i>
        </div>
        <div className="fw-bold">
          {step}. {step === 1 && "Type of works"}
          {step === 2 && "Description"}
          {step === 3 && "Timeline"}
          {step === 4 && "Budget"}
          {step === 5 && "Headline"}
          {step === 6 && "Location"}
          {step === 8 && "Hooriay! Your job post active"}
        </div>
        <div
          className="btn job-btn mb-5"
          onClick={() => step < 7 && setStep(step + 1)}
        >
          <i className="bx bxs-chevrons-right"></i>
        </div>
      </div>
    </div>
  );
};

export default PostJobCom;
