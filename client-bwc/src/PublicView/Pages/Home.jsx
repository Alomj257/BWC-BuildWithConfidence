import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TradePersonList from "./TradePersonList";

const Home = () => {
  const [tradePersons, setTradePersons] = useState([]);


  return (
    <>
      <div className="d-flex my-4 gap-5">
        <Link to="/consumer" className="btn btn-primary">
          Consumer
        </Link>
        <Link to="/tradeperson" className="btn btn-primary">
          Tradeperson
        </Link>
        <Link to="/admin" className="btn btn-primary">
          Admin
        </Link>
      </div>

      {/* For testing purpose */}
      {/* <TradePersonList tradePersons={tradePersons} /> */}
    </>
  );
};

export default Home;
