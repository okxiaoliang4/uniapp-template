import type { AxiosRequestConfig } from 'axios'
import adapter from '@uni-helper/axios-adapter'

export const requestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE,
  adapter: adapter.createUniAppAxiosAdapter(),
  timeout: 30000,
}
