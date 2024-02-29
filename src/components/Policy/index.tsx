import React, { useState } from 'react'
import { Button, Checkbox, Flex, Heading } from '@radix-ui/themes'
import styles from './index.module.scss'
import PrivacyPolicy from '../PrivacyPolicy'

type Props = {
  currentStep: number
  setCurrentStep: (step: number) => void
}

const Policy: React.FC<Props> = ({ currentStep, setCurrentStep }: Props): JSX.Element => {
  const [check, setCheck] = useState<boolean>(false)

  return (
    <div className={styles.policy}>
      <Heading size="7" align="center" className={styles.heading}>
        นโยบายข้อมูลส่วนบุคคล
      </Heading>
      <div className={styles.content}>
        <PrivacyPolicy />
      </div>
      <Flex justify="start" align="center" gap="4" my="5">
        <Checkbox checked={check} onCheckedChange={() => setCheck(!check)} className={styles.checkbox} />
        <span className={styles.agreementText}>รับทราบและให้ความยินยอมตามนโยบายความเป็นส่วนตัว</span>
      </Flex>
      <Flex justify="end" align="center" gap="4">
        <Button onClick={() => setCurrentStep(currentStep + 1)} disabled={!check} className={styles.button}>
          ถัดไป
        </Button>
      </Flex>
    </div>
  )
}

export default Policy
