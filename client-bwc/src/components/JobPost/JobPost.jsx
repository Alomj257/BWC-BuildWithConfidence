import React from "react";
import "./JobPost.css";
import Modal from "../../Utils/Modal/Modal";
import NewJobPost from "../NewJobPost/NewJobPost";
const JobPost = () => {
  return (
    <div className="container">
      <div className="job-search shadow d-flex mt-4 bg-light p-2 px-3 rounded justify-content-between">
        <div>
          <input
            type="text"
            placeholder="Search by category"
            className="p-2 search-input rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by job name"
            className="p-2 search-input rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Job type"
            className="p-2 search-input rounded"
          />
        </div>
        <div className="post">
          <Modal
            btnText="New Job Post"
            btnClasss="job-btn p-2  rounded"
            bodyClass="bg-white col-10"
            closeIcon="fs-1"
          >
            <NewJobPost />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
