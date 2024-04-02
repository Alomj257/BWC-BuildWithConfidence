import React, { useEffect, useState } from "react";
import "./Profile.css";
import dummyimg from "../../../assests/profile/P1.png";
import { useAuth } from "../../../context/AuthContext";
import Modal from "../../../Utils/Modal/Modal";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import { toast } from "react-toastify";
import { updateAuthImage } from "../../../service/AuthService";
import Axios, { server } from "../../../Axios";
import { chatCreate } from "../../../service/ChatService";
import { useNavigate } from "react-router-dom";
const Profile = ({ id }) => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [user, setUser] = useState(null);
  // const { data, reFetch } = useFetch(`/auth/users/${id || auth?.user?._id}`);
  // const [img, setImg] = useState(null);
  const getUser = async () => {
    try {
      const res = await Axios.get(`/auth/users/${id ? id : ""}`);
      if (!res.data.message) {
        setUser(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const reFetchUpdate = () => {
    getUser();
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    try {
      if (file) {
        const reader = new FileReader();
        // reader.onload = () => {
        //   setImg(reader.result);
        // };
        reader.readAsDataURL(file);

        const formData = new FormData();
        formData.append("file", file);
        const { data } = await updateAuthImage(formData, auth?.user?._id);
        if (data?.message) {
          toast.error(data);
        }
        toast.success(data);
        reFetchUpdate();
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data.message || "Something went wrong");
    }
  };

  const handleMassage = async (currentUser, oppositeUser) => {
    try {
      const { data } = await chatCreate({
        senderId: currentUser,
        receiverId: oppositeUser,
      });
      if (data.message) {
        toast.error(data.message);
        return;
      }
      navigate("/consumer/chat");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="container mx-0">
      <div className="row w-100">
        <div className="col-4 ">
          <div className="m-auto position-relative">
            <img
              src={
                server +
                (auth?.user?._id === id ? auth?.user?.profile : user?.profile)
              }
              alt=" profile pic"
              className="w-100 rounded-circle"
            />
            {auth?.user?._id === id && (
              <div className="position-absolute d-flex justify-content-center update-img-label  w-100">
                <label className="mx-auto label   fw-bold" htmlFor="profile">
                  Edit
                </label>
                <input
                  onChange={handleFileChange}
                  type="file"
                  id="profile"
                  className="d-none"
                />
              </div>
            )}
          </div>
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold">
              {user?.firstname || ""} {user?.middlename || ""}
              {user?.lastname || ""}
            </h4>
            <div className="d-flex">
              <i className="bx bx-map fs-5 "></i>
              <span>
                {(user?.address || "") +
                  "," +
                  (user?.location || "") +
                  ", " +
                  (user?.nationality || "")}
              </span>
            </div>
            <div>
              <i className="bx bxs-star fs-4 text-warning"></i>
              <i className="bx bxs-star fs-4 text-warning"></i>
              <i className="bx bxs-star fs-4 text-warning"></i>
              <i className="bx bxs-star fs-4 text-warning"></i>
              <i className="bx bxs-star-half fs-4 text-warning"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-4 px-3">
              <div className="bg-light my-3 py-2 rounded text-center fw-bold">
                Trade
              </div>
              <div className="bg-light my-3 py-2 rounded text-center fw-bold">
                Experience
              </div>
              <div className="bg-light my-3 py-2 rounded text-center fw-bold">
                Quealification
              </div>
              <div className="bg-light my-3 py-2 rounded text-center fw-bold">
                Title
              </div>
              <div className="bg-light my-3 py-2 rounded text-center fw-bold">
                Gender
              </div>
            </div>
            <div className="col-8">
              <div className="my-3 text-center py-2 rounded bg-light">
                {user?.qualification || ""}
              </div>
              <div className="my-3 text-center py-2 rounded bg-light">
                {user?.experience || ""}
              </div>
              <div className="my-3 text-center py-2 rounded bg-light">
                {user?.qualification || ""}
              </div>
              <div className="my-3 text-center py-2 rounded bg-light">
                {user?.title || ""}
              </div>
              <div className="my-3 text-center py-2 rounded bg-light">
                {user?.gender || ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-3">
        {auth?.user?._id !== id ? (
          <>
            {" "}
            <button
              onClick={() => handleMassage(auth?.user?._id, id)}
              className="broder-0 text-white fs-6 p-1 ps-3 fw-bold rounded-5 profile-btn"
            >
              {" "}
              Talk/ Message
              <span>
                <i className="bx bx-chevrons-right  bg-white rounded-circle text-dark p-2" />
              </span>
            </button>{" "}
          </>
        ) : (
          <Modal
            bodyClass="bg-white col-md-8 col-sm-10"
            btnClasss="broder-0 text-white fs-6 p-1 ps-3 fw-bold rounded-5 profile-btn"
            btnText={
              <>
                Edit Profile
                <span className="mx-2">
                  <i className="bx bx-chevrons-right  bg-white rounded-circle text-dark p-2" />
                </span>
              </>
            }
            closeIcon="fs-1"
          >
            <UpdateProfile reFetch={reFetchUpdate} />
          </Modal>
        )}
      </div>
      <div className="bg-light profile-about rounded p-2">
        <h4 className="fw-bold">About Me</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          pariatur repellat quam, nesciunt ratione odit, dolorum praesentium
          repellendus voluptate repudiandae quae doloremque expedita. Ullam
          rerum culpa enim ipsam sunt expedita laudantium quas voluptate saepe
          id laboriosam perferendis nulla numquam facilis in necessitatibus vero
          itaque ab corrupti sit atque cupiditate, mollitia iusto. Quae possimus
          accusantium repudiandae sint, nesciunt explicabo natus obcaecati? Illo
          praesentium sequi corporis veniam asperiores unde! Assumenda labore
          quibusdam, aliquam maiores deleniti dicta nobis sapiente temporibus
          hic debitis itaque vero, odit, aspernatur sed. In autem minima animi,
          harum dicta vel esse ad, assumenda repellat repellendus ex eveniet ab
          odit.
        </p>
      </div>
      <div className="portfolio my-3 col-12">
        <h4 className="fw-bold mt-3">Portfolio</h4>
        <div className="row w-100 gap-4 flex-nowrap">
          <div className="col-3">
            <img src={dummyimg} alt="profile" />
          </div>
          <div className="col-3">
            <img src={dummyimg} alt="profile" />
          </div>
          <div className="col-3">
            <img src={dummyimg} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
