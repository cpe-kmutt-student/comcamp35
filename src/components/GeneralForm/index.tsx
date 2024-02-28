import React, { useCallback, useEffect } from 'react'
import styles from './index.module.scss'
import { Button, Checkbox, Flex } from '@radix-ui/themes'
import { useFormik } from 'formik'
import Label from '../Form/Label'
import ErrorMessage from '../Form/ErrorMessage'
import DatePicker from '../Form/DatePicker'
import { insuranceChoices, prefixChoices, shirtSizeChoices } from './utils/data'
import FormikSelect from '../Form/Formik/Select'
import FormikTextField from '../Form/Formik/Input'
import { apiInstance } from 'src/lib/axios'

type Props = {
  onSubmit: (values: IGeneralForm) => void
  isSubmitting: boolean
}

export interface IGeneralForm {
  prefix: string
  first_name: string
  middle_name?: string
  last_name: string
  nickname: string
  birth_date: Date | undefined
  tel: string
  address: string
  travel: string
  shirt_size: string
  can_bring_laptop: boolean
  food_allergy?: string
  special_food_needs?: string
  disease?: string
  personal_drug?: string
  drug_allergy?: string
  insurance: string
}

const initialValues: IGeneralForm = {
  prefix: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  nickname: '',
  birth_date: undefined,
  tel: '',
  address: '',
  travel: '',
  shirt_size: '',
  can_bring_laptop: false,
  food_allergy: '',
  special_food_needs: '',
  disease: '',
  personal_drug: '',
  drug_allergy: '',
  insurance: '',
}

const validate = (values: IGeneralForm) => {
  const errors: Record<string, string> = {}
  if (!values.prefix) errors.prefix = 'กรุณาระบุคำนำหน้าชื่อ'
  if (!values.first_name) errors.first_name = 'กรุณาระบุชื่อจริง'
  if (!values.last_name) errors.last_name = 'กรุณาระบุนามสกุล'
  if (!values.nickname) errors.nickname = 'กรุณาระบุชื่อเล่น'
  if (!values.tel) errors.tel = 'กรุณาระบุเบอร์โทรศัพท์'
  if (values.tel && isNaN(parseInt(values.tel))) errors.tel = 'หมายเลขโทรศัพท์ต้องเป็นตัวเลขเท่านั้น'
  if (/^(\+?\d{1,3}|\d{1,4})$/.test(values.tel)) errors.tel = 'ไม่ต้องใส่รหัสประเทศ'
  if (values.tel.length > 10) errors.tel = 'เบอโทรศัพท์ต้องเท่ากับ 10 หลัก'
  if (!values.birth_date) errors.birth_date = 'กรุณาระบุวันเกิด'
  if (!values.address) errors.address = 'กรุณาระบุที่อยู่'
  if (!values.shirt_size) errors.shirt_size = 'กรุณาระบุไซส์เสื้อ'
  if (!values.travel) errors.travel = 'กรุณาระบุวิธีการเดินทางมามหาวิทยาลัย'
  if (!values.insurance) errors.insurance = 'กรุณาระบุสิทธิการรักษา'

  return errors
}

