import axios from "axios";

const API_URL = "http://localhost:5000";

export const getLogs = async (filters = {}) => {
  try {
    const response = await axios.get(`${API_URL}/logs`, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};

export const getLogAnalytics = async (filters = {}) => {
  try {
    const response = await axios.get(`${API_URL}/logs/analytics`, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
