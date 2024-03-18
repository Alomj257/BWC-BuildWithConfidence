import React from "react";
import "./Updateprofile.css";
const UpdateProfile = () => {
  return (
    <div className="update-profile">
      <form action="">
        <div className="row row-cols-md-2">
          <div className="my-2">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" />
          </div>
          <div className="my-2">
            <label htmlFor="middlename">Middle Name</label>
            <input type="text" name="middlename" />
          </div>
          <div className="my-2">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" />
          </div>
          <div className="my-2">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="my-2">
            <label htmlFor="Gender">Gender</label>
            <input type="radio" name="Gender" />
          </div>
          <div className="my-2">
            <label htmlFor="phone">Phone</label>
            <input type="radio" name="phone" />
          </div>
          <div className="my-2">
            <label htmlFor="address">Address</label>
            <input type="radio" name="address" />
          </div>
          <div className="my-2">
            <label htmlFor="location">location</label>
            <input type="radio" name="location" />
          </div>
          <div className="my-2">
            <label htmlFor="location">location</label>
            <input type="radio" name="location" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
