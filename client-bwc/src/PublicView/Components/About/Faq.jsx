import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Faq = () => {
  return (
    <div className="bg-info">
      <div className="container py-5">
        <div className="d-flex justify-content-between my-5">
          <div className="d-flex flex-column text-white">
            <h3 className="fw-bold">Frequently Asked Questions</h3>
            <div>
              <p>
                Got more questions? Feel free to contact us for more
                information.
              </p>
            </div>

            <div className="mt-auto">
              <button className="btn bg-white fw-bold d-flex rounded-5 py-1">
                <span className="my-auto"> Contact Us</span>
                <span className="ms-2 bg-dark rounded-circle p-2 text-white m-auto">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="m-auto d-flex flex-column">
            <button className="btn bg-white my-3 p-2 fw-bold px-5">
              Consumer
            </button>
            <button className="btn bg-white my-3 p-2 fw-bold px-5">
              Tradesperson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
