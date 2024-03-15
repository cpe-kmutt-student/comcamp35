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
  const renderresult = ResultList.map((item, i) => (
    <div key={i} className={styles.content}>
      <div>
        {item.Firstname}
        {` `}
        {item.Lastname}
      </div>
    </div>
  ))
  return (
    <Flex direction="column" justify="center" align="center" className={styles.announcement}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        ประกาศผลการคัดเลือก ComCamp 35
      </Heading>
      <hr />
      <div className={styles.content}>{renderresult}</div>
      <Link to={BASE_PATH} className={active ? styles.buttonActive : styles.button}>
        ย้อนกลับ
      </Link>
    </Flex>
  )
}

export default ResultsAnnouncement
