import Axios from "../Axios";
export const requestTast = async (data) => await Axios.post("/task/", data);