const GeneralForm: React.FC<Props> = ({ onSubmit, isSubmitting }: Props) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  const getGeneralInfo = useCallback(async () => {
    const { data: userInfo } = await apiInstance.get('/users/info')
    const { data: generalInfo } = await apiInstance.get('/form')

    const newValues: IGeneralForm = {
      prefix: userInfo.prefix ?? '',
      first_name: userInfo.first_name ?? '',
      middle_name: userInfo.middle_name ?? '',
      last_name: userInfo.last_name ?? '',
      nickname: userInfo.nickname ?? '',
      birth_date: generalInfo.birth_date ? new Date(generalInfo.birth_date) : undefined,
      tel: generalInfo.tel ?? '',
      address: generalInfo.address ?? '',
      travel: generalInfo.travel ?? '',
      shirt_size: generalInfo.shirt_size ?? '',
      can_bring_laptop: generalInfo.can_bring_laptop ?? false,
      food_allergy: generalInfo.food_allergy ?? '',
      special_food_needs: generalInfo.special_food_needs ?? '',
      disease: generalInfo.disease ?? '',
      personal_drug: generalInfo.personal_drug ?? '',
      drug_allergy: generalInfo.drug_allergy ?? '',
      insurance: generalInfo.insurance ?? '',
    }

    formik.setValues(newValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getGeneralInfo()
  }, [getGeneralInfo])

  return (
    <div className={styles.GenForm}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inputGroup}>
          <FormikSelect
            label="คำนำหน้าชื่อ"
            items={prefixChoices}
            placeholder="กรุณาเลือกคำนำหน้าชื่อ"
            value={formik.values.prefix}
            required
            errors={formik.errors.prefix}
            touched={formik.touched.prefix}
            onSelect={(value: string) => formik.setFieldValue('prefix', value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <FormikTextField
            label="ชื่อจริง"
            name="first_name"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.first_name}
            touched={formik.touched.first_name}
            value={formik.values.first_name}
          />
          <FormikTextField
            label="ชื่อกลาง (ถ้ามี)"
            name="middle_name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.middle_name}
          />
          <FormikTextField
            label="นามสกุล"
            name="last_name"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.last_name}
            touched={formik.touched.last_name}
            value={formik.values.last_name}
          />
        </div>
        <div className={styles.inputGroup}>
          <FormikTextField
            label="ชื่อเล่น"
            name="nickname"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.nickname}
            touched={formik.touched.nickname}
            value={formik.values.nickname}
          />
          <Flex direction="column">
            <Label name="วันเกิด (ค.ศ.)" htmlFor="birth_date" required />
            <DatePicker
              id="birth_date"
              name="birth_date"
              onBlur={formik.handleBlur}
              onChange={(date: Date) => formik.setFieldValue('birth_date', date)}
              value={formik.values.birth_date}
            />
            <ErrorMessage>
              {formik.errors.birth_date && formik.touched.birth_date && formik.errors.birth_date}
            </ErrorMessage>
          </Flex>
          <FormikTextField
            label="เบอร์โทรศัพท์"
            name="tel"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.tel}
            touched={formik.touched.tel}
            value={formik.values.tel}
          />
        </div>
        <div className={styles.inputGroup}>
          <FormikTextField
            label="ที่อยู่"
            name="address"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.address}
            touched={formik.touched.address}
            value={formik.values.address}
          />
          <FormikTextField
            label="วิธีการเดินทางมามหาวิทยาลัย"
            name="travel"
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            errors={formik.errors.travel}
            touched={formik.touched.travel}
            value={formik.values.travel}
          />
          <FormikSelect
            items={shirtSizeChoices}
            label="ไซส์เสื้อ"
            placeholder="กรุณาเลือกไซส์เสื้อ"
            value={formik.values.shirt_size}
            required
            errors={formik.errors.shirt_size}
            touched={formik.touched.shirt_size}
            onSelect={(value: string) => formik.setFieldValue('shirt_size', value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <FormikTextField
            label="อาหารที่แพ้ (ถ้ามี)"
            name="food_allergy"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.food_allergy}
          />
          <FormikTextField
            label="ข้อจำกัดด้านอาหาร (ถ้ามี)"
            name="special_food_needs"
            placeholder="Ex. ฮาลาล, มังสวิรัติ, เจ, อื่น ๆ"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.special_food_needs}
          />
          <FormikTextField
            label="โรคประจำตัว (ถ้ามี)"
            name="disease"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.disease}
          />
        </div>
        <div className={styles.inputGroup}>
          <FormikTextField
            label="ยาประจำตัว (ถ้ามี)"
            name="personal_drug"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.personal_drug}
          />
          <FormikTextField
            label="ยาที่แพ้ (ถ้ามี)"
            name="drug_allergy"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.drug_allergy}
          />
          <FormikSelect
            items={insuranceChoices}
            label="สิทธิการรักษา"
            placeholder="กรุณาเลือกสิทธิการรักษา"
            value={formik.values.insurance}
            required
            errors={formik.errors.insurance}
            touched={formik.touched.insurance}
            onSelect={(value: string) => formik.setFieldValue('insurance', value)}
          />
        </div>
        <div style={{ margin: '20px 0' }}>
          <Flex gap="3" align={'center'}>
            <Flex gap="2" align={'center'}>
              <Checkbox
                name="can_bring_laptop"
                id="can_bring_laptop"
                checked={formik.values.can_bring_laptop === true}
                onCheckedChange={() => formik.setFieldValue('can_bring_laptop', true)}
              />
              สามารถนำโน๊ตบุ๊คมาได้
            </Flex>
            <Flex gap="2" align={'center'}>
              <Checkbox
                name="can_bring_laptop"
                id="can_bring_laptop"
                checked={formik.values.can_bring_laptop === false}
                onCheckedChange={() => formik.setFieldValue('can_bring_laptop', false)}
              />
              ไม่สามารถนำโน๊ตบุ๊คมาได้
            </Flex>
          </Flex>
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

export default GeneralForm
