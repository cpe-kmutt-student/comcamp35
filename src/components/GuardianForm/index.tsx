import React, { useCallback, useEffect } from 'react'
import styles from './index.module.scss'
import { Button, Flex, Heading, Separator } from '@radix-ui/themes'
import { useFormik } from 'formik'
import FormikTextField from '../Form/Formik/Input'
import { apiInstance } from 'src/lib/axios'

type Props = {
  onSubmit: (values: IGuardianForm) => void
  goBack: () => void
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
  if (values.tel && Number.isNaN(Number(values.tel))) errors.tel = 'หมายเลขโทรศัพท์ต้องเป็นตัวเลขเท่านั้น'
  if (/^(\+?\d{1,3}|\d{1,4})$/.test(values.tel)) errors.tel = 'ไม่ต้องใส่รหัสประเทศ'
  if (values.tel.length != 10) errors.tel = 'เบอร์โทรศัพท์ต้องเท่ากับ 10 หลัก'

  if (!values.relation) errors.relation = 'กรุณาระบุความสัมพันธ์กับผู้สมัคร'

  if (!values.emergency_name) errors.emergency_name = 'กรุณาระบุชื่อผู้ติดต่อฉุกเฉิน'
  if (!values.emergency_tel) errors.emergency_tel = 'กรุณาระบุเบอร์โทรผู้ติดต่อฉุกเฉิน'
  if (values.emergency_tel && Number.isNaN(Number(values.emergency_tel)))
    errors.emergency_tel = 'หมายเลขโทรศัพท์ต้องเป็นตัวเลขเท่านั้น'
  if (/^(\+?\d{1,3}|\d{1,4})$/.test(values.emergency_tel)) errors.emergency_tel = 'ไม่ต้องใส่รหัสประเทศ'
  if (values.emergency_tel.length != 10) errors.emergency_tel = 'เบอร์โทรศัพท์ต้องเท่ากับ 10 หลัก'

  if (!values.emergency_relation) errors.emergency_relation = 'กรุณาระบุความสัมพันธ์ของผู้ติดต่อฉุกเฉิน'
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'ที่อยู่อีเมลที่ไม่ถูกต้อง'
  if (values.emergency_email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emergency_email))
    errors.emergency_email = 'ที่อยู่อีเมลที่ไม่ถูกต้อง'
  return errors
}

const GuardianForm: React.FC<Props> = ({ onSubmit, isSubmitting, goBack }: Props) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  const getGuardianInfo = useCallback(async () => {
    const { data } = await apiInstance.get('/guardian')

    const newValues: IGuardianForm = {
      name: data.name ?? '',
      tel: data.tel ?? '',
      relation: data.relation ?? '',
      email: data.email ?? '',
      emergency_name: data.emergency_name ?? '',
      emergency_tel: data.emergency_tel ?? '',
      emergency_relation: data.emergency_relation ?? '',
      emergency_email: data.emergency_email ?? '',
    }

    formik.setValues(newValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getGuardianInfo()
  }, [getGuardianInfo])

  return (
    <div className={styles.GenForm}>
      <form onSubmit={formik.handleSubmit}>
        <Heading size="6" className={styles.Heading}>
          ข้อมูลผู้ปกครอง
        </Heading>
        <Separator my="4" size="4" />
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
            label="อีเมลล์ (ถ้ามี)"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.email}
            touched={formik.touched.email}
            value={formik.values.email}
          />
        </div>

        <Heading size="6" className={styles.Heading2}>
          ข้อมูลผู้ปกครองที่ติดต่อได้ในกรณีฉุกเฉิน
        </Heading>
        <Separator my="4" size="4" />
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
            label="อีเมลล์ของผู้ติดต่อฉุกเฉิน (ถ้ามี)"
            name="emergency_email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.emergency_email}
            errors={formik.errors.emergency_email}
            touched={formik.touched.emergency_email}
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

export default GuardianForm
