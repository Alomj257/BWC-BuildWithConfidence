import React from "react";
import FaqLisHandler from "./FaqLisHandler";

const FaqCom = ({ faqs }) => {
  return (
    <>
      <div className="row row-cols-md-3 row-cols-sm-2">
        {faqs?.map((data) => (
          <div className="p-3">
            <h5 className="fw-bold">{data?.topic}</h5>
            {data?.child?.map((ch) => (
              <FaqLisHandler title={ch?.title} desc={ch?.desc} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqCom;
