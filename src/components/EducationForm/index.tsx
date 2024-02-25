import React, { useCallback, useEffect } from 'react'
import styles from './index.module.scss'
import { Button, Flex, Heading, Separator } from '@radix-ui/themes'
import { useFormik } from 'formik'
import FormikTextField from '../Form/Formik/Input'
import FormikNumber from '../Form/Formik/Input/number'
import FormikSelect from '../Form/Formik/Select'
import { apiInstance } from 'src/lib/axios'
import { degreeChoices } from './utils/data'

type Props = {
  onSubmit: (values: IEducationForm) => void
  goBack: () => void
  isSubmitting: boolean
}

export interface IEducationForm {
  school_name: string
  major: string
  degree: string
  gpax: number
}

const initialValues: IEducationForm = {
  school_name: '',
  major: '',
  degree: '',
  gpax: 0,
}

const validate = (values: IEducationForm) => {
  const errors: Record<string, string> = {}
  if (!values.school_name) errors.school_name = 'กรุณาระบุชื่อโรงเรียนที่กำลังศึกษาอยู่'
  if (!values.major) errors.major = 'กรุณาระบุสายที่กำลังศึกษา'
  if (!values.degree) errors.degree = 'กรุณาระบุวุฒิการศึกษา'
  if (values.gpax === 0) errors.gpax = 'กรุณาระบุเกรดเฉลี่ยสะสม'

  return errors
}

const EducationForm: React.FC<Props> = ({ onSubmit, isSubmitting, goBack }: Props) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  const getEducationInfo = useCallback(async () => {
    const { data } = await apiInstance.get('/education')

    const newValues: IEducationForm = {
      school_name: data.school_name ?? '',
      major: data.major ?? '',
      degree: data.degree ?? '',
      gpax: data.gpax ?? 0,
    }

    formik.setValues(newValues)
  }, [])

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
          <FormikTextField
            label="สายที่กำลังศึกษา"
            name="major"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.major}
            touched={formik.touched.major}
            value={formik.values.major}
          />
          <div className={styles.inputGroup}>
            <FormikSelect
              label="วุฒิการศึกษา"
              items={degreeChoices}
              placeholder="กรุณาเลือกคำนำหน้าชื่อ"
              value={formik.values.degree}
              required
              errors={formik.errors.degree}
              touched={formik.touched.degree}
              onSelect={(value: string) => formik.setFieldValue('degree', value)}
            />
          </div>
          <FormikNumber
            label="เกรดเฉลี่ยสะสม"
            name="gpax"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.degree}
            touched={formik.touched.degree}
            value={formik.values.gpax}
          />
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
