import axios from "axios";

const BASE_URL = "http://localhost:5500/api";

export const saveDigitalService = async (digitalData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/consumer/digital-contractor/`,
      digitalData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
export const updateDigitalService = async (digitalData, id) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/consumer/digital-contractor/${id}`,
      digitalData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
export const deleteDigitalService = async (id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/consumer/digital-contractor/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
export const getAllDigitalService = async () => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/consumer/digital-contractor/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
