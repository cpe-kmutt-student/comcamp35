import styles from './index.module.scss'
import { useAuth } from 'src/context/auth'
import RegisterButton from '../RegisterButton'
import Logo from 'src/assets/logo.svg'
import { Link } from 'react-router-dom'
import { BASE_PATH, REGISTER_PATH } from 'src/constants/router'
import { Button, Flex, Text } from '@radix-ui/themes'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

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

  return (
    <>
      {isExpand ? (
        <div className={styles.nav_menu}>
          <Flex justify="between" align="center" direction="row" style={{ padding: '5px 20px' }}>
            <Image />
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
            <Link to={REGISTER_PATH} className={styles.nav}>
              <Text>REGISTRATION</Text>
            </Link>
          </Flex>
        </div>
      ) : (
        <Flex justify="between" align="center" className={styles.navbar}>
          <Image />
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
                <RegisterButton active to={REGISTER_PATH}>
                  ไปยังหน้าสมัคร
                </RegisterButton>
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
