import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const JobCard = ({ jobs, type }) => {
  const [auth] = useAuth();
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="dark-blue">Job No</th>
              <th className="dark-blue">Title</th>
              <th className="dark-blue">Designation</th>
              <th className="dark-blue">Date</th>
              <th className="dark-blue">status</th>
              {/* <th className="dark-blue">Paid</th>
                <th className="dark-blue">Status</th> */}
            </tr>
          </thead>
          <tbody>
            {jobs.map((row, index) => (
              <>
                {type === "bid" &&
                  !row?.accept?.find(
                    (req) => req?.tradepersonId === auth?.user?._id
                  ) && <Job row={row} key={index} type={type} />}
                {type === "contract" &&
                  row?.accept?.find(
                    (req) => req?.tradepersonId === auth?.user?._id
                  ) &&
                  !row?.taskAssign?.isContract && (
                    <Job row={row} key={index} type={type} />
                  )}
                {type === "live" &&
                  row?.accept?.find(
                    (req) =>
                      req?.tradepersonId === auth?.user?._id &&
                      row?.taskAssign?.isContract
                  ) && <Job row={row} key={index} type={type} />}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JobCard;

const Job = ({ row, key, type }) => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  //   console.log(type);
  const handleRedirect = () => {
    if (
      row?.taskAssign?.consumerId &&
      row?.taskAssign?.tradepersonId === auth?.user?._id &&
      row?.taskAssign?.contractId &&
      row?.taskAssign?.isContract
    ) {
      navigate("/tradeperson/overview", { state: row });
    }
    if (
      (!row?.taskAssign?.consumerId ||
        !row?.taskAssign?.contractId ||
        row?.taskAssign?.tradepersonId !== auth?.user?._id) &&
      row?.accept?.find((req) => req?.tradepersonId === auth?.user?._id)
    ) {
      navigate("/tradeperson/requests", { state: row });
    }
  };
  return (
    <>
      <tr key={key} className="text-capitalize">
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {row?._id?.substring(0, 6)}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {row?.headline}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {row?.work?.map((d) => d + ", ")}
        </td>
        <td className={"this" === "complete" ? "text-success" : "light-gray"}>
          {new Date(row?.createdAt).toLocaleDateString()}
        </td>
        <td
          style={{ cursor: "pointer" }}
          className={"this" === "complete" ? "text-success" : "light-gray"}
          onClick={handleRedirect}
        >
          {row?.taskAssign?.tradepersonId &&
          row?.taskAssign?.tradepersonId === auth?.user?._id &&
          row?.taskAssign?.contractId &&
          row?.taskAssign?.isContract
            ? " Live project"
            : row?.taskAssign?.consumerId &&
              row?.taskAssign?.tradepersonId === auth?.user?._id &&
              row?.taskAssign?.contractId &&
              !row?.taskAssign?.isContract
            ? "Sign for Contract"
            : (!row?.taskAssign?.consumerId ||
                !row?.taskAssign?.contractId ||
                row?.taskAssign?.tradepersonId !== auth?.user?._id) &&
              row?.accept?.find((req) => req?.tradepersonId === auth?.user?._id)
            ? "Request"
            : "Applied"}
        </td>
      </tr>
    </>
  );
};
