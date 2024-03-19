import React, { useState } from "react";
import "./Updateprofile.css";
import { useAuth } from "../../../../context/AuthContext";
import { toast } from "react-toastify";
import { updateprofile } from "../../../../service/AuthService";
const UpdateProfile = ({ reFetch }) => {
  const [auth] = useAuth();
  const [user, setUser] = useState(auth?.user);
  const handleChange = (e) => {
    const { value, name, files } = e.target;
    setUser({ ...user, [name]: files ? files[0] : value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateprofile(auth?.user?._id, user);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      toast.success(data);
      reFetch();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="update-profile">
      <h3 className="text-center fw-bold ">Update Profile</h3>
      <form action="" onSubmit={handleUpdate}>
        <div className="row row-cols-md-2">
          <div className="my-2">
            <label htmlFor="firstname">First Name</label>
            <input
              value={user?.firstname}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
          <div className="my-2">
            <label htmlFor="middlename">Middle Name</label>
            <input
              value={user?.middlename}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              name="middlename"
            />
          </div>
          <div className="my-2">
            <label htmlFor="lastname">Last Name</label>
            <input
              value={user?.lastname}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              name="lastname"
            />
          </div>
          <div className="my-2">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="my-2">
            <div className="fw-bold">Gender</div>
            <div className="d-flex">
              <label htmlFor="male">Male</label>
              <input
                checked={user?.gender === "Male"}
                onChange={handleChange}
                className="w-100  p-2 rounded"
                type="radio"
                name="gender"
                style={{ cursor: "pointer" }}
                id="male"
                value="Male"
              />
              <label htmlFor="female">Female</label>
              <input
                checked={user?.gender === "Female"}
                onChange={handleChange}
                className="w-100  p-2 rounded"
                type="radio"
                name="gender"
                style={{ cursor: "pointer" }}
                id="female"
                value="Female"
              />
              <label htmlFor="other">Other</label>
              <input
                checked={user?.gender === "Other"}
                onChange={handleChange}
                className="w-100  p-2 rounded"
                type="radio"
                name="gender"
                style={{ cursor: "pointer" }}
                id="other"
                value="Other"
              />
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="phone">Phone</label>
            <input
              value={user?.phone}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="tel"
              id="phone"
              name="phone"
            />
          </div>
          <div className="my-2">
            <label htmlFor="address">Address</label>
            <input
              value={user?.address}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              id="address"
              name="address"
            />
          </div>
          <div className="my-2">
            <label htmlFor="location">location</label>
            <input
              value={user?.location}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              id="location"
              name="location"
            />
          </div>
          <div className="my-2">
            <label htmlFor="title">Title</label>
            <input
              value={user?.title}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div className="my-2">
            <label htmlFor="experience">Experience</label>
            <input
              value={user?.experience}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              id="experience"
              name="experience"
            />
          </div>
          <div className="my-2">
            <label htmlFor="qualification">Qualification</label>
            <input
              value={user?.qualification}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              id="qualification"
              name="qualification"
            />
          </div>
          <div className="my-2">
            <label htmlFor="nationality">Nationality</label>
            <input
              value={user?.nationality}
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="text"
              id="nationality"
              name="nationality"
            />
          </div>
          {/* <div className="my-2">
            <label htmlFor="profile">Profile Pic</label>
            <input
              onChange={handleChange}
              className="w-100  p-2 rounded"
              type="file"
              id="profile"
              name="profile"
            />
          </div> */}
        </div>
        <div className="my-2">
          <label htmlFor="about">About</label>
          <textarea
            value={user?.about}
            onChange={handleChange}
            className="w-100 p-2 rounded"
            name="about"
            id="about"
            rows="4"
          ></textarea>
        </div>
        <div className="my-2 text-center">
          <button className="btn px-4  btn-dark-blue text-white">Save</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
