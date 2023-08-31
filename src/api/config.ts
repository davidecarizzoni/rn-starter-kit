import axios from 'axios';
import { API_BASE_URL } from '@env';
import { store } from '../store';
import { selectUserToken } from '../store/user';

export const ssoAxios = axios.create({
  baseURL: API_BASE_URL,
});

export const appAxios = axios.create({
  baseURL: API_BASE_URL,
});

appAxios.interceptors.request.use(
  config => {
    const state = store.getState();
    const token = selectUserToken(state);
    config.headers.Authorization = `Bearer ${token}`;
    console.debug('config', config);
    return config;
  },
  error => Promise.reject(error),
);

export type SuccessResponse<T> = {
  data: T;
};

export const pickData = <T>(response: SuccessResponse<T>) => {
  return response.data;
};
