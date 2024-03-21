import React, { useEffect, useState } from "react";
import useFetch from "../../../../Hooks/useFetch";
import TradePersonCard from "../../../../Consumer/components/Tradepaerson/TradePersonCard";

const Popular = () => {
  const { data } = useFetch("/auth/users/by/TRADEPERSON");
  const [tradeperson, setTradePerson] = useState([]);
  useEffect(() => {
    setTradePerson(data);
  }, [data]);
  return (
    <div className="container my-5">
      <h3 className="fw-bold">POPULAR TRADESPEOPLE</h3>
      <div className="row row-cols-lg-3 w-100  row-cols-md-2 cols-sm-1">
        {tradeperson?.map((trade, key) => (
          <>{key < 3 && <TradePersonCard trade={trade} />}</>
        ))}
      </div>
      <h3 className="fw-bold my-3">BROWSE BY TRADE </h3>
      <div className="d-flex justify-content-between col-md-8 me-auto my-3">
        {brData?.map((d, key) => (
          <div key={key} className="d-flex flex-column">
            <div className="rounded-circle m-auto bg-dark">
              <div className="p-4 text-warning">{d.icons}</div>
            </div>
            <div> {d?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;

const brData = [
  { name: "Bathroom installation", icons: "text" },
  { name: "Decoration", icons: "text" },
  { name: "Flooring", icons: "text" },
  { name: "Plumbing", icons: "text" },
  { name: "Cleaning", icons: "text" },
  { name: "Joinery", icons: "text" },
];
