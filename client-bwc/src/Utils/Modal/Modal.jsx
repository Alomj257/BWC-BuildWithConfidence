import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ children, btnText, bodyClass, btnClasss, closeIcon }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <button className={btnClasss} onClick={() => setIsModal(!isModal)}>
        {btnText}
      </button>
      <div className={isModal ? "popup" : "d-none"}>
        <div className={bodyClass + " p-3 rounded shadow"} id="model-body">
          <div className="text-end">
            <i
              className={closeIcon + " text-end bx bx-x "}
              id="user-close-icon"
              onClick={() => setIsModal(false)}
            ></i>
          </div>
          {children}
          {/* <button
            className="btn btn-secondary "
            onClick={() => setIsModal(false)}
          >
            close
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
