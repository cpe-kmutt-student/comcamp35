import React from 'react'
import FAQAccordion, { IFAQ } from 'src/components/FAQAccordion'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './faq.module.scss'

const faqContents: IFAQ[] = [
  {
    question: 'ค่ายเปิดรับสมัครถึงวันไหน',
    answer: 'ค่ายเปิดรับสมัครตั้งแต่วันที่ 1 - 10 มีนาคม 2567 ค่ะ',
  },
  {
    question: 'ค่ายเปิดรับสมัครถึงวันไหน',
    answer: 'ค่ายเปิดรับสมัครตั้งแต่วันที่ 1 - 10 มีนาคม 2567 ค่ะ',
  },
  {
    question: 'ค่ายเปิดรับสมัครถึงวันไหน',
    answer: 'ค่ายเปิดรับสมัครตั้งแต่วันที่ 1 - 10 มีนาคม 2567 ค่ะ',
  },
  {
    question: 'ค่ายเปิดรับสมัครถึงวันไหน',
    answer: 'ค่ายเปิดรับสมัครตั้งแต่วันที่ 1 - 10 มีนาคม 2567 ค่ะ',
  },
  {
    question: 'ค่ายเปิดรับสมัครถึงวันไหน',
    answer: 'ค่ายเปิดรับสมัครตั้งแต่วันที่ 1 - 10 มีนาคม 2567 ค่ะ',
  },
  {
    question: 'ค่ายเปิดรับสมัครถึงวันไหน',
    answer: 'ค่ายเปิดรับสมัครตั้งแต่วันที่ 1 - 10 มีนาคม 2567 ค่ะ',
  },
]

const Faq: React.FC = () => {
  return (
    <Flex direction="column" justify="center" align="center" className={styles.faq}>
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        FAQ
      </Heading>
      <div className={styles.content}>
        <FAQAccordion items={faqContents} />
      </div>
    </Flex>
  )
}

export default Faq
