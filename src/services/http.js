import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost/api',
  headers: {
    'Content-type': 'application/json'
  }
});

export default axiosInstance;