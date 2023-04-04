import type { AxiosRequestConfig } from 'axios'
import { axiosUniAdapter } from '../request/adapter'

export const requestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE,
  adapter: axiosUniAdapter,
  timeout: 30000,
}
