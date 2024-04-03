import axios from "axios";

const BASE_URL = "http://localhost:5500/api";

const jobPostService = {
  createJobPost: async (jobPostData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/consumer/jobposts/jobposts`,
        jobPostData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAllJobPosts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/consumer/jobposts`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getJobPostById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/consumer/jobposts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updateJobPost: async (id, jobPostData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/consumer/jobposts/${id}`,
        jobPostData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteJobPost: async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/consumer/jobposts/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const applyJobService = async (jobId, data) =>
  await axios.post(`${BASE_URL}/consumer/jobposts/apply/${jobId}`, data);

export default jobPostService;
