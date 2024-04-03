import React from "react";
import "./PostJobHome.css";
import backgroundImage from "../../../../../assests/banner/b.png";
import { useNavigate } from "react-router-dom";
import PostedList from "../../PostedList/PostedList";
const PostJobHome = () => {
  const navigate = useNavigate();
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
      <PostedList />
    </>
  );
};

export default PostJobHome;
