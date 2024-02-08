import { useAuth } from 'src/context/auth'
import styles from './index.module.scss'
import GeneralForm, { IGeneralForm } from 'src/components/GeneralForm'
import { useState } from 'react'
import { apiInstance } from 'src/lib/axios'
import { Avatar, Box, Container, Flex, Heading } from '@radix-ui/themes'

// const stepsInfo: StepProps[] = [
//   {
//     title: 'ข้อมูลทั่วไป',
//   },
//   {
//     title: 'ข้อมูลผู้ปกครอง',
//   },
//   {
//     title: 'ข้อมูลการศึกษา',
//   },
//   {
//     title: 'อัพโหลดเอกสาร',
//   },
// ]

const Register: React.FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isSubmitting, setSubmit] = useState<boolean>(false)
  const { auth } = useAuth()

  const onGeneralFormSubmit = async (values: IGeneralForm) => {
    setSubmit(true)

    try {
      await apiInstance.post('/form', values)
      setCurrentStep(currentStep + 1)
      setSubmit(false)
    } catch (err) {
      setSubmit(false)
    }
  }

  const stepFilter = () => {
    switch (currentStep) {
      case 0:
        return <GeneralForm onSubmit={onGeneralFormSubmit} isSubmitting={isSubmitting} />
    }
  }

  return (
    <div className={styles.registerPage}>
      <Flex className={styles.profile} align="center" gap="5" style={{ marginTop: '8rem' }}>
        <Avatar src={auth.profile_url} fallback={auth.email.substring(0, 3)} size="5" radius="large" />
        <div>{auth.email}</div>
      </Flex>
      <div className={styles.header}>
        <Heading size="7">ฟอร์มสมัคร Com Camp 35</Heading>
      </div>
      {/* <Steps current={currentStep} items={stepsInfo} style={{ margin: '30px 0' }} /> */}
      <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }} className={styles.form}>
        <Container size="4">{stepFilter()}</Container>
      </Box>
    </div>
  )
}

export default Register
