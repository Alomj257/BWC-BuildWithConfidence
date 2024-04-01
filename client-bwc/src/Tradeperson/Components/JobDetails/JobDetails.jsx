import React from "react";
import "./JobDetails.css";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import { applyJobService } from "../../../service/jobPostService";
import { useLocation } from "react-router-dom";
import Modal from "../../../Utils/Modal/Modal";
import BidApply from "../BidApply/BidApply";
const JobDetails = () => {
  const [auth] = useAuth();
  const { state } = useLocation();
  const job = state;
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
  console.log(job?.applied?.includes(auth?.user?._id));
  return (
    <div className="job-card p-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <span className="my-auto p-3 logo rounded-circle">
            <i className="bx bxs-shopping-bag fs-3"></i>
          </span>
          <div className="mx-3">
            <div className="fw-bold fs-5 text-capitalize">{job?.headline}</div>{" "}
            <small className="text-muted">company</small>
          </div>
        </div>
        <span className="d-flex align-items-center">
          <i className="bx fs-3 pe-2  bx-group text-primary"></i>
          <span className="my-auto ">
            <span className="fw-bold">{job?.applied?.length}</span> applied
          </span>
        </span>
        {/* <div className="d-flex">
          <span className="threeDot p-1 my-auto rounded-circle">
            <i className="bx  fs-3 bx-dots-vertical-rounded"></i>
          </span>
        </div> */}
      </div>
      <div className="d-flex justify-content-between my-2 mt-4 fw-bold ">
        <span className="d-flex">
          <i className="bx fs-4 pe-2 bx-time-five  "></i>{" "}
          <span className="my-auto "> Full time</span>
        </span>
        <span className="d-flex">
          <i className="bx fs-4 pe-2 bxs-shopping-bag-alt "></i>{" "}
          <span className="my-auto">1 yr</span>
        </span>
        <span className="d-flex">
          <i className="bx fs-4 pe-2 bx-map"></i>
          <span className="my-auto">{job?.location}</span>
        </span>
        <span>{new Date(job?.createdAt).toLocaleDateString()}</span>
      </div>
      <div>
        <p>{job?.description || job?.desc}</p>
      </div>
      <div className="d-flex my-4 justify-content-between align-items-center">
        <div>
          <div className="d-flex gap-4">
            <small className="fw-bold fs-6">Start Date:</small>{" "}
            <small>{job?.start?.time}</small>
          </div>
          <div className="d-flex gap-4">
            <small className="fw-bold fs-6">Desired Day:</small>{" "}
            <small>{job?.start?.day}</small>
          </div>
          <div className="d-flex gap-4">
            <small className="fw-bold fs-6"> Desired Week:</small>{" "}
            <small>{job?.start?.week}</small>
          </div>
        </div>
        <div>
          <div className="d-flex gap-4">
            <small className="fw-bold fs-6">Completion Date:</small>{" "}
            <small>{job?.completion?.time}</small>
          </div>
          <div className="d-flex gap-4">
            <small className="fw-bold fs-6">Desired Day:</small>{" "}
            <small>{job?.completion?.day}</small>
          </div>
          <div className="d-flex gap-4">
            <small className="fw-bold fs-6"> Desired Week:</small>{" "}
            <small>{job?.completion?.week}</small>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <span className="d-flex">
          <i className="bx fs-3 pe-2 bx-dollar-circle text-primary"></i>
          <span className="my-auto">
            <span className="fw-bold">${job?.budget}</span> /Month
          </span>
        </span>
        {/* <span className="d-flex">
          <i className="bx fs-3 pe-2 bx-group text-primary"></i>
          <span className="my-auto">
            <span className="fw-bold">{job?.applied?.length}</span> applied
          </span>
        </span> */}
        {job?.applied?.includes(auth?.user?._id) ? (
          <button
            onClick={() => Handleapplyjob(job?._id)}
            disabled={job?.applied?.includes(auth?.user?._id)}
            className={`btn ${
              job?.applied?.includes(auth?.user?._id)
                ? "btn-light-green"
                : "btn-blue"
            }`}
          >
            {job?.applied?.includes(auth?.user?._id) ? "Applied" : "Apply Now"}
          </button>
        ) : (
          <Modal
            btnText="Apply"
            btnClasss="btn btn-blue"
            bodyClass="bg-white col-md-8"
            closeIcon="fs-2"
          >
            <BidApply job={job} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
