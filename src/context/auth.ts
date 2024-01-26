import { createContext, useContext } from 'react'

export interface User {
  email: string
  firstName: string
  lastName: string
  profile_url: string
  is_registered: boolean
  is_authenticated: boolean
}

export interface IAuthContext {
  auth: User
  setAuth: (user: User) => void
}

export const initialValue: IAuthContext = {
  auth: {
    email: '',
    firstName: '',
    lastName: '',
    profile_url: '',
    is_registered: false,
    is_authenticated: false,
  },
  setAuth: () => {},
}

export const AuthContext = createContext<IAuthContext>(initialValue)

export const useAuth = () => {
  return useContext(AuthContext)
}
