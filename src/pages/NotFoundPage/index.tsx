import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import LOGO from 'src/assets/logo.webp'
import { BASE_PATH } from 'src/constants/router'
import { Typography } from 'antd'

const NotFoundPage: React.FC = (): JSX.Element => {
  const { Title } = Typography

  const navigate = useNavigate()

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.content}>
        <img src={LOGO} alt="logo" />
        <Title level={1} className="title">
          404 NOT FOUND
        </Title>
        <Title level={2} className="title">
          WHY ARE YOU HERE?
        </Title>
        <button onClick={() => navigate(BASE_PATH, { replace: true })}>กลับสู่หน้าหลัก</button>
      </div>
    </div>
  )
}

export default NotFoundPage
