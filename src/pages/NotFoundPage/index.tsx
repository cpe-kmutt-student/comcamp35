import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import Logo from 'src/assets/logo.svg'
import { BASE_PATH } from 'src/constants/router'
import { Button, Flex, Heading } from '@radix-ui/themes'

const NotFoundPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.content}>
        <img src={Logo} alt="logo" />
        <Heading size="9" className={[styles.text, 'title'].join(' ')}>
          404 NOT FOUND
        </Heading>
        <Heading size="7" className={[styles.text, 'title'].join(' ')}>
          WHY ARE YOU HERE?
        </Heading>
        <Flex gap="3" align="center" mt="5">
          <Button variant="surface" onClick={() => navigate(-1)}>
            ย้อนกลับ
          </Button>
          <Button onClick={() => navigate(BASE_PATH, { replace: true })}>กลับสู่หน้าหลัก</Button>
        </Flex>
      </div>
    </div>
  )
}

export default NotFoundPage
