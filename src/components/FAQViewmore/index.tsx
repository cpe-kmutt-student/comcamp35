import React from 'react'
import FAQAccordion, { IFAQ } from 'src/components/FAQAccordion'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { BASE_PATH } from 'src/constants/router'
import faqContents_all from '../FAQContents/FAQContents'

const faqContents: IFAQ[] = faqContents_all.slice(5, 12) // [0, 5]

const Faqviewmore: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.faq}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        FAQ
      </Heading>
      <div className={styles.content}>
        <FAQAccordion items={faqContents} />
      </div>
      <Link to={BASE_PATH} className={styles.but}>
        <div>{'ย้อนกลับ 💻'}</div>
      </Link>
    </Flex>
  )
}

export default Faqviewmore
