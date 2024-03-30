import React from "react";
import "./AppliedUsers.css";
import AppliedUser from "./AppliedUser";
import { useLocation } from "react-router-dom";
const AppliedUsers = () => {
  const { state } = useLocation();

  const type = state?.type;
  return (
    <div>
      <div className="table-container">
        {state?.job?.applied?.map((row, key) => (
          <>
            {type === "post" && (
              <AppliedUser type={type} id={row} key={key} job={state?.job} />
            )}
            {type === "pre" &&
              state?.job?.accept?.find((req) => req?.tradepersonId === row) && (
                <AppliedUser type={type} id={row} key={key} job={state?.job} />
              )}

            {type === "live" &&
              state?.job?.accept?.find((req) => req?.tradepersonId === row) &&
              state?.job?.taskAssign?.isContract && (
                <AppliedUser type={type} id={row} key={key} job={state?.job} />
              )}

            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default AppliedUsers;
