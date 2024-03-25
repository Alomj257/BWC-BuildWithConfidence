import React from "react";
import "./Signiture.css";
import { uploadSignitureService } from "../../../../service/AuthService";
import { useAuth } from "../../../../context/AuthContext";
import { toast } from "react-toastify";
const Signiture = () => {
  const [auth] = useAuth();
  const handleSingnitures = async (e) => {
    const { files } = e.target;
    try {
      const formdata = new FormData();
      formdata.append("file", files[0]);
      const { data } = await uploadSignitureService(formdata, auth?.user?._id);
      console.log(data);
      if (data?.message) {
        toast?.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      toast.error(error?.reposnse?.data?.message || "");
    }
  };
  return (
    <div className="signiture">
      {/* <div className="file-upload-container">
        <i class="bx  sign-icon bx-upload"></i>
        <label htmlFor="file-upload" className="file-upload-label">
          Upload
          <input type="file" id="file-upload" className="file-upload-input" />
        </label>
      </div> */}
      <div className="file-upload-container">
        <i class="bx sign-icon bxs-pencil"></i>
        <label htmlFor="file-upload" className="file-upload-label">
          Signiture
        </label>
        <input onChange={handleSingnitures} type="file" id="file-upload" />
      </div>
    </div>
  );
};

export default Signiture;
