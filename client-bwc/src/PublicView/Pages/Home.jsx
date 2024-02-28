import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex my-4 gap-5">
      <Link to="/consumer" className="btn btn-primary">
        consumer
      </Link>
      <Link to="/tradeperson" className="btn btn-primary">
        Tradeperson
      </Link>
      <Link to="/admin" className="btn btn-primary">
        Admin
      </Link>
    </div>
  );
};

export default Home;
