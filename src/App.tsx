import React, { useCallback, useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'

const App: React.FC = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState()

  const signOut = async () => {
    await axios.post('/api/auth/sign-out')

    window.location.reload()
  }

  const signIn = () => {
    window.location.pathname = '/api/auth/google'
  }

  const getCurrentUserInfo = useCallback(async () => {
    const res = await axios.get('/api/users/info')
    setCurrentUser(res.data)
  }, [])

  useEffect(() => {
    getCurrentUserInfo()
  }, [getCurrentUserInfo])

  return (
    <div className="App">
      <h1>ComCamp 35th</h1>
      {currentUser ? <button onClick={signOut}>Sign Out</button> : <button onClick={signIn}>Sign In</button>}
      <div>{JSON.stringify(currentUser)}</div>
    </div>
  )
}

export default App
