import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import useFetch from "../../../../Hooks/useFetch";
import "./PostedList.css";
import { useNavigate } from "react-router-dom";

const PostedList = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  // console.log(`/consumer/jobposts/jobposts/posted/${auth?.user?._id}`);
  const { data } = useFetch(
    `/consumer/jobposts/jobposts/posted/${auth?.user?._id}`
  );
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, [data]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="dark-blue text-center">Job No</th>
            <th className="dark-blue text-center">Budget</th>
            <th className="dark-blue text-center">Title</th>
            <th className="dark-blue text-center">Post Date</th>
            <th className="dark-blue text-center">About</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(jobs)
            ? jobs.map((row, index) => (
                <tr key={index}>
                  <td
                    className={
                      "" === "complete" ? "text-success" : "light-gray"
                    }
                  >
                    {row?._id?.slice(0, 6)?.toUpperCase()}
                  </td>
                  <td
                    className={
                      "" === "complete" ? "text-success" : "light-gray"
                    }
                  >
                    ${row?.budget}
                  </td>
                  <td
                    className={
                      "" === "complete"
                        ? "text-success"
                        : "light-gray text-capitalize"
                    }
                  >
                    {row?.headline}
                  </td>
                  <td
                    className={
                      "" === "complete" ? "text-success" : "light-gray"
                    }
                  >
                    {new Date(row?.createdAt).getDate()}-
                    {new Date(row?.createdAt).getMonth()}-
                    {new Date(row?.createdAt).getFullYear()}
                  </td>
                  <td
                    onClick={() =>
                      navigate("/consumer/job/details", { state: row })
                    }
                    style={{ cursor: "pointer" }}
                    className={
                      "" === "complete" ? "text-success" : "light-gray"
                    }
                  >
                    see details
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default PostedList;
