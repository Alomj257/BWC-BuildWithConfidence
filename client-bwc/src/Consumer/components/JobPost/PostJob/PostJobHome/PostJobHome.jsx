import React, { useEffect, useState } from "react";
import "./PostJobHome.css";
import backgroundImage from "../../../../../assests/banner/b.png";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../../Hooks/useFetch";
import { useAuth } from "../../../../../context/AuthContext";
import JobComCard from "../../../../../Tradeperson/Components/JobCom/JobComCard";
const PostJobHome = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  // console.log(`/consumer/jobposts/jobposts/posted/${auth?.user?._id}`);
  const { data } = useFetch(
    `/consumer/jobposts/jobposts/posted/${auth?.user?._id}`
  );
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, [data]);
  return (
    <>
      <div className="d-flex">
        <div className="outlet">
          <div className="dashboard-heading mb-5">
            <h2>
              Welcome to BWC ecosystem!{" "}
              <span style={{ color: "gold" }}>
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </h2>
          </div>
          <div
            className="dashboard-banner"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="banner-text">
              <h3>Let's create your first job.</h3>
              <p>Click 'tradeperson' to access our vetted tradeperson nearby</p>
              <p>Click 'start now' if you already choosen a tradeperson</p>
              <button
                className="banner-button tradeperson"
                onClick={() => navigate("/consumer/post-job/post")}
              >
                Start now
              </button>
              {/* <button className="banner-button start-now">Start Now</button> */}
            </div>
          </div>
        </div>
      </div>
      {Array.isArray(jobs)
        ? jobs?.map((job, key) => (
            <>
              <JobComCard job={job} key={key} />
              {key < jobs.length && <hr />}
            </>
          ))
        : ""}
    </>
  );
};

export default PostJobHome;
