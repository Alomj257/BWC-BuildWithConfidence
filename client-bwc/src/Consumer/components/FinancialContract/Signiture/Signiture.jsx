import React from "react";
import "./Signiture.css";
const Signiture = () => {
  return (
    <div className="signiture">
      <div className="file-upload-container">
        <i class="bx  sign-icon bx-upload"></i>
        <label htmlFor="file-upload" className="file-upload-label">
          Upload
          <input type="file" id="file-upload" className="file-upload-input" />
        </label>
      </div>
      <div className="file-upload-container">
        <i class="bx sign-icon bxs-pencil"></i>
        <label htmlFor="file-upload" className="file-upload-label">
          Signiture
          <input type="file" id="file-upload" className="file-upload-input" />
        </label>
      </div>
    </div>
  );
};

export default Signiture;
