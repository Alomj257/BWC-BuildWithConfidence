import React, { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import JobComCard from "../JobCom/JobComCard";
import { useAuth } from "../../../context/AuthContext";

const JobHistoryCom = () => {
  const [auth] = useAuth();
  const { data } = useFetch(
    `/consumer/jobposts/jobposts/applied/${auth?.user?._id}`
  );
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, [data]);

  return (
    <div className="container">
      {/* <div className="job-header rounded  p-4">
        <h3>Find your dream job there!</h3>
        <p>
          Explore the latest job openings and apply the best job opportunities
          available toady!{" "}
        </p>
        <div className="d-flex  rounded-4 bg-white text-dark ps-3 pe-1 py-1 fs-6">
          <span className="my-auto d-flex ">
            <i className="bx bx-search fs-3 my-auto"></i>
          </span>
          <input
            type="text"
            className="bg-transparent border-0 w-100 p-2"
            style={{ outline: "none" }}
            placeholder="Search Job"
          />
          <div className="my-auto">
            <button className="btn btn-blue p-2 px-3 rounded-4">Search</button>
          </div>
        </div>
      </div> */}
      <div>
        {Array.isArray(jobs)
          ? jobs?.map((job, key) => (
              <>
                <JobComCard job={job} key={key} />
                {key < jobs.length && <hr />}
              </>
            ))
          : ""}
      </div>
    </div>
  );
};
export default JobHistoryCom;
