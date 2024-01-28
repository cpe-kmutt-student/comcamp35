import { useAuth } from 'src/context/auth'
import styles from './index.module.scss'

const Register: React.FC = (): JSX.Element => {
  const { auth } = useAuth()

  return (
    <div className={styles.registerPage}>
      <div className={styles.profile}>
        <img src={auth.profile_url} alt="profile" />
        <div>{auth.email}</div>
      </div>
      <div className={styles.header}>
        <h1>ฟอร์มการสมัคร Comcamp</h1>
      </div>
    </div>
  )
}

export default Register
