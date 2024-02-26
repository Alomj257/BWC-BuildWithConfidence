import React from "react";
import "./TradepersoneTable.css";
const TradepersoneTable = () => {
  const data = [
    [
      "John",
      "Doe",
      "john.doe@example.com",
      "New York",
      "USA",
      "50%",
      "1230",
      "complete",
    ],
    [
      "Jane",
      "Smith",
      "jane.smith@example.com",
      "Los Angeles",
      "USA",
      "50%",
      "1230",
      "complete",
    ],
    [
      "Alice",
      "Johnson",
      "alice.johnson@example.com",
      "London",
      "UK",
      "50%",
      "1230",
      "complete",
    ],
    [
      "Bob",
      "Brown",
      "bob.brown@example.com",
      "Paris",
      "France",
      "50%",
      "1230",
      "complete",
    ],
    [
      "Emily",
      "Davis",
      "emily.davis@example.com",
      "Berlin",
      "Germany",
      "50%",
      "1230",
      "complete",
    ],
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="dark-blue">Job No</th>
            <th className="dark-blue">Tradeperson</th>
            <th className="dark-blue">Contract</th>
            <th className="dark-blue">Amount</th>
            <th className="dark-blue">MileStone</th>
            <th className="dark-blue">Progress</th>
            <th className="dark-blue">Paid</th>
            <th className="dark-blue">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={
                    cell === "complete" ? "text-success" : "light-gray"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradepersoneTable;
