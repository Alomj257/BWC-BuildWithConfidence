import React, { useState } from "react";
import "./OurServices.css";
const OurServices = () => {
  const [active, setActive] = useState(null);
  const [step, setStep] = useState(0);
  const steps = ["source", "build", "payment", "project"];
  const handleSet = (val) => {
    setStep(steps.findIndex((v) => v === val));
    setActive(data[step]);
  };
  return (
    <div className="our-services bg-info text-white">
      <div className="container my-3 pt-3">
        <h1 className="text-center">Our Service</h1>
        <div className="w-100 row">
          <div className="col-md-4">
            <img
              src="/images/Home/ourService1.png"
              className="w-100 h-100 p-2 bg-light rounded"
              alt=""
            />
          </div>
          <div className="col-md-8 d-flex">
            <div className="my-auto fs-5">{active?.desc}</div>
          </div>
        </div>
        <div className="d-flex justify-content-between container text-uppercase border-bottom border-4 my-3">
          <div
            className={`p-3 fw-bold fs-5 + ${step === 0 ? " text-dark" : ""}`}
            onClick={() => handleSet("source")}
          >
            sourcing tradespeople
          </div>
          <div
            className={`p-3 fw-bold fs-5 + ${step === 1 ? " text-dark" : ""}`}
            onClick={() => handleSet("build")}
          >
            build a digital contract{" "}
          </div>
          <div
            className={`p-3 fw-bold fs-5 + ${step === 2 ? " text-dark" : ""}`}
            onClick={() => handleSet("payment")}
          >
            payment protection services
          </div>
          <div
            className={`p-3 fw-bold fs-5 + ${step === 3 ? " text-dark" : ""}`}
            onClick={() => handleSet("project")}
          >
            STREAMLINED PROJECT MANAGEMENT
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="col-md-3 text-uppercase">
            <div>
              <h3>{active?.title}</h3>
            </div>
          </div>
          <div className="col-md-9 my-4">
            <div className="d-flex">
              <div className="w-100 my-auto">
                <hr className="fs-1" />
              </div>
              <div className="my-auto fs-1"> +</div>
            </div>
            <button className="btn bg-white rounded-5 px-3 fw-bold text-uppercase">
              LET’S GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

const data = [
  {
    title: "sourcing tradespeople",
    desc: (
      <>
        <li>
          Begin by posting your project requirements on BWC. Provide details
          such as project scope, timeline, and budget.
        </li>
        <li>
          Finding skilled and trustworthy tradespeople can be a daunting task
          for consumers, especially in areas with high demand and limited
          availability.
        </li>
        <li>
          {" "}
          Reach out to tradespeople directly through our platform to discuss
          your project requirements further. Ask questions, negotiate terms, and
          clarify any concerns before making your decision.
        </li>
      </>
    ),
  },
  {
    title: "BUILD A DIGITAL CONTRACT",
    desc: (
      <>
        <li>
          Use our intuitive digital contract creation tool to draft customized
          agreements tailored to your project specifications.
        </li>
        <li>
          Define payment schedules, project milestones, scope of work, and other
          terms with ease. Our platform allows for flexible customization to
          suit your specific needs.
        </li>
        <li>
          Review the drafted contract and make any necessary revisions. Once
          finalized, both parties can digitally sign the agreement, ensuring
          mutual consent and legal compliance.
        </li>
      </>
    ),
  },
  {
    title: "payment protection services",
    desc: (
      <>
        <li>
          Utilize our FCA regulated escrow service to safeguard your payments
          throughout the project lifecycle. Funds are held securely until
          specified conditions are met, protecting both parties from potential
          disputes.
        </li>
        <li>
          Track payment milestones and project progress in real-time through our
          platform. Ensure transparency and accountability throughout the
          payment process
        </li>
        <li>
          In the rare event of a dispute, our dedicated support team is
          available to facilitate resolution. We prioritize fair and amicable
          resolutions to ensure the satisfaction of all parties involved.
        </li>
      </>
    ),
  },
  {
    title: "steamlined project  management",
    desc: (
      <>
        Utilize our FCA regulated escrow service to safeguard your payments
        throughout the project lifecycle. Funds are held securely until
        specified conditions are met, protecting both parties from potential
        disputes. Track payment milestones and project progress in real-time
        through our platform. Ensure transparency and accountability throughout
        the payment process In the rare event of a dispute, our dedicated
        support team is available to facilitate resolution. We prioritize fair
        and amicable resolutions to ensure the satisfaction of all parties
        involved.
      </>
    ),
  },
];
