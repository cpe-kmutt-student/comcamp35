import React, { useMemo } from 'react'
import FAQAccordion, { IFaq } from 'src/components/FAQAccordion'
import { Flex, Heading } from '@radix-ui/themes'
import styles from './faq.module.scss'
import { Link } from 'react-router-dom'
import { FAQ_PATH } from 'src/constants/router'
import { faqContents } from './faqContents'

type Props = {
  id: string
}

const FrequentlyAskedQuestionHome: React.FC<Props> = ({ id }: Props): JSX.Element => {
  const accordionContents: IFaq[] = useMemo(() => {
    return faqContents.slice(0, 6)
  }, [])

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className={styles.faq}
      mt={{ initial: '9', md: '0' }}
      id={id}
    >
      <Heading size={{ initial: '8', md: '9' }} className="title" align="center">
        FAQ
      </Heading>
      <div className={styles.content}>
        <FAQAccordion items={accordionContents} />
      </div>
      <Link to={FAQ_PATH} className={styles.more}>
        คำถามเพิ่มเติม
      </Link>
    </Flex>
  )
}

export default FrequentlyAskedQuestionHome
