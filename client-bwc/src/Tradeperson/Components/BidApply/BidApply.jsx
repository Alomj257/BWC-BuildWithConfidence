import React, { useState } from "react";
import "./BidApply.css";
import { applyJobService } from "../../../service/jobPostService";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
const BidApply = ({ job }) => {
  const [auth] = useAuth();
  const [bid, setBid] = useState(null);
  const Handleapplyjob = async (jobId) => {
    try {
      const { data } = await applyJobService(auth?.user?._id, jobId);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      toast.success(data);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBid({ ...bid, [name]: files ? files[0] : value });
  };
  return (
    <div>
      <ul style={{ listStyle: "decimal" }} className="d-flex flex-column gap-4">
        <li className="d-flex justify-content-between align-items-center">
          <div className="w-100">What is your fixed price</div>
          <div className="w-100 text-center bg-light  py-2 rounded mx-2">
            <input
              style={{ outline: "none" }}
              type="text"
              name="bid"
              className="w-100 bg-transparent border-0 px-2"
              placeholder="£25,000"
              onChange={handleChange}
            />
          </div>
          <div className="w-100 text-center bg-secondary text-white py-2 rounded mx-2">
            GBP Sterling Pounds
          </div>
        </li>
        <li className="d-flex justify-content-between align-items-center">
          <div className="w-100"> What is the expected duration?</div>
          <div className="w-100 text-center bg-light  py-2 rounded mx-2">
            <input
              style={{ outline: "none" }}
              type="text"
              name="duration"
              className="w-100 bg-transparent border-0 px-2"
              placeholder="4"
              onChange={handleChange}
            />
          </div>
          <div className="w-100 text-center bg-secondary text-white py-2 rounded mx-2">
            Week
          </div>
        </li>
        <li className="d-flex justify-content-between align-items-center">
          <div className="w-100"> When will this quotation expire?</div>
          <div className="w-100 text-center bg-light  py-2 rounded mx-2">
            <input
              style={{ outline: "none" }}
              type="text"
              name="expireQuotation"
              className="w-100 bg-transparent border-0 text-center px-2"
              placeholder="12 March 2024
              "
              onChange={handleChange}
            />
          </div>
          <div className="w-100 text-center bg-secondary text-white py-2 rounded mx-2">
            Fixed Date
          </div>
        </li>
        <li className="d-flex justify-content-between align-items-center">
          <div className="w-100"> Upload supporting information?</div>
          <div className="w-100 text-center bg-light  py-2 rounded mx-2">
            <label htmlFor="upload w-100 text-muted">Upload</label>
            <input
              type="file"
              id="upload"
              name="file"
              className="position-absolute"
              style={{ zIndex: "-1" }}
              onChange={handleChange}
            />
          </div>
          <div className="w-100 text-center bg-secondary text-white py-2 rounded mx-2">
            Document
          </div>
        </li>
        <button
          onClick={() => Handleapplyjob(job?._id)}
          className="btn btn-primary py-2"
        >
          Apply
        </button>
      </ul>
    </div>
  );
};

export default BidApply;
