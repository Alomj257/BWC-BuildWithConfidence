import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ConsumerJobRow = ({ row, index, type }) => {
  console.log(row);
  const [auth] = useAuth();
  const navigate = useNavigate();
  const sendApplieds = (job) => {
    navigate("/consumer/job-history/applied/users", { state: { job, type } });
  };
  const handleOverview = (job) => {
    if (
      (!row?.taskAssign?.consumerId ||
        !row?.taskAssign?.contractId ||
        !row?.taskAssign?.tradepersonId) &&
      row?.accept?.find((req) => req?.consumerId === auth?.user?._id)
    ) {
      navigate("/consumer/digital-contract", {
        state: { job, userId: auth?.user?._id },
      });
    } else if (
      job?.taskAssign?.tradepersonId &&
      job?.taskAssign?.consumerId === auth?.user?._id &&
      job?.taskAssign?.contractId &&
      job?.taskAssign?.isContract
    ) {
      navigate("/consumer/overview", { state: job });
    } else {
      navigate("/consumer/job-history/applied/users", { state: { job, type } });
    }
  };
  return (
    <>
      <tr key={index} className="text-capitalize">
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
        {type === "post" && (
          <td
            onClick={() => sendApplieds(row)}
            className={"this" === "complete" ? "text-success" : "light-gray"}
          >
            {row?.applied?.length}
          </td>
        )}
        <td
          style={{ cursor: "pointer" }}
          onClick={() => handleOverview(row)}
          className={"this" === "complete" ? "text-success" : "light-gray"}
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
              row?.accept?.find((req) => req?.consumerId === auth?.user?._id)
            ? "Sign contract"
            : "Requests"}
        </td>
      </tr>
    </>
  );
};

export default ConsumerJobRow;
