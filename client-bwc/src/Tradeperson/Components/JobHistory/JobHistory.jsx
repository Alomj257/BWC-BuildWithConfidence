import React, { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
// import JobComCard from "../JobCom/JobComCard";
import { useAuth } from "../../../context/AuthContext";
import JobCard from "./JobCard";

const JobHistoryCom = () => {
  const [auth] = useAuth();
  const [nav, setNav] = useState("bid");
  const { data } = useFetch(
    `/consumer/jobposts/jobposts/applied/${auth?.user?._id}`
  );
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, [data]);
  const handleNav = (na) => {
    setNav(na);
  };

  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-between px-5 mx-2">
          <h4
            onClick={() => handleNav("bid")}
            className={`text-center fw-bold mt-3  ${
              nav === "bid" ? "job-histry-active" : ""
            }
           `}
          >
            Bid
          </h4>
          <h4
            onClick={() => handleNav("contract")}
            className={`text-center fw-bold mt-3 " ${
              nav === "contract" ? "job-histry-active" : ""
            }
           `}
          >
            Pre Contract
          </h4>
          <h4
            onClick={() => handleNav("live")}
            className={`text-center fw-bold mt-3 " ${
              nav === "live" ? "job-histry-active" : ""
            }
           `}
          >
            Live job
          </h4>
        </div>
        <JobCard type={nav} jobs={jobs} />
      </div>
    </div>
  );
};
export default JobHistoryCom;
