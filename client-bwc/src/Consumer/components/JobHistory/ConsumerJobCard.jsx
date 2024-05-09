import React from "react";
import "./JobHistory.css";
import ConsumerJobRow from "./ConsumerJobRow";
import { useAuth } from "../../../context/AuthContext";
const ConsumerJobCard = ({ jobs, type }) => {
  const [auth] = useAuth();
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="dark-blue">Job No</th>
            <th className="dark-blue">Title</th>
            <th className="dark-blue">Designation</th>
            <th className="dark-blue">Date</th>
            {type === "post" && <th className="dark-blue">Perposals</th>}
            <th className="dark-blue">status</th>
            {/* <th className="dark-blue">Paid</th>
                <th className="dark-blue">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {jobs.map((row, index) => (
            // <ConsumerJobRow index={index} row={row} type={type} />
            <>
              {type === "post" &&
                !row?.accept?.find(
                  (req) => req?.consumerId === auth?.user?._id
                ) && <ConsumerJobRow row={row} key={index} type={type} />}
              {type === "pre" &&
                row?.accept?.find(
                  (req) => req?.consumerId === auth?.user?._id
                ) &&
                row?.accept?.find(
                  (req) =>
                    req?.consumerId === auth?.user?._id &&
                    !row?.taskAssign?.isContract
                ) && <ConsumerJobRow row={row} key={index} type={type} />}
              {type === "live" &&
                row?.accept?.find(
                  (req) =>
                    req?.consumerId === auth?.user?._id &&
                    row?.taskAssign?.isContract
                ) && <ConsumerJobRow row={row} key={index} type={type} />}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumerJobCard;
