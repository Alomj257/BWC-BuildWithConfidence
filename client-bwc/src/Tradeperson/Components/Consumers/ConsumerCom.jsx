import React from "react";
import "./TradePerson.css";
import TradePersonCard from "./ConsumerCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Consumer/components/Nav/Navbar";
const ConsumerCom = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-4">
        <Navbar liName="Consumers" />
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

              <div className="row row-cols-lg-3 w-100  row-cols-md-2 cols-sm-1">
                {data.tradesperson?.map((trade, key) => (
                  <TradePersonCard trade={trade} />
                ))}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ConsumerCom;

const data = [
  {
    topic: "Papular Consumer Nearby",
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
