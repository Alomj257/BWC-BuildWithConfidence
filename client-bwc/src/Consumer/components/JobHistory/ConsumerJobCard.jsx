import React from "react";
import "./JobHistory.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
const ConsumerJobCard = ({ jobs, type }) => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const sendApplieds = (job) => {
    navigate("/consumer/job-history/applied/users", { state: { job, type } });
  };
  const handleOverview = (job) => {
    if (
      job?.taskAssign?.tradepersonId &&
      job?.taskAssign?.consumerId === auth?.user?._id &&
      job?.taskAssign?.contractId &&
      job?.taskAssign?.isContract
    ) {
      navigate("/consumer/overview", { state: job });
    }
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
                style={{ cursor: "pointer" }}
                onClick={() => handleOverview(row)}
                className={
                  "this" === "complete" ? "text-success" : "light-gray"
                }
              >
                {row?.taskAssign?.tradepersonId &&
                row?.taskAssign?.consumerId === auth?.user?._id &&
                row?.taskAssign?.contractId &&
                row?.taskAssign?.isContract
                  ? " Live project"
                  : row?.taskAssign?.tradepersonId &&
                    row?.taskAssign?.consumerId === auth?.user?._id &&
                    row?.taskAssign?.contractId &&
                    !row?.taskAssign?.isContract
                  ? "Sign for Contract"
                  : (!row?.taskAssign?.consumerId ||
                      !row?.taskAssign?.contractId ||
                      !row?.taskAssign?.tradepersonId) &&
                    row?.accept?.find(
                      (req) => req?.consumerId === auth?.user?._id
                    )
                  ? "Request Accepted"
                  : "Request"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumerJobCard;
