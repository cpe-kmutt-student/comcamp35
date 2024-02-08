import React from 'react'
import styles from './index.module.scss'
import { Button, Checkbox, Flex, TextField } from '@radix-ui/themes'
import { useFormik } from 'formik'
import Label from '../Form/Label'
import ErrorMessage from '../Form/ErrorMessage'
import Select from '../Form/Select'
import DatePicker from '../Form/DatePicker'
import { insuranceChoices, prefixChoices, shirtSizeChoices } from './utils/data'

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
  birth_date: string | Date
  tel: string
  address: string
  travel: string
  shirt_size: string
  can_bring_laptop: boolean
  food_allergy?: string
  favorite_food?: string
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
  birth_date: new Date(),
  tel: '',
  address: '',
  travel: '',
  shirt_size: '',
  can_bring_laptop: false,
  food_allergy: '',
  favorite_food: '',
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

  return (
    <div className={styles.GenForm}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inputGroup}>
          <div className={styles.selection}>
            <Label name="คำนำหน้าชื่อ" htmlFor="first_name" required />
            <Select
              items={prefixChoices}
              placeholder="กรุณาเลือกคำนำหน้าชื่อ"
              onSelect={(value: string) => formik.setFieldValue('prefix', value)}
            />
            <ErrorMessage>{formik.errors.prefix && formik.touched.prefix && formik.errors.prefix}</ErrorMessage>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <Label name="ชื่อจริง" htmlFor="first_name" required />
            <TextField.Input
              name="first_name"
              type="text"
              id="first_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.first_name}
            />
            <ErrorMessage>
              {formik.errors.first_name && formik.touched.first_name && formik.errors.first_name}
            </ErrorMessage>
          </div>
          <div>
            <Label name="ชื่อกลาง (ถ้ามี)" htmlFor="middle_name" />
            <TextField.Input
              name="middle_name"
              type="text"
              id="middle_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.middle_name}
            />
          </div>
          <div>
            <Label name="นามสกุล" htmlFor="last_name" required />
            <TextField.Input
              name="last_name"
              type="text"
              id="last_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.last_name}
            />
            <ErrorMessage>
              {formik.errors.last_name && formik.touched.last_name && formik.errors.last_name}
            </ErrorMessage>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <Label name="ชื่อเล่น" htmlFor="nick_nnicknameame" required />
            <TextField.Input
              name="nickname"
              type="text"
              id="nickname"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.nickname}
            />
            <ErrorMessage>{formik.errors.nickname && formik.touched.nickname && formik.errors.nickname}</ErrorMessage>
          </div>
          <Flex direction="column">
            <Label name="วันเกิด (ค.ศ.)" htmlFor="birth_date" required />
            <DatePicker
              id="birth_date"
              name="birth_date"
              onBlur={formik.handleBlur}
              onChange={(date: Date) => formik.setFieldValue('birth_date', date)}
              value={new Date(formik.values.birth_date)}
            />
            <ErrorMessage>
              {formik.errors.birth_date && formik.touched.birth_date && formik.errors.birth_date}
            </ErrorMessage>
          </Flex>
          <div>
            <Label name="เบอร์โทรศัพท์" htmlFor="tel" required />
            <TextField.Input
              name="tel"
              type="text"
              id="tel"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.tel}
            />
            <ErrorMessage>{formik.errors.tel && formik.touched.tel && formik.errors.tel}</ErrorMessage>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <Label name="ที่อยู่" htmlFor="address" required />
            <TextField.Input
              name="address"
              type="text"
              id="address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <ErrorMessage>{formik.errors.address && formik.touched.address && formik.errors.address}</ErrorMessage>
          </div>
          <div>
            <Label name="วิธีการเดินทางมามหาวิทยาลัย" htmlFor="travel" required />
            <TextField.Input
              name="travel"
              type="text"
              id="travel"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.travel}
            />
            <ErrorMessage>{formik.errors.travel && formik.touched.travel && formik.errors.travel}</ErrorMessage>
          </div>
          <div className={styles.selection}>
            <Label name="ไซส์เสื้อ" htmlFor="shirt_size" required />
            <Select
              items={shirtSizeChoices}
              placeholder="กรุณาเลือกไซส์เสื้อ"
              onSelect={(value: string) => formik.setFieldValue('shirt_size', value)}
            />
            <ErrorMessage>
              {formik.errors.shirt_size && formik.touched.shirt_size && formik.errors.shirt_size}
            </ErrorMessage>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <Label name="อาหารที่แพ้ (ถ้ามี)" htmlFor="food_allergy" />
            <TextField.Input
              name="food_allergy"
              type="text"
              id="food_allergy"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.food_allergy}
            />
          </div>
          <div>
            <Label name="อาหารที่ชอบ (ถ้ามี)" htmlFor="favorite_food" />
            <TextField.Input
              name="favorite_food"
              type="text"
              id="favorite_food"
              placeholder="เช่น ฮาลาล, มังสวิรัติ, เจ, อื่น ๆ"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.favorite_food}
            />
          </div>
          <div>
            <Label name="โรคประจำตัว (ถ้ามี)" htmlFor="disease" />
            <TextField.Input
              name="disease"
              type="text"
              id="disease"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.disease}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div>
            <Label name="ยาประจำตัว (ถ้ามี)" htmlFor="personal_drug" />
            <TextField.Input
              name="personal_drug"
              type="text"
              id="personal_drug"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.personal_drug}
            />
            <ErrorMessage>
              {formik.errors.personal_drug && formik.touched.personal_drug && formik.errors.personal_drug}
            </ErrorMessage>
          </div>
          <div>
            <Label name="ยาที่แพ้ (ถ้ามี)" htmlFor="drug_allergy" />
            <TextField.Input
              name="drug_allergy"
              type="text"
              id="drug_allergy"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.drug_allergy}
            />
            <ErrorMessage>
              {formik.errors.drug_allergy && formik.touched.drug_allergy && formik.errors.drug_allergy}
            </ErrorMessage>
          </div>
          <div className={styles.selection}>
            <Label name="สิทธิการรักษา" htmlFor="insurance" required />
            <Select
              items={insuranceChoices}
              placeholder="กรุณาเลือกสิทธิการรักษา"
              onSelect={(value: string) => formik.setFieldValue('insurance', value)}
            />
            <ErrorMessage>
              {formik.errors.insurance && formik.touched.insurance && formik.errors.insurance}
            </ErrorMessage>
          </div>
        </div>

        <div style={{ margin: '20px 0' }}>
          <Flex gap="2" align={'center'}>
            <Checkbox
              name="can_bring_laptop"
              id="can_bring_laptop"
              onCheckedChange={(checked: boolean) => formik.setFieldValue('can_bring_laptop', checked)}
            />
            สามารถนำโน๊ตบุ๊คมาได้
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
