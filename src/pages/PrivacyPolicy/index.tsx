import React from 'react'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { BASE_PATH } from 'src/constants/router'
import PrivacyPolicy from 'src/components/PrivacyPolicy'

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.policy}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        Privacy Policy
      </Heading>
      <div className={styles.content}>
        <PrivacyPolicy />
      </div>
      <Link to={BASE_PATH} className={styles.back}>
        ย้อนกลับ
      </Link>
    </Flex>
  )
}

export default PrivacyPolicyPage
