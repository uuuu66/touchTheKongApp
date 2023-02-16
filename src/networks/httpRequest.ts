import axios, { AxiosError, Method } from 'axios';
import HttpError from './HttpError';

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    const httpError = new HttpError(error);

    return Promise.reject(httpError);
  },
);

const httpRequest = (
  method: Method,
  apiPath: string,
  queryParams?: Record<string, any>,
  body?: Record<string, any>,
) => {
  return axios.request({
    baseURL: process.env.REACT_APP_ROOT_URL,
    method,
    url: apiPath,
    timeout: 1000 * 10,
    params: queryParams,
    data: body,
  });
};

export default httpRequest;
