import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { AuthContext, initialValue } from './auth'
import { apiInstance } from 'src/lib/axios'

type Props = {
  children: ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const [auth, setAuth] = useState(initialValue.auth)

  const getCurrentUserInfo = useCallback(async () => {
    try {
      const { data: user } = await apiInstance.get('/users/info')

      setTimeout(() => {
        setAuth({
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          profile_url: user.profile_url,
          is_registered: user.is_registered,
          is_authenticated: true,
        })
      }, 1000)
    } catch {
      setAuth({ ...initialValue.auth, is_authenticated: true })
    }
  }, [setAuth])

  useEffect(() => {
    getCurrentUserInfo()
  }, [getCurrentUserInfo])

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthProvider
