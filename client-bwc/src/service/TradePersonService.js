import axios from 'axios';

const BASE_URL = 'http://localhost:5500/api';
const TradePersonService = {
  getAllTradePersons: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/tradeperson`);
      return response.data;
    } catch (error) {
      console.error('Error fetching trade persons:', error);
      throw error;
    }
  },

  getTradePersonById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/tradeperson/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching trade person with ID ${id}:`, error);
      throw error;
    }
  },

  createTradePerson: async (tradePersonData) => {
    try {
      const response = await axios.post(`${BASE_URL}/tradeperson`, tradePersonData);
      return response.data;
    } catch (error) {
      console.error('Error creating trade person:', error);
      throw error;
    }
  },

  updateTradePerson: async (id, tradePersonData) => {
    try {
      const response = await axios.put(`${BASE_URL}/tradeperson/${id}`, tradePersonData);
      return response.data;
    } catch (error) {
      console.error(`Error updating trade person with ID ${id}:`, error);
      throw error;
    }
  },

  deleteTradePerson: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/tradeperson/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting trade person with ID ${id}:`, error);
      throw error;
    }
  }
};

export default TradePersonService;
