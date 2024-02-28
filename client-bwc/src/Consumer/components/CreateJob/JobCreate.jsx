import React, { useState } from "react";
import "./CreateJob.css";
const JobCreate = () => {
  const [digital, setDigital] = useState("digital");
  const [client, setClient] = useState({
    institute: "",
    individual: "",
    address: "",
  });
  const [contractor, setContractor] = useState({
    institute: "",
    individual: "",
    address: "",
    companyNo: "",
  });
  const [procurement, setProcurement] = useState([]);
  const [work, setWork] = useState("");
  const [specification, setSpecs] = useState();
  const [ArchitectDrawing, setArdrawing] = useState();
  const [measurements, setMeasures] = useState();

  const [survayPhoto, setPhoto] = useState("");
  const [requiredToAccess, setAccess] = useState("");
  const [SurveyConditionDate, setSurveyConditionDate] = useState(
    new Date().toLocaleDateString()
  );
  console.log(survayPhoto);

  const handleProcurement = (value) => {
    if (procurement.includes(value)) {
      setProcurement(procurement.filter((item) => item !== value));
    } else {
      setProcurement([...procurement, value]);
    }
  };
  return (
    <div>
      <h2 className="my-2 fw-bold text-center mt-5">Job Create</h2>

      {/* field */}
      <div className="row row-cols-md-2 w-100">
        <div className="my-auto">
          Will you be using our digital contract service or upload your
          contract?
        </div>
        <div className="row row-cols-md-2 ">
          <div className="p-2 text-center ">
            <div
              className={`${
                digital === "digital" ? "create-job-active" : ""
              } p-2 w-100 fw-bold job-create-field rounded`}
              onClick={() => setDigital("digital")}
            >
              Digital Service
            </div>
          </div>
          <div className="p-2 text-center">
            <div
              className={`${
                digital === "premade" ? "create-job-active" : ""
              } p-2 w-100 fw-bold job-create-field rounded`}
              onClick={() => setDigital("premade")}
            >
              Upload Premade
            </div>
          </div>
        </div>
      </div>
      {digital === "digital" && (
        <div>
          <h4 className="fw-bold my-4">AGREEMENT</h4>
          <hr />
          <div className="row row-cols-md-2 w-100">
            <div className="my-auto">Today's date</div>
            <div>
              <div className="p-2 w-100 fw-bold job-create-field rounded">
                {new Date().getDate()}-{new Date().getMonth()}-
                {new Date().getFullYear()}
              </div>
            </div>
          </div>
          {/* client */}
          <hr />
          <div className="row row-cols-md-2 mt-3 w-100">
            <div className="my-auto">Client</div>
            <div>
              <div className="d-flex justify-content-between">
                <label htmlFor="" className="my-auto fw-bold">
                  Institution
                </label>
                <div className="p-2 fw-bold job-create-field col-9 rounded my-2">
                  <input
                    type="text"
                    onChange={(e) =>
                      setClient({ ...client, institute: e.target.value })
                    }
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="UK limited company"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <label htmlFor="" className="my-auto fw-bold">
                  Individual
                </label>
                <div className="p-2 fw-bold job-create-field col-9 rounded my-2">
                  <input
                    type="text"
                    onChange={(e) =>
                      setClient({ ...client, individual: e.target.value })
                    }
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="John Smith"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <label htmlFor="" className="my-auto fw-bold">
                  Address
                </label>
                <div className="p-2 fw-bold job-create-field col-9 rounded my-2">
                  <input
                    type="text"
                    onChange={(e) =>
                      setClient({ ...client, address: e.target.value })
                    }
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="5 Birch Road, London, L13 7HG"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Contractor */}
          <hr />
          <div className="row row-cols-md-2 mt-3 w-100">
            <div className="my-auto">Contractor</div>
            <div>
              <div className="d-flex justify-content-between">
                <label htmlFor="" className="my-auto fw-bold">
                  Institution
                </label>
                <div className="p-2  fw-bold job-create-field col-9 rounded my-2">
                  <input
                    onChange={(e) =>
                      setContractor({
                        ...contractor,
                        institute: e.target.value,
                      })
                    }
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="UK limited company"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <label htmlFor="" className="my-auto fw-bold">
                  Individual
                </label>
                <div className="p-2 fw-bold job-create-field col-9 rounded my-2">
                  <input
                    onChange={(e) =>
                      setContractor({
                        ...contractor,
                        individual: e.target.value,
                      })
                    }
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="John Smith"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <label htmlFor="" className="my-auto fw-bold">
                  Address
                </label>
                <div className="p-2 fw-bold job-create-field col-9 rounded my-2">
                  <input
                    onChange={(e) =>
                      setContractor({ ...contractor, address: e.target.value })
                    }
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="5 Birch Road, London, L13 7HG"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <label htmlFor="" className="my-auto fw-bold">
                  Company number
                </label>
                <div className="p-2 fw-bold job-create-field col-9 rounded my-2">
                  <input
                    onChange={(e) =>
                      setContractor({
                        ...contractor,
                        companyNo: e.target.value,
                      })
                    }
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="190202002"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Procurement  */}
          <div>
            <div className="row w-100">
              <div className="col-2">
                <div>Procurement </div>
              </div>
              <div className="col-10 row  row-cols-md-5">
                <div className="p-2 text-center">
                  <div
                    onClick={() => handleProcurement("Supply and Installation")}
                    className={`${
                      procurement.includes("Supply and Installation")
                        ? "create-job-active"
                        : ""
                    } p-2 w-100 fw-bold job-create-field col-9 rounded`}
                  >
                    Supply and Installation
                  </div>
                </div>
                <div className="p-2 text-center">
                  <div
                    onClick={() => handleProcurement("Installation")}
                    className={`${
                      procurement.includes("Installation")
                        ? "create-job-active"
                        : ""
                    } p-2 w-100 fw-bold job-create-field rounded`}
                  >
                    Installation
                  </div>
                </div>
                <div className="p-2 text-center">
                  <div
                    onClick={() => handleProcurement("Design & Build")}
                    className={`${
                      procurement.includes("Design & Build")
                        ? "create-job-active"
                        : ""
                    } p-2 w-100 fw-bold job-create-field rounded`}
                  >
                    Design & Build
                  </div>
                </div>
                <div className="p-2 text-center">
                  <div
                    onClick={() => handleProcurement("Designer")}
                    className={`${
                      procurement.includes("Designer")
                        ? "create-job-active"
                        : ""
                    } p-2 w-100 fw-bold job-create-field rounded`}
                  >
                    Designer
                  </div>
                </div>
                <div className="p-2 text-center">
                  <div
                    onClick={() => handleProcurement("Option feature")}
                    className={`${
                      procurement.includes("Option feature")
                        ? "create-job-active"
                        : ""
                    } p-2 w-100 fw-bold job-create-field rounded`}
                  >
                    Option feature
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* scope */}
          <div>
            <div>
              <div className="row w-100 row-cols-md-2">
                <div>Scope of work</div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    <input
                      value={work}
                      onChange={(e) => setWork(e.target.value)}
                      type="text"
                      className="w-100 bg-transparent border-0"
                      style={{ outline: "none" }}
                      placeholder=" Install new kitchen
                "
                    />
                  </div>
                </div>
              </div>
              <div className="row w-100 row-cols-md-2">
                <div>Specification</div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    <input
                      value={specification}
                      onChange={(e) => setSpecs(e.target.value)}
                      type="text"
                      className="w-100 bg-transparent border-0"
                      style={{ outline: "none" }}
                      placeholder="IKEA Wood kitchen
                "
                    />
                  </div>
                </div>
              </div>
              <div className="row w-100 row-cols-md-2">
                <div>Architect Drawings</div>
                <div className="row row-cols-md-2">
                  <div className="p-2  text-center">
                    <div
                      onClick={() => setArdrawing("yes")}
                      className={`${
                        ArchitectDrawing === "yes" ? "create-job-active" : ""
                      } p-2 w-100 fw-bold job-create-field rounded`}
                    >
                      Yes
                    </div>
                  </div>
                  <div className="p-2  text-center">
                    <div
                      onClick={() => setArdrawing("no")}
                      className={`${
                        ArchitectDrawing === "no" ? "create-job-active" : ""
                      } p-2 w-100 fw-bold job-create-field rounded`}
                    >
                      No
                    </div>
                  </div>
                </div>
              </div>
              <div className="row w-100 row-cols-md-2">
                <div>Measurements / Quantities</div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    <input
                      value={measurements}
                      onChange={(e) => setMeasures(e.target.value)}
                      type="text"
                      className="w-100 bg-transparent border-0"
                      style={{ outline: "none" }}
                      placeholder="kitchen 1.25m^2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* precondition */}
          <div>
            <div className="row w-100 row-cols-md-2">
              <div>Precondition Survey Photo</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder=" 5% of contract sum"
                  />
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Site visit required to assess the condition?</div>
              <div className="row row-cols-md-2">
                <div className="p-2  text-center">
                  <div
                    onClick={() => setAccess("yes")}
                    className={`${
                      requiredToAccess === "yes" ? "create-job-active" : ""
                    } p-2 w-100 fw-bold job-create-field rounded`}
                  >
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div
                    onClick={() => setAccess("no")}
                    className={`${
                      requiredToAccess === "no" ? "create-job-active" : ""
                    } p-2 w-100 fw-bold job-create-field rounded`}
                  >
                    No
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Date of condition survey</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    value={SurveyConditionDate}
                    onChange={(e) => setSurveyConditionDate(e.target.value)}
                    type="date"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="4 weeks"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* work commencement */}
          <div>
            <div className="row w-100 row-cols-md-2">
              <div>Work commencement date</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder=" 27th Feb 2024"
                  />
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Date for completion</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder=" 27th Feb 2024"
                  />
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div> Site Access</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder=" Knock on the door upon arrival"
                  />
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Any potential site restrictions?</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="  Will have to use the back entrance"
                  />
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Working hours</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder=" 9am - 5pm Normal working hours"
                  />
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Liquidated damage</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder=" £200 per week"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Retenteion */}
          <div>
            <div className="row w-100 row-cols-md-2">
              <div>Retention</div>
              <div className="row row-cols-md-2">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    No
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Retention</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder=" 5% of contract sum"
                  />
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Defects Liability Period</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="4 weeks"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Payment */}
          <div>
            <div className="row w-100 row-cols-md-2">
              <div>Retention</div>
              <div className="row row-cols-md-2">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Payment milestones
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Milestone Payments
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Has both parties agreed for an advance payment?</div>
              <div className="row row-cols-md-2">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    No
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>How much will the advance payment be?</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="£10,000"
                  />
                </div>
              </div>
            </div>

            <div className="row w-100 row-cols-md-2">
              <div>Will you be using our payment protection service?</div>
              <div className="row row-cols-md-2">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    No
                  </div>
                </div>
              </div>
            </div>

            <div className="row w-100 row-cols-md-2">
              <div>
                Does both parties agree to the terms of the payment protection
                service?
              </div>
              <div className="row row-cols-md-2">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    No
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>PPS service fee 1%</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="£10,000"
                  />
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>Digital service</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="£5,000"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="row w-100 row-cols-md-2">
              <div>
                Does both parties agree to the terms of the payment protection
                service?
              </div>
              <div className="row row-cols-md-2">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    No
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100 row-cols-md-2">
              <div>
                Does both parties agree to the terms of the payment protection
                service?
              </div>
              <div className="row row-cols-md-2">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    No
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row w-100 row-cols-md-2">
            <div>Can either party end contract early?</div>
            <div className="row row-cols-md-2">
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  Yes
                </div>
              </div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  No
                </div>
              </div>
            </div>
          </div>
          {/* attention */}
          <hr />
          <div>
            <h4 className="fw-bold">Attestation / Signatures</h4>

            <div className="row row-cols-md-2 w-100">
              <div> Company Name</div>
              <div className="row-cols-md-2 row">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    No
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-md-2 w-100">
              <div> Client Name</div>
              <div className="row-cols-md-2 row">
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    Yes
                  </div>
                </div>
                <div className="p-2  text-center">
                  <div className="p-2 w-100 fw-bold job-create-field rounded">
                    No
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-md-2 w-100">
              <div> Signature</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  Yes
                </div>
              </div>
              <div> Date</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="date"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="£10,000"
                  />
                </div>
              </div>
            </div>

            <hr />
            <div className="row row-cols-md-2 w-100">
              <div> Company Name</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
            <div className="row row-cols-md-2 w-100">
              <div> Contractor Name</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="text"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="contractor"
                  />
                </div>
              </div>
              <div> Signature</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="date"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="£10,000"
                  />
                </div>
              </div>
              <div> Date</div>
              <div className="p-2  text-center">
                <div className="p-2 w-100 fw-bold job-create-field rounded">
                  <input
                    type="date"
                    className="w-100 bg-transparent border-0"
                    style={{ outline: "none" }}
                    placeholder="£10,000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center my-5">
        <button className="btn job-create-btn">Create Deals</button>
      </div>
    </div>
  );
};

export default JobCreate;
