import React, { useState } from "react";
import ReactQuill from "react-quill";
import "./NewJobPost.css";
const NewJobPost = () => {
  const [convertedText, setConvertedText] = useState("Some default content");
  return (
    <div className="container new-job">
      <div className="row row-cols-md-2">
        <div>
          <h5>Job Title</h5>
          <div>A job title must describe one position only</div>
        </div>
        <div>
          <input
            type="text"
            placeholder='e.g "kitchen staff"'
            className="w-100 p-1"
          />
        </div>
      </div>
      <hr />
      <div className="row row-cols-md-2">
        <div>
          <h5>Job Decription</h5>
          <div>
            Provide a short description about the job.Keep it short and to the
            point.
          </div>
        </div>
        <div>
          <ReactQuill
            theme="snow"
            value={convertedText}
            onChange={setConvertedText}
            className="w-100 p-1"
          />
        </div>
      </div>
      <hr />
      <div className="row row-cols-md-2">
        <div>
          <h5>Employment type </h5>
          <div>Description text goes in here</div>
        </div>
        <div>
          <div className="border p-2 mt-3 d-flex rounded text-start border-dark">
            <input
              type="checkbox"
              className="my-auto"
              style={{ width: "1rem", height: "1rem" }}
              placeholder='e.g "kitchen staff"'
            />
            <label htmlFor="" className="ms-2 my-auto">
              Full-time
            </label>
          </div>
          <div className="border mt-3 p-2 d-flex rounded text-start border-dark">
            <input
              type="checkbox"
              className="my-auto"
              style={{ width: "1rem", height: "1rem" }}
              placeholder='e.g "kitchen staff"'
            />
            <label htmlFor="" className="ms-2 my-auto">
              Part-time
            </label>
          </div>
          <div className="border mt-3 p-2 d-flex rounded text-start border-dark">
            <input
              type="checkbox"
              className="my-auto"
              style={{ width: "1rem", height: "1rem" }}
              placeholder='e.g "kitchen staff"'
            />
            <label htmlFor="" className="ms-2 my-auto">
              On demand
            </label>
          </div>
          <div className="border mt-3 p-2 d-flex rounded text-start border-dark">
            <input
              type="checkbox"
              className="my-auto"
              style={{ width: "1rem", height: "1rem" }}
              placeholder='e.g "kitchen staff"'
            />
            <label htmlFor="" className="ms-2 my-auto">
              Negotiable
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="row row-cols-md-2">
        <div>
          <h5>Working Schedule</h5>
          <div>You can pick multiple work schedules</div>
        </div>
        <div>
          <input
            type="text"
            placeholder='Pick working schedule"'
            className="w-100 p-1"
          />
        </div>
      </div>
      <hr />
      <div className="row row-cols-md-2">
        <div>
          <h5>Salary</h5>
          <div>Choos e how you prefer to pay for this job</div>
        </div>
        <div>
          <div className="d-flex gap-3">
            <div className="p-5 border border-dark rounded d-flex flex-column">
              <i class="bx bx-time-five mx-auto"></i>
              <span>Hourly</span>
            </div>
            <div className="p-5 border border-dark rounded  d-flex flex-column">
              <i class="bx bxs-dice-2 mx-auto"></i>
              <span className=" ">Custom</span>
            </div>
          </div>
          <div className="d-flex justify-content-between my-3">
            <div className="d-flex flex-column">
              <label htmlFor="">Amount you want to pay</label>
              <input type="text" placeholder="00000" className="p-1 px-2" />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="">How you want to pay</label>
              <select name="" id="" className="p-1 px-3 text-dark">
                <option className="py-2 text-dark" value="Yearly"></option>
                <option className="py-2 text-dark" value="Monthly"></option>
                <option className="py-2 text-dark" value="WeekLy"></option>
              </select>
            </div>
          </div>
          <div className="d-flex gap-3">
            <input
              type="checkbox"
              className="my-auto"
              style={{ width: "1rem", height: "1rem" }}
              placeholder='e.g "kitchen staff"'
            />
            <label htmlFor="" className="my-auto">
              Salary is negotiable
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="row row-cols-md-2">
        <div>
          <h5>hiring Multiple condidiate?</h5>
          <div>This will be displayed on job page for condidiates to see. </div>
        </div>
        <div>
          <div className="border mt-3 p-2 d-flex rounded text-start border-dark">
            <input
              type="checkbox"
              className="my-auto"
              style={{ width: "1rem", height: "1rem" }}
              placeholder='e.g "kitchen staff"'
            />
            <label htmlFor="" className="ms-2 my-auto">
              Negotiable
            </label>
          </div>
        </div>
      </div>
      <div className="text-center my-3 mt-5">
        <button className="btn btn-primary">Post Job</button>
      </div>
    </div>
  );
};

export default NewJobPost;
