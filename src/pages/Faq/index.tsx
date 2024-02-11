import React from 'react'
import FAQAccordion from 'src/components/FAQAccordion'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { BASE_PATH } from 'src/constants/router'
import { faqContents } from 'src/components/Home/Content/faq'

const FrequentlyAskedQuestionFull: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.faq}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        FAQ
      </Heading>
      <div className={styles.content}>
        <FAQAccordion items={faqContents} />
      </div>
      <Link to={BASE_PATH} className={styles.back}>
        ย้อนกลับ
      </Link>
    </Flex>
  )
}

export default FrequentlyAskedQuestionFull
