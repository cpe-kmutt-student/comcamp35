import React from 'react'
import styles from './index.module.scss'
import { Button } from '@radix-ui/themes'
import { useFormik } from 'formik'
import FormikTextField from '../Form/Formik/Input'

type Props = {
  onSubmit: (values: IGuardianForm) => void
  isSubmitting: boolean
}

export interface IGuardianForm {
  name: string
  tel: string
  relation: string
  email?: string
  emergency_name: string
  emergency_tel: string
  emergency_relation: string
  emergency_email?: string
}

const initialValues: IGuardianForm = {
  name: '',
  tel: '',
  relation: '',
  email: '',
  emergency_name: '',
  emergency_tel: '',
  emergency_relation: '',
  emergency_email: '',
}

const validate = (values: IGuardianForm) => {
  const errors: Record<string, string> = {}
  if (!values.name) errors.name = 'กรุณาระบุชื่อ'
  if (!values.tel) errors.tel = 'กรุณาระบุเบอร์โทรศัพท์'
  if (!values.relation) errors.relation = 'กรุณาระบุความสัมพันธ์กับผู้สมัคร'
  if (!values.emergency_name) errors.emergency_name = 'กรุณาระบุชื่อผู้ติดต่อฉุกเฉิน'
  if (!values.emergency_tel) errors.emergency_tel = 'กรุณาระบุเบอร์โทรผู้ติดต่อฉุกเฉิน'
  if (!values.emergency_relation) errors.emergency_relation = 'กรุณาระบุความสัมพันธ์ของผู้ติดต่อฉุกเฉิน'

  return errors
}

const GuardianForm: React.FC<Props> = ({ onSubmit, isSubmitting }: Props) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  return (
    <div className={styles.GenForm}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inputGroup}>
          <FormikTextField
            label="ชื่อ"
            name="name"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.name}
            touched={formik.touched.name}
            value={formik.values.name}
          />
          <FormikTextField
            label="เบอร์โทร"
            name="tel"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.tel}
            touched={formik.touched.tel}
            value={formik.values.tel}
          />
          <FormikTextField
            label="ความสัมพันธ์"
            name="relation"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.relation}
            touched={formik.touched.relation}
            value={formik.values.relation}
          />
          <FormikTextField
            label="อีเมลล์"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className={styles.inputGroup}>
          <FormikTextField
            label="ชื่อผู้ติดต่อฉุกเฉิน"
            name="emergency_name"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.emergency_name}
            touched={formik.touched.emergency_name}
            value={formik.values.emergency_name}
          />
          <FormikTextField
            label="เบอร์ติดต่อฉุกเฉิน"
            name="emergency_tel"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.emergency_tel}
            touched={formik.touched.emergency_tel}
            value={formik.values.emergency_tel}
          />
          <FormikTextField
            label="ความสัมพันธ์กับผู้ติดต่อฉุกเฉิน"
            name="emergency_relation"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.emergency_relation}
            touched={formik.touched.emergency_relation}
            value={formik.values.emergency_relation}
          />
          <FormikTextField
            label="อีเมลล์ของผู้ติดต่อฉุกเฉิน"
            name="emergency_email"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.emergency_email}
          />
        </div>

        <div style={{ textAlign: 'right' }}>
          <Button type="submit" disabled={isSubmitting}>
            ถัดไป
          </Button>
        </div>
      </form>
    </div>
  )
}

export default GuardianForm
