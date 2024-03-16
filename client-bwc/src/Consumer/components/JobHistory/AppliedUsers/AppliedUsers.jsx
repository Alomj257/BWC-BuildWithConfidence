import React from "react";
import "./AppliedUsers.css";
import AppliedUser from "./AppliedUser";
import { useLocation } from "react-router-dom";
const AppliedUsers = () => {
  const { state } = useLocation();
  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="dark-blue">S.No</th>
              <th className="dark-blue">Name</th>
              <th className="dark-blue">Designation</th>
              <th className="dark-blue">Experience</th>
              <th className="dark-blue">Quealification</th>
              <th className="dark-blue">Message</th>
              <th className="dark-blue">View Profile</th>
              <th className="dark-blue">Send Request</th>
              {/* <th className="dark-blue">Paid</th>
                <th className="dark-blue">Status</th> */}
            </tr>
          </thead>
          <tbody>
            {state?.applied?.map((row, key) => (
              <AppliedUser id={row} key={key} job={state} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedUsers;
