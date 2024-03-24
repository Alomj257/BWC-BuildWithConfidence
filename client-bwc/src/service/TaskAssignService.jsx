import Axios from "../Axios";
export const requestTast = async (data, id) =>
  await Axios.post(`/task/${id}`, data);

export const accectRequest = async (data, id) =>
  await Axios.post(`/task/accept/${id}`, data);
