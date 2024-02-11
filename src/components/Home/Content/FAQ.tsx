import React from 'react'
import FAQAccordion, { IFAQ } from 'src/components/FAQAccordion'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './faq.module.scss'
import { Link } from 'react-router-dom'
import { FAQ_PATH } from 'src/constants/router'
import faqContents_all from 'src/components/FAQContents/FAQContents'

const faqContents: IFAQ[] = faqContents_all.slice(0, 5) // [0, 5]

const Faq: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.faq}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        FAQ
      </Heading>
      <div className={styles.content}>
        <FAQAccordion items={faqContents} />
      </div>
      <Link to={FAQ_PATH} className={styles.but}>
        <div>{'คำถามเพิ่มเติม  💬'}</div>
      </Link>
    </Flex>
  )
}

export default Faq
