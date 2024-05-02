import React from "react";

const Milestone = ({ total, milstones, handleChange }) => {
  return (
    <>
      <div className="row w-100 row-cols-md-2">
        <div>Number of Milestone</div>
        <div className="p-2  text-center">
          <div className="p-2 w-100 fw-bold job-create-field rounded">
            <input
              onChange={handleChange}
              name="Milestone"
              type="text"
              className="w-100 bg-transparent border-0"
              style={{ outline: "none" }}
              placeholder="Milestones"
            />
          </div>
        </div>
      </div>
      <div className="row w-100 row-cols-md-2">
        <div>Each Milestone Payment</div>
        <div className="p-2  text-center">
          <div className="p-2 w-100 fw-bold job-create-field rounded">
            <input
              type="text"
              name="eachMilestone"
              onChange={handleChange}
              className="w-100 bg-transparent border-0"
              style={{ outline: "none" }}
              placeholder="Each milstone payment"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Milestone;
