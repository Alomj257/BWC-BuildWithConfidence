import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import useFetch from "../../../Hooks/useFetch";
import ConsumerJobCard from "./ConsumerJobCard";

const JobHistoryCOm = () => {
  const [auth] = useAuth();
  const [acceptedJob, setAcceptedJobs] = useState([]);
  const [nav, setnav] = useState("post");
  const { data } = useFetch(
    `/consumer/jobposts/jobposts/posted/${auth?.user?._id}`
  );
  const accepted = useFetch(`/task/accept/${auth?.user?._id}`);
  const liveJob = useFetch(`/task/live-jobs/${auth?.user?._id}`);
  const [jobs, setJobs] = useState([]);
  const [liveJobs, setLiveJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, [data]);
  useEffect(() => {
    setAcceptedJobs(accepted?.data);
  }, [accepted?.data]);
  useEffect(() => {
    setLiveJobs(liveJob?.data);
  }, [liveJob?.data]);
  const handleNav = (na) => {
    setnav(na);
  };

  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-between px-5 mx-2">
          <h4
            onClick={() => handleNav("post")}
            className={`text-center fw-bold mt-3  ${
              nav === "post" ? "job-histry-active" : ""
            }
           `}
          >
            Job Post
          </h4>
          <h4
            onClick={() => handleNav("pre")}
            className={`text-center fw-bold mt-3 " ${
              nav === "pre" ? "job-histry-active" : ""
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
        {nav === "post" && <ConsumerJobCard type="post" jobs={jobs} />}
        {nav === "pre" && <ConsumerJobCard type="pre" jobs={acceptedJob} />}
        {nav === "live" && <ConsumerJobCard type="live" jobs={liveJobs} />}
      </div>
    </div>
  );
};

export default JobHistoryCOm;
