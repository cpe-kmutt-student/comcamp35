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
import FileUpload, { IFileData, IFileUpload } from 'src/components/FileUpload'
import RegisComplete from 'src/components/RegisComplete'
import { MajorEnum } from 'src/components/EducationForm/utils/type'
import { uploadToMirai } from 'src/lib/mirai'
import AcademicForm, { IAcademic } from 'src/components/AcademicQuestion'
import Policy from 'src/components/Policy'
import { InsuranceEnum } from 'src/components/GeneralForm/utils/type'

const Register: React.FC = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isSubmitting, setSubmit] = useState<boolean>(false)
  const { auth } = useAuth()

  ReactGA.send({ hitType: 'pageview', page: '/', title: 'Registration page' })

  const onGeneralFormSubmit = async (values: IGeneralForm) => {
    const {
      prefix,
      first_name,
      middle_name,
      last_name,
      nickname,
      birth_date,
      tel,
      address,
      travel,
      shirt_size,
      can_bring_laptop,
      food_allergy,
      special_food_needs,
      disease,
      personal_drug,
      drug_allergy,
      insurance,
      insuranceName,
    } = values

    const newValues = {
      prefix,
      first_name,
      middle_name,
      last_name,
      nickname,
      birth_date,
      tel,
      address,
      travel,
      shirt_size,
      can_bring_laptop,
      food_allergy,
      special_food_needs,
      disease,
      personal_drug,
      drug_allergy,
      insurance: insurance === InsuranceEnum.OTHER ? insuranceName : insurance,
    }

    setSubmit(true)

    try {
      await apiInstance.post('/form', newValues)
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

  const fileUpload = async (file: string | File | undefined, type: string, isFile: boolean): Promise<boolean> => {
    if (isFile) {
      const body = await uploadToMirai(file as File, type)

      return await apiInstance
        .post('/file/upload', body)
        .then(() => {
          savedAlert('อัพโหลดเอกสารสำเร็จ')
          return true
        })
        .catch(({ message }) => {
          errorAlert(message)
          return false
        })
    } else {
      return await apiInstance
        .post('/file/upload', { type, url: file as string })
        .then(() => {
          savedAlert('อัพโหลดเอกสารสำเร็จ')
          return true
        })
        .catch(({ message }) => {
          errorAlert(message)
          return false
        })
    }
  }

  const onFileUploadSubmit = async (values: IFileUpload) => {
    setSubmit(true)

    const newFile: { type: string; file: string | File | undefined; isFile: boolean }[] = [
      {
        type: 'certificate',
        file:
          values.certificate === null
            ? values.currentFiles.find((item: IFileData) => item.type === 'certificate')?.url
            : values.certificate,
        isFile: values.certificate === null ? false : true,
      },
      {
        type: 'citizenship',
        file:
          values.citizenship === null
            ? values.currentFiles.find((item: IFileData) => item.type === 'citizenship')?.url
            : values.citizenship,
        isFile: values.citizenship === null ? false : true,
      },
      {
        type: 'image',
        file:
          values.image === null
            ? values.currentFiles.find((item: IFileData) => item.type === 'image')?.url
            : values.image,
        isFile: values.image === null ? false : true,
      },
      {
        type: 'parents',
        file:
          values.parents === null
            ? values.currentFiles.find((item: IFileData) => item.type === 'parents')?.url
            : values.parents,
        isFile: values.parents === null ? false : true,
      },
      {
        type: 'transcript',
        file:
          values.transcript === null
            ? values.currentFiles.find((item: IFileData) => item.type === 'transcript')?.url
            : values.transcript,
        isFile: values.transcript === null ? false : true,
      },
    ]

    return await Promise.all(
      newFile.map((form: { type: string; file: string | File | undefined; isFile: boolean }) =>
        fileUpload(form.file, form.type, form.isFile),
      ),
    )
      .then((res) => {
        if (res[0] === true) {
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

  const onAcademicUpload = async (values: IAcademic) => {
    setSubmit(true)

    try {
      const res = await fileUpload(values.answer as File, 'academic-answer', true)

      if (res) {
        await apiInstance.patch('/users/register')
        setCurrentStep(currentStep + 1)
        savedAlert()
        setSubmit(false)
      } else {
        errorAlert()
        setSubmit(false)
      }
    } catch (err) {
      errorAlert(err as string)
      setSubmit(false)
    }
  }

  const goBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const stepFilter = () => {
    switch (currentStep) {
      case 0:
        return <Policy currentStep={currentStep} setCurrentStep={setCurrentStep} />
      case 1:
        return <GeneralForm onSubmit={onGeneralFormSubmit} isSubmitting={isSubmitting} />
      case 2:
        return <GuardianForm onSubmit={onGuardianFormSubmit} goBack={goBack} isSubmitting={isSubmitting} />
      case 3:
        return <EducationForm onSubmit={onEducationFormSubmit} goBack={goBack} isSubmitting={isSubmitting} />
      case 4:
        return (
          <FileUpload
            onSubmit={onFileUploadSubmit}
            currentStep={currentStep}
            isSubmitting={isSubmitting}
            setCurrentStep={setCurrentStep}
          />
        )
      case 5:
        return <QuestionForm onSubmit={onQuestionFormSubmit} goBack={goBack} isSubmitting={isSubmitting} />
      case 6:
        return <AcademicForm onSubmit={onAcademicUpload} goBack={goBack} isSubmitting={isSubmitting} />
      case 7:
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
        <Heading size="7">ฟอร์มสมัคร ComCamp 35</Heading>
      </div>
      <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }} className={styles.form}>
        <Container size="4">{auth.is_registered ? <RegisComplete /> : stepFilter()}</Container>
      </Box>
      {!auth.is_registered && (
        <Heading size="5" align="center" my="5">
          {currentStep + 1} of 8
        </Heading>
      )}
    </div>
  )
}

export default Register
