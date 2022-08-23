import { AxiosRequestConfig } from 'axios';
import { axiosUniAdapter } from '../request/adapter';

export const requestConfig: AxiosRequestConfig = {
  baseURL: 'https://api.xxx.com',
  adapter: axiosUniAdapter,
  timeout: 3000,
}