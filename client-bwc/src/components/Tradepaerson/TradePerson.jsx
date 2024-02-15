import React from "react";
import "./TradePerson.css";
import TradePersonCard from "./TradePersonCard";
import { useNavigate } from "react-router-dom";
import Modal from "../../Utils/Modal/Modal";
import Profile from "../Profile/Profile";
import Navbar from "../Nav/Navbar";
const TradePersonCom = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-4">
        <Navbar liName="tradeperson" />
      </div>
      <div className="container mt-4 ">
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Back
        </button>
        {data.map((data, key) => {
          return (
            <>
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="mb-0 mt-3 fw-bold mx-0 px-0">{data?.topic}</h4>
                </div>
                {key === 0 && (
                  <>
                    <div>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control border"
                      />
                    </div>
                    <div>
                      <i className="bx bx-filter fs-3 me-4"></i>
                    </div>
                  </>
                )}
              </div>

              <div className="row row-cols-lg-3  row-cols-md-2 row cols-sm-1">
                {data.tradesperson?.map((trade, key) => (
                  <Modal
                    btnClasss="border-0 bg-white"
                    bodyClass="bg-white"
                    closeIcon="fs-1"
                    btnText={<TradePersonCard trade={trade} />}
                  >
                    <Profile />
                  </Modal>
                ))}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TradePersonCom;

const data = [
  {
    topic: "Papular Tradesperson Nearby",
    tradesperson: [
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
    ],
  },
  {
    topic: "Electrolans Nearby",
    tradesperson: [
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
    ],
  },
  {
    topic: "Plumbers  Nearby",
    tradesperson: [
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
      {
        img: "",
        name: "John smith",
        exp: "5 year exprience as a salesforce",
        location: "2.2",
      },
    ],
  },
];
