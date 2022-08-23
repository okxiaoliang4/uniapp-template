import axios from 'axios'
import { requestConfig } from '../config'
import axiosRetry from 'axios-retry'

const $axios = axios.create(requestConfig)

axiosRetry($axios, {
  retryDelay: axiosRetry.exponentialDelay,
})

$axios.interceptors.request.use(config => {
  return config
})

$axios.interceptors.response.use(response => {
  return response
})

export default $axios