import React from "react";
import "./TradePerson.css";
import TradePersonCard from "./TradePersonCard";
import { useNavigate } from "react-router-dom";
const TradePersonCom = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container ">
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Back
        </button>
        {data.map((data, key) => {
          return (
            <>
              <h4 className="mb-0 mt-3 fw-bold mx-0 px-0">{data?.topic}</h4>
              <div className="row row-cols-lg-3  row-cols-md-2 row cols-sm-1">
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
