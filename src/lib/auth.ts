import { apiInstance } from './axios'

export const getUserInfo = async () => {
  const res = await apiInstance.get('/users/info')
  return res.data
}
