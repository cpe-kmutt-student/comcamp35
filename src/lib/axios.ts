import axios, { Axios } from 'axios'

export const apiInstance: Axios = axios.create({
  // baseURL: '/api',
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
})
