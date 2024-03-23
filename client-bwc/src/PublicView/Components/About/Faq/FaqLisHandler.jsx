import React, { useEffect, useRef, useState } from "react";

const FaqLisHandler = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handle = () => {
      if (ref.current && !ref.current?.target) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
  });
  return (
    <div className="my-2" ref={ref}>
      <h6 className="" onClick={() => setOpen(!open)}>
        {title}?
      </h6>
      {open && (
        <div>
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
};

export default FaqLisHandler;
