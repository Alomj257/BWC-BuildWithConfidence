import axios from 'axios';

const BASE_URL = 'http://localhost:5500/api';

const SupplierService = {
  getAllSuppliers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/suppliers`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getSupplierById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/suppliers/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  createSupplier: async (supplierData) => {
    try {
      const response = await axios.post(`${BASE_URL}/suppliers`, supplierData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateSupplier: async (id, updatedSupplierData) => {
    try {
      const response = await axios.put(`${BASE_URL}/suppliers/${id}`, updatedSupplierData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteSupplier: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/suppliers/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

export default SupplierService;
