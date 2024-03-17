import React from "react";
import "./JobHistory.css";
import { useNavigate } from "react-router-dom";
const ConsumerJobCard = ({ jobs }) => {
  const navigate = useNavigate();
  const sendApplieds = (job) => {
    navigate("/consumer/job-history/applied/users", { state: job });
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="dark-blue">Job No</th>
            <th className="dark-blue">Title</th>
            <th className="dark-blue">Designation</th>
            <th className="dark-blue">Date</th>
            <th className="dark-blue">Perposals</th>
            <th className="dark-blue">status</th>
            {/* <th className="dark-blue">Paid</th>
                <th className="dark-blue">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {jobs.map((row, index) => (
            <tr key={index} className="text-capitalize">
              <td
                className={
                  "this" === "complete" ? "text-success" : "light-gray"
                }
              >
                {row?._id?.substring(0, 6)}
              </td>
              <td
                className={
                  "this" === "complete" ? "text-success" : "light-gray"
                }
              >
                {row?.headline}
              </td>
              <td
                className={
                  "this" === "complete" ? "text-success" : "light-gray"
                }
              >
                {row?.work?.map((d) => d + ", ")}
              </td>
              <td
                className={
                  "this" === "complete" ? "text-success" : "light-gray"
                }
              >
                {new Date(row?.createdAt).toLocaleDateString()}
              </td>
              <td
                onClick={() => sendApplieds(row)}
                className={
                  "this" === "complete" ? "text-success" : "light-gray"
                }
              >
                {row?.applied?.length}
              </td>
              <td
                className={
                  "this" === "complete" ? "text-success" : "light-gray"
                }
              >
                Not assign
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumerJobCard;
