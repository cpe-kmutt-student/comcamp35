import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import Logo from 'src/assets/logo.svg'
import { BASE_PATH } from 'src/constants/router'
import { Heading } from '@radix-ui/themes'

const NotFoundPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.content}>
        <img src={Logo} alt="logo" />
        <Heading size="9" className="title">
          404 NOT FOUND
        </Heading>
        <Heading size="8" className="title">
          WHY ARE YOU HERE?
        </Heading>
        <button onClick={() => navigate(BASE_PATH, { replace: true })}>กลับสู่หน้าหลัก</button>
      </div>
    </div>
  )
}

export default NotFoundPage
