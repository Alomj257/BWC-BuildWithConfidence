import React from "react";
import "./CreateJob.css";
const CreateJobCom = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>Do you want to build contract or upload a premade contract</div>
        <div>
          <div className="file-filed">
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label first-field"
              >
                Build
                <input
                  type="file"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label second-field"
              >
                Upload
                <input
                  type="file"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          Have you found this tradeperson either on our plateform or outside
        </div>
        <div>
          <div className="file-filed">
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label first-field"
              >
                Platform
                <input
                  type="file"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label second-field"
              >
                Outside
                <input
                  type="file"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Please Enter ID number of tradeperson</div>
        <div>
          <div className="file-filed">
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label first-field"
              >
                3350
                <input
                  type="file"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Type of Procurement</div>
        <div>
          <div className="file-filed">
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label first-field"
              >
                Supply & instruction
                <input
                  type="file"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label second-field"
              >
                Installation
                <input
                  type="file"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Start Date</div>
        <div>
          <div className="file-filed">
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label first-field"
              >
                Calender
                <input
                  type="Date"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Completion Date</div>
        <div>
          <div className="file-filed">
            <div className="file-upload-container">
              <label
                htmlFor="file-upload"
                className="file-upload-label first-field"
              >
                Calender
                <input
                  type="date"
                  id="file-upload"
                  className="file-upload-input"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobCom;
