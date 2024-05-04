import React from "react";

const ContractDetails = ({ contract }) => {
  return (
    <>
      {/* <div className="bg-dark-blue p-4 rounded"></div> */}
      <div className="text-dark fw-normal col-11 d-flex flex-column gap-4 mx-auto">
        <h2 className="text-center fw-bold">Contract</h2>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="w-100 d-flex flex-column gap-3">
            <h4 className="fw-bold">Client</h4>
            <div className="d-flex gap-2">
              <span className="fw-semibold">Institution</span>:
              <span>intsti</span>
            </div>
            <div className="d-flex gap-2">
              <span className="fw-semibold">Individual</span>:
              <span>intsti</span>
            </div>
            <div className="d-flex gap-2">
              <span className="fw-semibold">Address</span>:<span>intsti</span>
            </div>
          </div>
          <div className="w-100">
            <h4 className="fw-bold">Contractor</h4>
            <div className="d-flex gap-2">
              <span className="fw-semibold">Institution</span>:
              <span>intsti</span>
            </div>
            <div className="d-flex gap-2">
              <span className="fw-semibold">Individual</span>:
              <span>intsti</span>
            </div>
            <div className="d-flex gap-2">
              <span className="fw-semibold">Address</span>:<span>intsti</span>
            </div>
            <div className="d-flex gap-2">
              <span className="fw-semibold">Company number</span>:
              <span>value</span>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h4 className="fw-bold text-center">Constract Sum</h4>
          <div className="d-flex jusity-content-between flex-column">
            <div className="d-flex justify-content-between w-100  fw-bold">
              <span className="">Name</span>
              <span className="">Quantity</span>
              <span className="">Rate</span>
              <span className=""> Total</span>
            </div>
            {contract?.constractSum?.map((item, index) => {
              const keys = Object.keys(item);
              return (
                <>
                  {keys?.map(
                    (val) =>
                      val !== "_id" && (
                        <div className="d-flex justify-content-between  w-100 px-5 ">
                          <span className=" fw-semibold">{val}</span>
                          <div className="text-center">{item[val]?.qty}</div>
                          <span className="">${item[val]?.rate}</span>
                          <span className=""> ${item[val]?.total}</span>
                        </div>
                      )
                  )}
                </>
              );
            })}
          </div>
        </div>
        <hr />
        <div>
          <h4 className="fw-bold">Procurement</h4>
          <div className="d-flex gap-2">
            {contract?.procurement?.map((item) => (
              <span className="p-2 px-3 bg-secondary rounded text-white">
                {item}
              </span>
            ))}
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column gap-3">
          <h4 className="fw-bold text-center">Other Details</h4>{" "}
          <div className="d-flex gap-3 ">
            <span className="fw-semibold">Scope of work</span>:
            <span>{contract?.scopeOfWork}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Architect Drawings</span>:
            <span>{contract?.ArchitectDrawing}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Specification</span>:
            <span>{contract?.Specification}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Measurements / Quantities</span>:
            <span>{contract?.measurements}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">
              Site visit required to assess the condition?
            </span>
            :<span>{contract?.requiredToAccess ? "Yes" : "No"}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Date of condition survey</span>:
            <span>{contract?.DateOfConditionSurvey}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Work commencement date</span>:
            <span>{contract?.DateOfConditionSurvey}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Site Access</span>:
            <span>{contract?.siteAccess}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">
              Any potential site restrictions?
            </span>
            :<span>{contract?.siteRestrictions}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Working hours</span>:
            <span>{contract?.workingHours}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Liquidated damage</span>:
            <span>{contract?.LiquidatedDamage}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Retention</span>:
            <span>{contract?.isRetention ? "Yes" : "No"}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Retention</span>:
            <span>{contract?.retention}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Defects Liability Period</span>:
            <span>{contract?.defectsLiabilityPeriod}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Payment milestones</span>:
            <span>{contract?.isMilesone ? "Milestone" : "Fixed"}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">
              Has both parties agreed for an advance payment?
            </span>
            :<span>{contract?.bothPayment ? "Yes" : "No"}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">
              How much will the advance payment be?
            </span>
            :<span>{contract?.advancePayment}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">
              Will you be using our payment protection service?
            </span>
            :<span>{contract?.isProtection}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">
              Does both parties agree to the terms of the payment protection
              service?
            </span>
            :<span>{contract?.isBothAgree}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">PPS service fee 1%</span>:
            <span>{contract?.PPSService}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">Digital service</span>:
            <span>{contract?.digitalService}</span>
          </div>
          <div className="d-flex gap-3">
            <span className="fw-semibold">
              Can either party end contract early?
            </span>
            :<span>{contract?.partyContact}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractDetails;
