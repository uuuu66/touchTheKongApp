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
    console.log(error);
    const httpError = new HttpError(error);

    return Promise.reject(httpError);
  },
);
interface HttpRequestArgs {
  method: Method;
  url: string;
  query?: Record<string, any>;
  body?: Record<string, any>;
  param?: string;
}
const httpRequest = (args: HttpRequestArgs) => {
  const { method, url, query, body, param } = args;
  return axios.request({
    baseURL: process.env.REACT_APP_ROOT_URL,
    method,
    url: `${url}/${param || ''}`,
    timeout: 1000 * 10,
    params: query,
    data: body,
  });
};

export default httpRequest;
