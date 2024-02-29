import { Button, Flex, Heading, Text } from '@radix-ui/themes'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { POLICY_PATH } from 'src/constants/router'
import { useEffect, useState } from 'react'

const CookieConsent: React.FC = (): JSX.Element => {
  const [isShow, setShow] = useState<boolean>(true)

  const consent = localStorage.getItem('cookie-consent')

  useEffect(() => {
    if (consent) {
      setShow(consent === 'true')
    } else {
      localStorage.setItem('cookie-consent', 'true')
    }
  }, [consent])

  const consentAcceptHandler = () => {
    setShow(false)
    localStorage.setItem('cookie-consent', 'false')
  }

  return (
    <div className={styles.cookieConsent} style={{ display: isShow ? 'block' : 'none' }}>
      <Heading size="4" mb="3">
        คุกกี้
      </Heading>
      <Text>
        เว็บไซต์ Comcamp 35 มีการใช้งานคุกกี้ (Cookies)
        พื้นฐานที่จําเป็นซึ่งช่วยให้สามารถเข้าใช้เว็บไซต์ได้โดยการเปิดใช้ฟังก์ชันพื้นฐานต่างๆ
        และการเข้าสู่ส่วนที่ปลอดภัยของเว็บไซต์ หากไม่มีคุกกี้เหล่านี้ เว็บไซต์จะไม่สามารถทำงานได้อย่างถูกต้อง{' '}
        <Link to={POLICY_PATH}>นโยบายข้อมูลส่วนบุคคล</Link>
      </Text>
      <Flex align="center" justify="end">
        <Button onClick={consentAcceptHandler}>ยอมรับ</Button>
      </Flex>
    </div>
  )
}

export default CookieConsent
