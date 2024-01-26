import { apiInstance } from 'src/lib/axios'
import styles from './index.module.scss'
import { useAuth } from 'src/context/auth'
import { getUserInfo } from 'src/lib/auth'
import { useCallback, useEffect } from 'react'

const Navbar: React.FC = (): JSX.Element => {
  const { auth, setAuth } = useAuth()
  const signOut = async () => {
    await apiInstance.post('/auth/sign-out')

    window.location.reload()
  }

  const getCurrentUserInfo = useCallback(async () => {
    const user = await getUserInfo()
    setAuth({
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      profile_url: user.profile_url,
      is_registered: user.is_registered,
      is_authenticated: true,
    })
  }, [setAuth])

  useEffect(() => {
    getCurrentUserInfo()
  }, [getCurrentUserInfo])

  return (
    <div className={styles.navbar}>
      <h1>ComCamp 35th</h1>
      {auth.is_authenticated ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <a href={import.meta.env.APP_BACKEND_URL + '/auth/google'}>
          <button>Sign In</button>
        </a>
      )}
    </div>
  )
}

export default Navbar
