import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import React from 'react'
import styles from './index.module.scss'

export interface IFaq {
  question: string
  answer: string
}

type Props = {
  items: IFaq[]
}
const FAQAccordion: React.FC<Props> = ({ items }: Props): JSX.Element => {
  const renderFaq = items.map((item: IFaq, i: number) => {
    return (
      <Accordion.Item className={styles.AccordionItem} value={`item-${i}`} key={i}>
        <Accordion.AccordionTrigger className={styles.AccordionHeader}>
          {item.question}
          <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
        </Accordion.AccordionTrigger>
        <Accordion.Content className={styles.AccordionContent}>
          <div className={styles.AccordionContentText}>{item.answer}</div>
        </Accordion.Content>
      </Accordion.Item>
    )
  })

  return (
    <Accordion.Root className={styles.AccordionRoot} type="multiple">
      {renderFaq}
    </Accordion.Root>
  )
}

export default FAQAccordion
