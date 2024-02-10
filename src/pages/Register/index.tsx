import { useAuth } from 'src/context/auth'
import styles from './index.module.scss'
import GeneralForm, { IGeneralForm } from 'src/components/GeneralForm'
import { useState } from 'react'
import { apiInstance } from 'src/lib/axios'
import { Avatar, Box, Container, Flex, Heading } from '@radix-ui/themes'
import SignOutButton from 'src/components/SignOutButton'
import { errorAlert, savedAlert } from 'src/lib/toast'

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
      savedAlert()
    } catch {
      errorAlert()
      setSubmit(false)
    }
  }

  // const onGuardianFormSubmit = async (values: IGuardianForm) => {
  //   setSubmit(true)

  //   try {
  //     await apiInstance.post('/form', values)
  //     setCurrentStep(currentStep + 1)
  //     setSubmit(false)
  //   } catch (err) {
  //     setSubmit(false)
  //   }
  // }

  const stepFilter = () => {
    switch (currentStep) {
      case 0:
        return <GeneralForm onSubmit={onGeneralFormSubmit} isSubmitting={isSubmitting} />
      // case 1:
      //   return <GuardianForm onSubmit={onGuardianFormSubmit} isSubmitting={isSubmitting} />
    }
  }

  return (
    <div className={styles.registerPage}>
      <Flex
        direction={{ initial: 'column', sm: 'row' }}
        justify={{ initial: 'center', sm: 'between' }}
        align="center"
        gap={{ initial: '5', sm: undefined }}
        style={{ marginTop: '8rem' }}
      >
        <Flex className={styles.profile} align="center" gap="5">
          <Avatar src={auth.profile_url} fallback={auth.email?.substring(0, 3)} size="5" radius="large" />
          <div>{auth.email}</div>
        </Flex>
        <SignOutButton active>ออกจากระบบ</SignOutButton>
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
