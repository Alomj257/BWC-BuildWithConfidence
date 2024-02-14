import React from "react";
import Graph from "../../../Utils/Graph";
import Budget from "../../../Utils/Budget";
import Progress from "../../../Utils/Progress";
import "./Financial.css";
const Finanacial = () => {
  return (
    <div className="financial justify-content-between">
      <div className="graph">
        <h3>Budget</h3>
        <Budget data={50} />
        <h3>$2,100</h3>
      </div>
      <div className="graph">
        <h3>Paid</h3>
        <Graph data={40} type="radialBar" angle={90} />
        <h3>$1,500</h3>
      </div>
      <div className="graph">
        <h3>In Progress</h3>
        <Progress data={[20, 120, 130]} xAxis={[1, 2, 3]} />
        <h3>$600</h3>
      </div>
    </div>
  );
};

export default Finanacial;
