import React, { ReactNode, useState } from 'react'
import { AuthContext, initialValue } from './auth'

type Props = {
  children: ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const [auth, setAuth] = useState(initialValue.auth)

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthProvider
