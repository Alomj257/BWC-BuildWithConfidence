import React from "react";
import "./CreateJob.css";
const JobCreate = () => {
  return (
    <div>
      <h2 className="my-2">Job Create</h2>

      {/* field */}
      <div className="row row-cols-md-2 w-100">
        <div className="my-auto">
          Will you be using our digital contract service or upload your
          contract?
        </div>
        <div className="row row-cols-md-2 ">
          <div className="p-2 text-center ">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Digital Service
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Upload Premade
            </div>
          </div>
        </div>
      </div>

      <h4>AGREEMENT</h4>
      <div className="row row-cols-md-2 w-100">
        <div className="my-auto">Today's date</div>
        <div>
          <div className="p-2 w-100 fw-bold job-create-field rounded">
            {new Date().getDate()}-{new Date().getMonth()}-
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
      {/* client */}
      <hr />
      <div className="row row-cols-md-2 mt-3 w-100">
        <div className="my-auto">Client</div>
        <div>
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="my-auto fw-bold">
              Institution
            </label>
            <div className="p-2 fw-bold job-create-field rounded my-2">
              <input
                type="text"
                className="w-100 bg-transparent border-0"
                style={{ outline: "none" }}
                placeholder="UK limited company"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="my-auto fw-bold">
              Individual
            </label>
            <div className="p-2 fw-bold job-create-field rounded my-2">
              <input
                type="text"
                className="w-100 bg-transparent border-0"
                style={{ outline: "none" }}
                placeholder="John Smith"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="my-auto fw-bold">
              Address
            </label>
            <div className="p-2 fw-bold job-create-field rounded my-2">
              <input
                type="text"
                className="w-100 bg-transparent border-0"
                style={{ outline: "none" }}
                placeholder="5 Birch Road, London, L13 7HG"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contractor */}
      <hr />
      <div className="row row-cols-md-2 mt-3 w-100">
        <div className="my-auto">Contractor</div>
        <div>
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="my-auto fw-bold">
              Institution
            </label>
            <div className="p-2 fw-bold job-create-field rounded my-2">
              <input
                type="text"
                className="w-100 bg-transparent border-0"
                style={{ outline: "none" }}
                placeholder="UK limited company"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="my-auto fw-bold">
              Individual
            </label>
            <div className="p-2 fw-bold job-create-field rounded my-2">
              <input
                type="text"
                className="w-100 bg-transparent border-0"
                style={{ outline: "none" }}
                placeholder="John Smith"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="my-auto fw-bold">
              Address
            </label>
            <div className="p-2 fw-bold job-create-field rounded my-2">
              <input
                type="text"
                className="w-100 bg-transparent border-0"
                style={{ outline: "none" }}
                placeholder="5 Birch Road, London, L13 7HG"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <label htmlFor="" className="my-auto fw-bold">
              Company number
            </label>
            <div className="p-2 fw-bold job-create-field rounded my-2">
              <input
                type="text"
                className="w-100 bg-transparent border-0"
                style={{ outline: "none" }}
                placeholder="190202002"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Procurement  */}
      <div className="row w-100">
        <div className="col-2">
          <div>Procurement </div>
        </div>
        <div className="col-10 row  row-cols-md-5">
          <div className="p-2 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Supply and Installation
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Installation
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Design & Build
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Designer
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Option feature
            </div>
          </div>
        </div>
      </div>
      {/* scope */}
      <div className="row row-cols-md-2 w-100">
        <div>Scope of work</div>
        <div className="d-flex justify-content-between">
          <label htmlFor="" className="my-auto fw-bold">
            Install new kitchen
          </label>
          <div className="p-2 fw-bold job-create-field rounded my-2">
            <input
              type="text"
              className="w-100 bg-transparent border-0"
              style={{ outline: "none" }}
              placeholder="Install new kitchen "
            />
          </div>
        </div>
      </div>

      <div className="row w-100 row-cols-md-2">
        <label htmlFor="" className="my-auto fw-bold">
          Specification
        </label>
        <div className="p-2 fw-bold job-create-field rounded my-2">
          <input
            type="text"
            className="w-100 bg-transparent border-0"
            style={{ outline: "none" }}
            placeholder="IKEA Wood Kitchen"
          />
        </div>
      </div>
      {/* architect */}
      <div className="row  w-100 row-cols-md-2">
        <div>Architect Drawings</div>
        <div className="d-flex justify-content-between">
          <div className="p-2 w-100 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Yes
            </div>
          </div>
          <div className="p-2 w-100 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">No</div>
          </div>
        </div>
        {/* meaasure */}
        <div className="row w-100 row-cols-md-2">
          <label htmlFor="" className="my-auto fw-bold">
            Measurements / Quantities
          </label>
          <div className="p-2 fw-bold job-create-field rounded my-2">
            <input
              type="text"
              className="w-100 bg-transparent border-0"
              style={{ outline: "none" }}
              placeholder="kitchen 1: 25m2 "
            />
          </div>
        </div>
      </div>
      {/* precond */}
      <div className="row w-100 row-cols-md-2">
        <label htmlFor="" className="my-auto fw-bold">
          Precondition Survey Photo
        </label>
        <div className="p-2 fw-bold job-create-field rounded my-2">
          <input
            type="file"
            className="w-100 bg-transparent border-0"
            style={{ outline: "none" }}
          />
        </div>
      </div>
      {/* architect */}
      <div className="row  w-100 row-cols-md-2">
        <div>Site visit required to assess the condition?</div>
        <div className="d-flex justify-content-between">
          <div className="p-2 w-100 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">
              Yes
            </div>
          </div>
          <div className="p-2 w-100 text-center">
            <div className="p-2 w-100 fw-bold job-create-field rounded">No</div>
          </div>
        </div>
        {/* meaasure */}
        <div className="row w-100 row-cols-md-2">
          <label htmlFor="" className="my-auto fw-bold">
            Date of condition survey
          </label>
          <div className="p-2 fw-bold job-create-field rounded my-2">
            <input
              type="Date"
              className="w-100 bg-transparent border-0"
              style={{ outline: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCreate;
