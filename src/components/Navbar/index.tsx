import styles from './index.module.scss'
import { useAuth } from 'src/context/auth'
import RegisterButton from '../RegisterButton'
import SignOutButton from '../SignOutButton'
import { LOGO_PATH } from 'src/constants/imgPath'

const Navbar: React.FC = (): JSX.Element => {
  const { auth } = useAuth()

  return (
    <div className={styles.navbar}>
      {/* <h1>ComCamp 35th</h1> */}
      <img className={styles.navbarLogo} alt="Logo" src={LOGO_PATH} />
      {auth.is_authenticated ? (
        <SignOutButton active>ออกจากระบบ</SignOutButton>
      ) : (
        <RegisterButton active>ลงทะเบียน</RegisterButton>
      )}
    </div>
  )
}

export default Navbar
