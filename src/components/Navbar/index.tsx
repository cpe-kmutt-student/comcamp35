import styles from './index.module.scss'
import { useAuth } from 'src/context/auth'
import RegisterButton from '../RegisterButton'
import Logo from 'src/assets/logo.svg'
import { Link } from 'react-router-dom'
import { BASE_PATH, REGISTER_PATH } from 'src/constants/router'
import { Avatar, Flex, IconButton, Text } from '@radix-ui/themes'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { REGIS_END_DATE, isTodayRegis } from 'src/lib/date'
import { isPast } from 'date-fns'
import { Link as ScrollLink, animateScroll } from 'react-scroll'

interface INavLink {
  name: string
  to: string
}

const navLinks: INavLink[] = [
  {
    name: 'การเรียน',
    to: 'learning',
  },
  {
    name: 'คุณสมบัติ',
    to: 'condition',
  },
  {
    name: 'ช่วงเวลา',
    to: 'timeline',
  },
  {
    name: 'คำถามที่พบบ่อย',
    to: 'faq',
  },
  {
    name: 'ช่องทางการติดต่อ',
    to: 'contact',
  },
]

const Navbar: React.FC = (): JSX.Element => {
  const [isExpand, setExpand] = useState<boolean>(false)

  const { auth } = useAuth()

  const Image = () => {
    return (
      <Link to={BASE_PATH} onClick={() => animateScroll.scrollToTop()}>
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
      <a href={import.meta.env.VITE_BACKEND_URL + '/auth/google'} rel="noreferrer" className={styles.nav}>
        <Text className={styles.nav}>ลงทะเบียน</Text>
      </a>
    )
  }

  const renderNavLinks = navLinks.map((item: INavLink, i: number) => {
    return (
      <ScrollLink to={item.to} key={i} spy smooth>
        <Text className={styles.nav}>{item.name}</Text>
      </ScrollLink>
    )
  })

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
            {renderNavLinks}
            {isTodayRegis() ? (
              <NavRegisMobile />
            ) : (
              <Text className={styles.nav}>
                {isPast(new Date(REGIS_END_DATE)) ? 'ปิดรับสมัครแล้ว' : 'ยังไม่เปิดรับสมัคร'}
              </Text>
            )}
          </Flex>
        </div>
      ) : (
        <Flex justify="between" align="center" className={styles.navbar}>
          <Image />
          <Flex gap="5" className={styles.nav_desktop}>
            {renderNavLinks}
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
              <div className={styles.nav_desktop}>
                <Text>{isPast(new Date(REGIS_END_DATE)) ? 'ปิดรับสมัครแล้ว' : 'ยังไม่เปิดรับสมัคร'}</Text>
              </div>
            )}
          </div>
        </Flex>
      )}
    </>
  )
}

export default Navbar
