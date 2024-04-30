import Axios from "../Axios";
export const requestTast = async (data, id) =>
  await Axios.post(`/task/${id}`, data);

export const accectRequest = async (data, id) =>
  await Axios.post(`/task/accept/${id}`, data);

export const consumerContractSignService = async (data, id) =>
  await Axios.post(`/task/consumer/${id}`, data);

export const tradpersonCotractSignService = async (data, jobId, contractId) =>
  await Axios.post(`/task/traderperson/${jobId}/${contractId}`, data);

export const paymentRelease = async (data) =>
  await Axios.post(`/task/payment/consumer/`, data);
