import Axios from "../Axios";
// status request
export const requestTast = async (data, id) =>
  await Axios.post(`/task/${id}`, data);
  
// accept
export const accectRequest = async (data, id) =>
  await Axios.post(`/task/accept/${id}`, data);

// consumer contract
export const consumerContractSignService = async (data, id) =>
  await Axios.post(`/task/consumer/${id}`, data);
// tradeperson contract
export const tradpersonCotractSignService = async (data, jobId, contractId) =>
  await Axios.post(`/task/traderperson/${jobId}/${contractId}`, data);

export const paymentRelease = async (data) =>
  await Axios.post(`/task/payment/consumer/`, { items: data });
