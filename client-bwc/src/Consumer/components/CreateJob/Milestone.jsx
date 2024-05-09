import React from "react";
// import ReactDatePicker from "react-datepicker";

const Milestone = ({ milstones, milestone, setSumMile, setMilestones }) => {
  const handleChange = (e, index) => {
    const { name, type, value } = e.target;
    const updatedMilestones = [...milestone];

    updatedMilestones[index] = {
      ...updatedMilestones[index],
      [name]: value,
    };
    if (type === "text") {
      setSumMile((pre) => (pre += parseInt(value || 0)));
    }

    setMilestones(updatedMilestones);
  };
  return (
    <>
      {Array.from({ length: milstones })?.map((_, i) => (
        <div className="row w-100 row-cols-md-2">
          <div> Milestone {i}</div>
          <div className="d-flex justify-content-between">
            <div className="p-2 ps-0  text-center">
              <div className="p-2 w-100 fw-bold job-create-field rounded">
                <input
                  onChange={(e) => handleChange(e, i)}
                  name={`milestone${i}*`}
                  required
                  type="text"
                  className="w-100 bg-transparent border-0"
                  style={{ outline: "none" }}
                  placeholder={`Milestones ${i} cost`}
                />
              </div>
            </div>
            <div className="p-2 px-0  text-center">
              <div className="p-2  w-100 fw-bold job-create-field rounded">
                {/* <label
                  htmlFor={`milestone${i}Date`}
                  className="position-relative"
                >
                  Milestones ${i} date */}
                <input
                  onChange={(e) => handleChange(e, i)}
                  name={`milestone${i}Date`}
                  id={`milestone${i}Date`}
                  type="date"
                  required
                  className="w-100 bg-transparent border-0 "
                  style={{ outline: "none" }}
                  // placeholder={`Milestones ${i} date`}
                />
                {/* </label> */}
                {/* <ReactDatePicker
                      className="w-100 bg-transparent border-0 shadow-none date-peacker"
                      selected={inputData?.clientDate || new Date()}
                      onChange={(date) => handleDate(date, "clientDate")}
                    /> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Milestone;
