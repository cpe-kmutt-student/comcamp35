import styles from './index.module.scss'
import { useAuth } from 'src/context/auth'
import RegisterButton from '../RegisterButton'
import Logo from 'src/assets/logo.svg'
import { Link } from 'react-router-dom'
import { BASE_PATH, REGISTER_PATH } from 'src/constants/router'
import { Avatar, Flex, IconButton, Text } from '@radix-ui/themes'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { isTodayRegis } from 'src/lib/date'

const Navbar: React.FC = (): JSX.Element => {
  const [isExpand, setExpand] = useState<boolean>(false)

  const { auth } = useAuth()

  const Image = () => {
    return (
      <Link to={BASE_PATH}>
        <img className={styles.navbarLogo} alt="Logo" src={Logo} />
      </Link>
    )
  }

  const NavRegisMobile = () => {
    return auth.is_authenticated ? (
      <Link to={REGISTER_PATH} className={styles.nav}>
        <Text className={styles.nav}>ไปยังหน้าลงทะเบียน</Text>
      </Link>
    ) : (
      <a href={import.meta.env.VITE_BACKEND_URL + '/auth/google'} className={styles.nav}>
        <Text className={styles.nav}>ลงทะเบียน</Text>
      </a>
    )
  }

  return (
    <>
      {isExpand ? (
        <div className={styles.nav_menu}>
          <Flex justify="between" align="center" direction="row" style={{ padding: '5px 20px' }}>
            <Image />
            <IconButton size="3" color="gray" variant="soft" highContrast onClick={() => setExpand(false)}>
              <Cross1Icon />
            </IconButton>
          </Flex>
          <Flex gap="5" justify="center" align="center" direction="column" style={{ padding: '20px 0' }}>
            <Text className={styles.nav}>ไฮไลท์</Text>
            <Text className={styles.nav}>การเรียน</Text>
            <Text className={styles.nav}>คุณสมบัติ</Text>
            <Text className={styles.nav}>ช่วงเวลา</Text>
            <Text className={styles.nav}>คำถามที่พบบ่อย</Text>
            <Text className={styles.nav}>ช่องทางการติดต่อ</Text>
            {isTodayRegis() && <NavRegisMobile />}
          </Flex>
        </div>
      ) : (
        <Flex justify="between" align="center" className={styles.navbar}>
          <Image />
          <Flex gap="5" className={styles.nav_desktop}>
            <Text className={styles.nav}>ไฮไลท์</Text>
            <Text className={styles.nav}>การเรียน</Text>
            <Text className={styles.nav}>คุณสมบัติ</Text>
            <Text className={styles.nav}>ช่วงเวลา</Text>
            <Text className={styles.nav}>คำถามที่พบบ่อย</Text>
            <Text className={styles.nav}>ช่องทางการติดต่อ</Text>
          </Flex>
          <div>
            <div className={styles.nav_mobile}>
              <IconButton size="3" color="gray" variant="soft" highContrast onClick={() => setExpand(true)}>
                <HamburgerMenuIcon />
              </IconButton>
            </div>
            {isTodayRegis() ? (
              <div className={styles.nav_desktop}>
                {auth.is_authenticated ? (
                  <Link to={REGISTER_PATH} className={styles.avatar}>
                    <Avatar src={auth.profile_url} fallback={auth.email?.substring(0, 3)} size="2" radius="large" />
                  </Link>
                ) : (
                  <RegisterButton active>ลงทะเบียน</RegisterButton>
                )}
              </div>
            ) : (
              <Text>ปิดรับสมัครแล้ว</Text>
            )}
          </div>
        </Flex>
      )}
    </>
  )
}

export default Navbar
