import { useAuth } from 'src/context/auth'
import styles from './index.module.scss'
import GeneralForm, { IGeneralForm } from 'src/components/GeneralForm'
import { useState } from 'react'
import { apiInstance } from 'src/lib/axios'
import { Avatar, Box, Container, Flex, Heading } from '@radix-ui/themes'
import SignOutButton from 'src/components/SignOutButton'
import { errorAlert, savedAlert } from 'src/lib/toast'
import GuardianForm, { IGuardianForm } from 'src/components/GuardianForm'
import ReactGA from 'react-ga4'
import EducationForm, { IEducationForm } from 'src/components/EducationForm'
import QuestionForm, { IQuestionForm } from 'src/components/QuestionForm'
import FileUpload, { IFileUpload } from 'src/components/FileUpload'
import RegisComplete from 'src/components/RegisComplete'
import { MajorEnum } from 'src/components/EducationForm/utils/type'

const Register: React.FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isSubmitting, setSubmit] = useState<boolean>(false)
  const { auth } = useAuth()

  ReactGA.send({ hitType: 'pageview', page: '/', title: 'Registration page' })

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

  const onGuardianFormSubmit = async (values: IGuardianForm) => {
    setSubmit(true)

    try {
      await apiInstance.post('/guardian', values)
      setCurrentStep(currentStep + 1)
      setSubmit(false)
      savedAlert()
    } catch (err) {
      errorAlert()
      setSubmit(false)
    }
  }

  const onQuestionFormSubmit = async (values: IQuestionForm) => {
    setSubmit(true)

    try {
      await apiInstance.post('/question', values)
      setCurrentStep(currentStep + 1)
      setSubmit(false)
      savedAlert()
    } catch (err) {
      errorAlert()
      setSubmit(false)
    }
  }

  const onEducationFormSubmit = async (values: IEducationForm) => {
    const { school_name, major, degree, gpax, otherMajor } = values
    const newValues = {
      school_name,
      major: major === MajorEnum.ouou ? otherMajor : major,
      gpax,
      degree,
    }
    setSubmit(true)

    try {
      await apiInstance.post('/education', newValues)
      savedAlert()
      setSubmit(false)
      setCurrentStep(currentStep + 1)
    } catch (err) {
      errorAlert()
      setSubmit(false)
    }
  }

  const fileUpload = async (file: File, type: string): Promise<boolean> => {
    const body = new FormData()

    body.append('file', file)
    body.append('type', type)

    return await apiInstance
      .post('/file/upload', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        savedAlert('อัพโหลดเอกสารสำเร็จ')
        return true
      })
      .catch((err) => {
        errorAlert(err.message)
        return false
      })
  }

  const onFileUploadSubmit = async (values: IFileUpload) => {
    setSubmit(true)

    const newFile: { type: string; file: File }[] = [
      {
        type: 'certificate',
        file: values.certificate as File,
      },
      {
        type: 'citizenship',
        file: values.citizenship as File,
      },
      {
        type: 'image',
        file: values.image as File,
      },
      {
        type: 'parents',
        file: values.parents as File,
      },
      {
        type: 'transcript',
        file: values.transcript as File,
      },
    ]

    return await Promise.all(newFile.map((form: { type: string; file: File }) => fileUpload(form.file, form.type)))
      .then((res) => {
        if (res.map((res) => res === true)) {
          setCurrentStep(currentStep + 1)
          savedAlert()
          setSubmit(false)
        } else {
          errorAlert()
          setSubmit(false)
        }
      })
      .catch(() => {
        errorAlert()
        setSubmit(false)
      })
  }

  const goBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const stepFilter = () => {
    switch (currentStep) {
      case 0:
        return <GeneralForm onSubmit={onGeneralFormSubmit} isSubmitting={isSubmitting} />
      case 1:
        return <GuardianForm onSubmit={onGuardianFormSubmit} goBack={goBack} isSubmitting={isSubmitting} />
      case 2:
        return <EducationForm onSubmit={onEducationFormSubmit} goBack={goBack} isSubmitting={isSubmitting} />
      case 3:
        return (
          <FileUpload
            onSubmit={onFileUploadSubmit}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            setCurrentStep={setCurrentStep}
          />
        )
      case 4:
        return <QuestionForm onSubmit={onQuestionFormSubmit} goBack={goBack} isSubmitting={isSubmitting} />
      case 5:
        return <RegisComplete />
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
      <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }} className={styles.form}>
        <Container size="4">{auth.is_registered ? <RegisComplete /> : stepFilter()}</Container>
      </Box>
      {!auth.is_registered && (
        <Heading size="5" align="center">
          {currentStep + 1} of 6
        </Heading>
      )}
    </div>
  )
}

export default Register
