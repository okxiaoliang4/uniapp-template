import axios from 'axios'
import axiosRetry from 'axios-retry'
import { requestConfig } from '../config'

const $axios = axios.create(requestConfig)

axiosRetry($axios, {
  retryDelay: axiosRetry.exponentialDelay,
})

$axios.interceptors.request.use((config) => {
  return config
})

$axios.interceptors.response.use((response) => {
  return response
})

export default $axios
