import type { AxiosRequestConfig } from 'axios'
import $axios from '..'

export const createGetRequest = <T = any>(url: string): (config?: AxiosRequestConfig) => Promise<T> => (config?: AxiosRequestConfig) => $axios.get(url, config)
export const createPostRequest = <B = any, T = any>(url: string): (body: B, config?: AxiosRequestConfig) => Promise<T> => (body: B, config?: AxiosRequestConfig) => $axios.post(url, body, config)
