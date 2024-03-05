import Axios from "../Axios";
export const getUser = async (id) => await Axios.get(`/auth/users/${id}`);
const authLogin = async (email, password) => {
  try {
    const response = await Axios.post(`/auth/login`, {
      email,
      password,
    });
    return response.data; // Return the token if login is successful
  } catch (error) {
    throw error.response.data.message; // Throw error message if login fails
  }
};

export const register = async (user) => {
  try {
    const res = await Axios.post(`/auth/register`, user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateAuth = async (user, id) => {
  try {
    const res = await Axios.put(`/auth/update/${id}`, user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
export const deleteAuth = async (id) => {
  try {
    const res = await Axios.delete(`/auth/users/${id}`);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export default authLogin;

export const forgetPassword = async (email) => {
  try {
    const res = await Axios.post(`/auth/forget/send-email`, email);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const verififyOtp = async (otp) => {
  try {
    const res = await Axios.post(`/auth/forget/verify`, otp);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const resetPassword = async (email, password, cnfPassword) => {
  try {
    const res = await Axios.post(`/auth/forget/set-password`, {
      email: email,
      password,
      cnfPassword,
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
