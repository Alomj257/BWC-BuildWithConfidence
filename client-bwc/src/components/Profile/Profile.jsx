import React from "react";
import "./Profile.css";
import img from "../../assests/profile/P1.png";
const Profile = () => {
  return (
    <div className="container mx-0">
      <div className="row w-100">
        <div className="col-4">
          <div className="col-8 mx-auto">
            <img
              src={img}
              alt=" profile pic"
              className="w-100 rounded-circle"
            />
          </div>
          <h4 className="fw-bold">About Me</h4>
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold">John Smith</h4>{" "}
            <div className="d-flex">
              <i className="bx bx-map fs-5 "></i>
              <span>London, UK</span>
            </div>
            <div>
              <i className="bx bxs-star fs-4 text-warning"></i>
              <i className="bx bxs-star fs-4 text-warning"></i>
              <i className="bx bxs-star fs-4 text-warning"></i>
              <i className="bx bxs-star fs-4 text-warning"></i>
              <i className="bx bxs-star-half fs-4 text-warning"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-4 px-3">
              <div className="bg-light my-3 py-2 rounded text-center fw-bold">
                Trade
              </div>
              <div className="bg-light my-3 py-2 rounded text-center fw-bold">
                Experience
              </div>
              <div className="bg-light my-3 py-2 rounded text-center fw-bold">
                Quealification
              </div>
            </div>
            <div className="col-8">
              <div className="my-3 text-center py-2 rounded bg-light">
                Electrician
              </div>
              <div className="my-3 text-center py-2 rounded bg-light">
                5 Years
              </div>
              <div className="my-3 text-center py-2 rounded bg-light">
                Level 3 ETC
              </div>
              <div>
                <button className="broder-0 text-white fs-6 p-1 ps-3 fw-bold rounded-5 profile-btn">
                  Book Now{" "}
                  <span>
                    <i className="bx bx-chevrons-right  bg-white rounded-circle text-dark p-2" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light profile-about"></div>
      <div className="portfolio my-3 col-12">
        <h4 className="fw-bold mt-3">Portfolio</h4>
        <div className="row w-100 gap-4 flex-nowrap">
          <div className="col-3">
            <img src={img} alt="profile" />
          </div>
          <div className="col-3">
            <img src={img} alt="profile" />
          </div>
          <div className="col-3">
            <img src={img} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
