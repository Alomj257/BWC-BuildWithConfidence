import React from "react";

import "./PostJob.css";
import img from "../../../../assests/profile/P1.png";
const ReviewJobPost = ({ data }) => {
  return (
    <div className="col-md-11 mx-auto px-0 review ">
      <div className="d-flex justify-content-between ">
        <h2 className="fw-bold text-capitalize">
          {data?.headline || "Installing new carpet tiles"}{" "}
        </h2>
        <div>
          <span className="fw-bold fs-4 text-capitalize">
            {data?.location || "address,city, UK"}{" "}
          </span>{" "}
          <span className="fs-2 ">
            <i className="bx bxs-map"></i>
          </span>
          <span className="text-warning fs-2">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star-half"></i>
            <i className="bx bx-star"></i>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="file-upload-container">
            <label htmlFor="file-upload" className="file-upload-label">
              Upload a photo of the existing condition
              <input
                type="file"
                id="file-upload"
                className="file-upload-input"
              />
            </label>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="px-3 col-3 fw-bold mb-4 post-1">Type of work</div>
            <div className="col-9 px-3 ">
              <div className="post-1 w-100">
                {" "}
                {data?.work?.map((d) => (d || "Flooring") + ",")}
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="px-3 col-3 fw-bold mb-4 post-1">Bidget</div>
            <div className="col-9 px-3 ">
              <div className="post-1 w-100"> € {data?.budget || "12,124"}</div>
            </div>
          </div>
          <div className="row ">
            <div className="px-3 col-3 fw-bold mb-4 post-1">Start Date</div>
            <div className="col-9 px-3 ">
              <div className="post-1 w-100">
                {data?.start
                  ? data?.start?.time +
                    "/" +
                    data?.start?.day +
                    "/" +
                    data?.start?.week
                  : "ASAP"}
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="px-3 col-3 fw-bold mb-4 post-1">Completion</div>
            <div className="col-9 px-3 ">
              <div className="post-1 w-100">
                {data?.completion
                  ? data?.completion?.time +
                    "/" +
                    data?.completion?.day +
                    "/" +
                    data?.completion?.week
                  : "ASAP"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        {" "}
        <button className="btn post-now-btn ">
          <span className="fw-bold">Post Now</span>{" "}
          <span className="icon">
            <i className="bx bxs-chevrons-right mt-1"></i>
          </span>
        </button>
      </div>
      <div>
        <h4 className="fw-bold my-2">Description</h4>
        <p>
          {data?.desc ||
            "     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nemo consequatur, aperiam eaque animi illum explicabo quas commodi neque,quam ab. Autem quo, necessitatibus soluta ullam vero magni aut exercitationem repellendus."}
        </p>
      </div>
      <div>
        <h4 className="fw-bold my-2">Condition of exsiting</h4>
        <div className="d-flex gap-4">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewJobPost;
