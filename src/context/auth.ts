import { createContext, useContext } from 'react'

export interface IUser {
  email: string
  firstName: string
  lastName: string
  profile_url: string
  is_registered: boolean
  is_authenticated: null | boolean
}

export interface IAuthContext {
  auth: IUser
  setAuth: (user: IUser) => void
}

export const initialValue: IAuthContext = {
  auth: {
    email: '',
    firstName: '',
    lastName: '',
    profile_url: '',
    is_registered: false,
    is_authenticated: null,
  },
  setAuth: () => {},
}

export const AuthContext = createContext<IAuthContext>(initialValue)

export const useAuth = () => {
  return useContext(AuthContext)
}
