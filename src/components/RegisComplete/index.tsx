import { Heading, Text } from '@radix-ui/themes'
import styles from './index.module.scss'
import Check from 'src/assets/accepted.png'
import { BASE_PATH } from 'src/constants/router'
import { Link } from 'react-router-dom'

const RegisComplete: React.FC = (): JSX.Element => {
  return (
    <div className={styles.regisComplete}>
      <img src={Check} alt="image" width={200} height={200} />
      <div className={styles.text}>
        <Heading size="8">บันทึกการสมัครสำเร็จ</Heading>
        <Text>โปรดติดตามการประกาศผลทางอีเมล และ Social media</Text>
        <Link to={BASE_PATH} replace className={styles.back}>
          กลับสู่หน้าเว็บ
        </Link>
      </div>
    </div>
  )
}

export default RegisComplete
