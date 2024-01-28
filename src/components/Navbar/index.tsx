import styles from './index.module.scss'
import { useAuth } from 'src/context/auth'
import RegisterButton from '../RegisterButton'
import SignOutButton from '../SignOutButton'

const Navbar: React.FC = (): JSX.Element => {
  const { auth } = useAuth()

  return (
    <div className={styles.navbar}>
      <h1>ComCamp 35th</h1>
      {auth.is_authenticated ? (
        <SignOutButton active>ออกจากระบบ</SignOutButton>
      ) : (
        <RegisterButton active>ลงทะเบียน</RegisterButton>
      )}
    </div>
  )
}

export default Navbar
