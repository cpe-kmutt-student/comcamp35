import React, { ReactNode, useEffect, useState } from 'react'
import { AuthContext, initialValue } from './auth'
import { apiInstance } from 'src/lib/axios'
import LoadingPage from 'src/pages/LoadingPage'

type Props = {
  children: ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const [auth, setAuth] = useState(initialValue.auth)
  const [loading, setLoading] = useState<boolean>(true)

  const getCurrentUserInfo = async () => {
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

        setLoading(false)
      }, 1000)
    } catch (err) {
      setAuth({ ...initialValue.auth, is_authenticated: false })
      setLoading(false)
    }
  }

  useEffect(() => {
    getCurrentUserInfo()
  }, [])

  if (loading) return <LoadingPage />
  else return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthProvider
