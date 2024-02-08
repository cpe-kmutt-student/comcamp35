import styles from './index.module.scss'
import { useAuth } from 'src/context/auth'
import RegisterButton from '../RegisterButton'
import SignOutButton from '../SignOutButton'
import Logo from 'src/assets/logo.svg'
import { Link } from 'react-router-dom'
import { BASE_PATH } from 'src/constants/router'
import { Button, Flex, Text } from '@radix-ui/themes'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

const Navbar: React.FC = (): JSX.Element => {
  const [isExpand, setExpand] = useState<boolean>(false)

  const { auth } = useAuth()

  return (
    <>
      {isExpand ? (
        <div className={styles.nav_menu}>
          <Flex justify="between" align="center" style={{ padding: '5px 20px' }}>
            <Link to={BASE_PATH}>
              <img className={styles.navbarLogo} alt="Logo" src={Logo} />
            </Link>
            <Button size="3" variant="soft" onClick={() => setExpand(false)}>
              <Cross1Icon />
            </Button>
          </Flex>
          <Flex gap="5" justify="center" align="center" direction="column" style={{ padding: '20px 0' }}>
            <Text className={styles.nav}>HIGHLIGHTS</Text>
            <Text className={styles.nav}>LEARNING</Text>
            <Text className={styles.nav}>CONDITIONS</Text>
            <Text className={styles.nav}>TIMELINE</Text>
            <Text className={styles.nav}>FAQ</Text>
            <Text className={styles.nav}>CONTACT</Text>
          </Flex>
        </div>
      ) : (
        <Flex justify="between" align="center" className={styles.navbar}>
          {/* <h1>ComCamp 35th</h1> */}
          <Link to={BASE_PATH}>
            <img className={styles.navbarLogo} alt="Logo" src={Logo} />
          </Link>
          <Flex gap="5" className={styles.nav_desktop}>
            <Text className={styles.nav}>HIGHLIGHTS</Text>
            <Text className={styles.nav}>LEARNING</Text>
            <Text className={styles.nav}>CONDITIONS</Text>
            <Text className={styles.nav}>TIMELINE</Text>
            <Text className={styles.nav}>FAQ</Text>
            <Text className={styles.nav}>CONTACT</Text>
          </Flex>
          <div>
            <div className={styles.nav_mobile}>
              <Button size="3" variant="soft" onClick={() => setExpand(true)}>
                <HamburgerMenuIcon />
              </Button>
            </div>
            <div className={styles.nav_desktop}>
              {auth.is_authenticated ? (
                <SignOutButton active>ออกจากระบบ</SignOutButton>
              ) : (
                <RegisterButton active>ลงทะเบียน</RegisterButton>
              )}
            </div>
          </div>
        </Flex>
      )}
    </>
  )
}

export default Navbar
