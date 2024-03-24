import React, { useEffect, useState } from "react";
import useFetch from "../../../../Hooks/useFetch";
import { useAuth } from "../../../../context/AuthContext";
import Req from "./Req";

import "./Requests.css";
const Requests = () => {
  const [auth] = useAuth();
  const { data } = useFetch(`/task/${auth?.user?._id}`);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, [data]);

  return (
    <div>
      <div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="dark-blue">S.No</th>
                <th className="dark-blue">Name</th>
                <th className="dark-blue">Experience</th>
                <th className="dark-blue">Quealification</th>
                <th className="dark-blue">Message</th>
                <th className="dark-blue">Accept</th>
                {/* <th className="dark-blue">Paid</th>
                <th className="dark-blue">Status</th> */}
              </tr>
            </thead>
            <tbody>
              {jobs?.map((row, key) => (
                <Req key={key} job={row} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Requests;
