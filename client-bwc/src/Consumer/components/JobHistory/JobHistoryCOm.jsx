import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import useFetch from "../../../Hooks/useFetch";
import ConsumerJobCard from "./ConsumerJobCard";

const JobHistoryCOm = () => {
  const [auth] = useAuth();
  const [acceptedJob, setAcceptedJobs] = useState([]);
  const { data } = useFetch(
    `/consumer/jobposts/jobposts/posted/${auth?.user?._id}`
  );
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, [data]);
  const accepted = useFetch(`/task/accept/${auth?.user?._id}`);
  useEffect(() => {
    setAcceptedJobs(accepted?.data);
  }, [accepted?.data]);

  return (
    <div className="container">
      <div>
        <h4 className="text-center fw-bold mt-3">Job Post</h4>
        <ConsumerJobCard type="post" jobs={jobs} />
      </div>
      <div>
        <h4 className="text-center fw-bold mt-3"> Pre Contract</h4>
        <ConsumerJobCard type="pre" jobs={acceptedJob} />
      </div>
      <div>
        <h4 className="text-center fw-bold mt-3">Post Contract</h4>
        <ConsumerJobCard type="live" jobs={jobs} />
      </div>
    </div>
  );
};

export default JobHistoryCOm;
