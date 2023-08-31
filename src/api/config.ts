import axios from 'axios';
import { API_BASE_URL } from '@env';

export const ssoAxios = axios.create({
  baseURL: API_BASE_URL,
});

ssoAxios.interceptors.response.use(
  config => config,
  error => Promise.reject(error),
);
