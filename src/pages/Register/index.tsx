import { useAuth } from 'src/context/auth'
import styles from './index.module.scss'
import GeneralForm, { IGeneralForm } from 'src/components/GeneralForm'
import { StepProps, Steps, Typography } from 'antd'
import { useState } from 'react'
import { apiInstance } from 'src/lib/axios'

const stepsInfo: StepProps[] = [
  {
    title: 'ข้อมูลทั่วไป',
  },
  {
    title: 'ข้อมูลผู้ปกครอง',
  },
  {
    title: 'ข้อมูลการศึกษา',
  },
  {
    title: 'อัพโหลดเอกสาร',
  },
]

const Register: React.FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isSubmitting, setSubmit] = useState<boolean>(false)

  const { Title } = Typography
  const { auth } = useAuth()

  const onFormSubmit = async (values: IGeneralForm) => {
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
        return <GeneralForm onSubmit={onFormSubmit} isSubmitting={isSubmitting} />
    }
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.profile}>
        <img src={auth.profile_url} alt="profile" />
        <div>{auth.email}</div>
      </div>
      <div className={styles.header}>
        <Title level={2}>ฟอร์มสมัคร Com Camp 35</Title>
      </div>
      <Steps current={currentStep} items={stepsInfo} style={{ margin: '30px 0' }} />
      <div className={styles.form}>{stepFilter()}</div>
    </div>
  )
}

export default Register
