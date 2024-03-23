import React from "react";

const Address = () => {
  return (
    <div className="my-4 container">
      <h5 className="fw-bold">Addressing These Concerns:</h5>
      <div className="row">
        {" "}
        <div className="col-md-8 my-auto">
          <li className="my-2">
            {" "}
            Enhancing transparency through clear communication, detailed cost
            estimates, and project timelines.
          </li>
          <li className="my-2">
            Implementing quality assurance measures, such as certifications,
            inspections, and warranties, to ensure the integrity of building
            projects.
          </li>
          <li className="my-2">
            Providing centralized platforms for consumers to access verified
            tradespeople, reviews, and ratings.
          </li>
          <li className="my-2">
            Facilitating the creation of clear and comprehensive contracts that
            outline expectations, responsibilities, and dispute resolution
            mechanisms.
          </li>
          <li className="my-2">
            Implementing secure payment systems and regulatory safeguards to
            protect consumers from fraud and financial risks.
          </li>
          <li className="my-2">
            Advocating for industry-wide regulation and standards to promote
            professionalism, accountability, and consumer protection.
          </li>
        </div>
        <div className="col-md-4 d-flex">
          <div className="m-auto">
            <img
              className="w-100 h-100"
              src="/images/about/magicpattern-blob-1711135170943.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
