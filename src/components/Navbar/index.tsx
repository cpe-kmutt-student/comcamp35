import styles from './index.module.scss'
import { useAuth } from 'src/context/auth'
import RegisterButton from '../RegisterButton'
import SignOutButton from '../SignOutButton'
import Logo from 'src/assets/logo.svg'
import { Link } from 'react-router-dom'
import { BASE_PATH } from 'src/constants/router'

const Navbar: React.FC = (): JSX.Element => {
  const { auth } = useAuth()

  return (
    <div className={styles.navbar}>
      {/* <h1>ComCamp 35th</h1> */}
      <Link to={BASE_PATH}>
        <img className={styles.navbarLogo} alt="Logo" src={Logo} />
      </Link>
      {auth.is_authenticated ? (
        <SignOutButton active>ออกจากระบบ</SignOutButton>
      ) : (
        <RegisterButton active>ลงทะเบียน</RegisterButton>
      )}
    </div>
  )
}

export default Navbar
