import React from 'react'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { BASE_PATH } from 'src/constants/router'

const ResultsAnnouncement: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.faq}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        ประกาศผลการคัดเลือก ComCamp 35
      </Heading>
      <div className={styles.content}>อ้ายยังบ่ใส่ข้อมูล</div>
      <Link to={BASE_PATH} className={styles.back}>
        ย้อนกลับ
      </Link>
    </Flex>
  )
}

export default ResultsAnnouncement
