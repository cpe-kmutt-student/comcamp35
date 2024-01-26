import axios, { Axios } from 'axios'

export const apiInstance: Axios = axios.create({
  baseURL: '/api',
  withCredentials: true,
})
