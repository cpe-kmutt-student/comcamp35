import React from 'react'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { BASE_PATH } from 'src/constants/router'
import { ResultList } from './resultlist'

type Props = {
  active?: boolean
}

const ResultsAnnouncement: React.FC<Props> = (active) => {
  const renderresult = (
    <table className={styles.content}>
      <thead>
        <tr className={styles.tableHeader}>
          <th>ลำดับ</th>
          <th>ชื่อจริง</th>
          <th>นามสกุล</th>
          <th>ชื่อเล่น</th>
        </tr>
      </thead>
      <tbody>
        {ResultList.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.Firstname}</td>
            <td>{item.Lastname}</td>
            <td>{item.Nickname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <Flex direction="column" className={styles.announcement}>
      <Heading size={{ initial: '8', md: '9' }} className={styles.header} align="center">
        ประกาศผลการคัดเลือก ComCamp 35
      </Heading>
      <hr />
      <div className={styles.content}>{renderresult}</div>
      <hr />
      <Link to={BASE_PATH} className={active ? styles.buttonActive : styles.button}>
        ย้อนกลับ
      </Link>
    </Flex>
  )
}

export default ResultsAnnouncement
