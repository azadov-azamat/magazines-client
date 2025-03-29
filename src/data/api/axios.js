// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.marketlochin.uz/api/v1',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
