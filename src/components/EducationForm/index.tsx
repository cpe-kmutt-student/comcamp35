import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Button, Flex, Heading, Separator } from '@radix-ui/themes'
import { useFormik } from 'formik'
import FormikTextField from '../Form/Formik/Input'
import FormikSelect from '../Form/Formik/Select'
import { apiInstance } from 'src/lib/axios'
import { degreeChoices, majorChoices } from './utils/data'
import { MajorEnum } from './utils/type'

type Props = {
  onSubmit: (values: IEducationForm) => void
  goBack: () => void
  isSubmitting: boolean
}

export interface IEducationForm {
  school_name: string
  major: string
  degree: string
  gpax: string
  otherMajor: string
}

const initialValues: IEducationForm = {
  school_name: '',
  major: '',
  degree: '',
  gpax: '',
  otherMajor: '',
}

const validate = (values: IEducationForm) => {
  const errors: Record<string, string> = {}
  if (!values.school_name) errors.school_name = 'กรุณาระบุชื่อโรงเรียนที่กำลังศึกษาอยู่'
  if (!values.major) errors.major = 'กรุณาระบุสายที่กำลังศึกษา'
  if (!values.degree) errors.degree = 'กรุณาระบุระดับการศึกษาการศึกษา'
  if (!values.gpax) errors.gpax = 'กรุณาระบุเกรดเฉลี่ยสะสม'
  if (values.gpax && isNaN(parseInt(values.gpax))) errors.gpax = 'กรุณากรอกตัวเลขเท่านั้น'
  if (values.gpax && !isNaN(parseInt(values.gpax)) && parseInt(values.gpax) > 4.0)
    errors.gpax = 'เกรดเฉลี่ยต้องไม่เกิน 4.00'
  if (values.gpax && !isNaN(parseInt(values.gpax)) && parseInt(values.gpax) <= 0.0)
    errors.gpax = 'เกรดเฉลี่ยต้องมากกว่า 0.00'
  if (values.major === MajorEnum.ouou && !values.otherMajor) errors.otherMajor = 'กรุณาระบุสาขาที่กำลังศึกษา'

  return errors
}

const EducationForm: React.FC<Props> = ({ onSubmit, isSubmitting, goBack }: Props) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  const [showAdditionalField, setShowAdditionalField] = useState(false)

  const getEducationInfo = useCallback(async () => {
    const { data } = await apiInstance.get('/education')

    const newValues: IEducationForm = {
      school_name: data.school_name ?? '',
      major: Object.values(MajorEnum).includes(data.major) ? data.major : '',
      degree: data.degree ?? '',
      gpax: data.gpax ?? '',
      otherMajor: Object.values(MajorEnum).includes(data.major) ? '' : data.major,
    }

    formik.setValues(newValues)

    if (!Object.values(MajorEnum).includes(data.major)) {
      formik.setFieldValue('major', MajorEnum.ouou)
      setShowAdditionalField(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMajorSelect = (value: string) => {
    formik.setFieldValue('major', value)
    setShowAdditionalField(value === MajorEnum.ouou) // Show additional field if a major is selected
  }

  useEffect(() => {
    getEducationInfo()
  }, [getEducationInfo])

  return (
    <div className={styles.EduForm}>
      <form onSubmit={formik.handleSubmit}>
        <Heading size="5" mt="3">
          ข้อมูลการศึกษา
        </Heading>
        <Separator my="4" size="4" />
        <div className={styles.inputGroup}>
          <FormikTextField
            label="ชื่อโรงเรียนที่กำลังศึกษาอยู่"
            name="school_name"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.school_name}
            touched={formik.touched.school_name}
            value={formik.values.school_name}
          />
          <FormikSelect
            label="ระดับการศึกษา"
            items={degreeChoices}
            placeholder="กรุณาเลือกระดับการศึกษา"
            value={formik.values.degree}
            required
            errors={formik.errors.degree}
            touched={formik.touched.degree}
            onSelect={(value: string) => formik.setFieldValue('degree', value)}
          />
          <FormikTextField
            label="เกรดเฉลี่ยสะสม"
            name="gpax"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.gpax}
            touched={formik.touched.gpax}
            value={formik.values.gpax}
          />
        </div>

        <div className={styles.inputGroup}>
          <FormikSelect
            label="สายที่กำลังศึกษา"
            items={majorChoices}
            placeholder="กรุณาเลือกสายที่กำลังศึกษา"
            value={formik.values.major}
            required
            errors={formik.errors.major}
            touched={formik.touched.major}
            onSelect={handleMajorSelect}
          />
          {showAdditionalField && (
            <FormikTextField
              label="กรุณาระบุชื่อสาขาที่กำลังศึกษา"
              name="otherMajor"
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              errors={formik.errors.otherMajor}
              touched={formik.touched.otherMajor}
              value={formik.values.otherMajor}
            />
          )}
        </div>

        <Flex justify="end" align="center" gap="4">
          <Button onClick={goBack} variant="outline">
            ย้อนกลับ
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            ถัดไป
          </Button>
        </Flex>
      </form>
    </div>
  )
}

export default EducationForm
