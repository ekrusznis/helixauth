// ApiClient.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const login = (email, password) => {
  return apiClient.post('/user/login', { email, password });
};

export const dashboardData = (userId) => {
  return apiClient.get('/dashboard', { userId });
};

// Export other API functions here
