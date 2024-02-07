import React from 'react'
import styles from './index.module.scss'
import { Button, Checkbox, Flex, TextField } from '@radix-ui/themes'
import { useFormik } from 'formik'
import Label from '../Form/Label'
import ErrorMessage from '../Form/ErrorMessage'
import Select, { ISelectItem } from '../Form/Select'

type Props = {
  onSubmit: (values: IGeneralForm) => void
  isSubmitting: boolean
}

enum PrefixEnum {
  MR = 'นาย',
  MRS = 'นางสาว',
  OTHER = 'อื่นๆ',
}

interface IPrefix extends ISelectItem {
  value: PrefixEnum
}

export interface IGeneralForm {
  prefix: string
  first_name: string
  middle_name?: string
  last_name: string
  nick_name: string
  birth_date: string
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
  nick_name: '',
  birth_date: '',
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

const prefixChoices: IPrefix[] = [
  {
    label: PrefixEnum.MR,
    value: PrefixEnum.MR,
  },
  {
    label: PrefixEnum.MRS,
    value: PrefixEnum.MRS,
  },
  {
    label: PrefixEnum.OTHER,
    value: PrefixEnum.OTHER,
  },
]

const validate = (values: IGeneralForm) => {
  const errors: Record<string, string> = {}
  if (!values.first_name) errors.first_name = 'กรุณาระบุชื่อจริง'
  if (!values.last_name) errors.last_name = 'กรุณาระบุนามสกุล'

  return errors
}

const GeneralForm: React.FC<Props> = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
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
          </div>
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
        </div>
        <div className={styles.inputGroup}>
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
          <Button type="submit">ถัดไป</Button>
        </div>
      </form>
      {/* <div className={styles.inputGroup}>
          <Form.Item
            label="ชื่อจริง"
            name="first_name"
            rules={[
              {
                required: true,
                message: 'กรุณาระบุชื่อจริง',
              },
            ]}
          >
            <Input placeholder="Ex: Walter" />
          </Form.Item>

          <Form.Item
            label="ชื่อกลาง (ถ้ามี)"
            name="middle_name"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input placeholder="Ex: Hartwell" />
          </Form.Item>

          <Form.Item
            label="นามสกุล"
            name="last_name"
            rules={[
              {
                required: true,
                message: 'กรุณาระบุนามสกุล',
              },
            ]}
          >
            <Input placeholder="Ex: White" />
          </Form.Item>
        </div>
        <div className={styles.inputGroup}>
          <Form.Item
            label="ชื่อเล่น"
            name="nickname"
            rules={[
              {
                required: true,
                message: 'กรุณาระบุชื่อเล่น',
              },
            ]}
          >
            <Input placeholder="Ex: Heisenberg" />
          </Form.Item>

          <Form.Item
            label="วันเกิด"
            name="birth_date"
            rules={[
              {
                required: true,
                message: 'กรุณาระบุวันเกิด',
              },
            ]}
          >
            <DatePicker style={{ width: '100%' }} picker="date" format={'DD/MM/YYYY'} />
          </Form.Item>

          <Form.Item
            label="เบอร์โทร"
            name="tel"
            rules={[
              {
                required: true,
                message: 'กรุณาระบุเบอร์โทร',
              },
            ]}
          >
            <Input type="tel" minLength={10} maxLength={10} placeholder="Ex: 0987654321" />
          </Form.Item>
        </div>
        <Form.Item
          label="ที่อยู่"
          name="address"
          rules={[
            {
              required: true,
              message: 'กรุณาระบุที่อยู่',
            },
          ]}
        >
          <Input placeholder="Ex: 42 Bangkok" />
        </Form.Item>
        <Form.Item
          label="วิธีเดินทาง"
          name="travel"
          rules={[
            {
              required: true,
              message: 'กรุณาระบุวิธีเดินทางมา KMUTT',
            },
          ]}
        >
          <Input placeholder="Ex: Helicoptor" />
        </Form.Item>
        <Form.Item
          label="ไซส์เสื้อ"
          name="shirt_size"
          rules={[
            {
              required: true,
              message: 'กรุณาระบุไซส์เสื้อ',
            },
          ]}
        >
          <Input placeholder="Ex: L" />
        </Form.Item>
        <Form.Item
          label="อาหารที่แพ้"
          name="food_allergy"
          rules={[
            {
              required: true,
              message: 'กรุณาระบุอาหารที่แพ้',
            },
          ]}
        >
          <Input placeholder="Ex: dog" />
        </Form.Item>
        <Form.Item
          label="อาหารที่ชอบ (ถ้ามี)"
          name="favorite_food"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder="Ex: meth" />
        </Form.Item>
        <Form.Item
          label="โรคประจำตัว (ถ้ามี)"
          name="disease"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder="Ex: cancer" />
        </Form.Item>
        <Form.Item
          label="ยาประจำตัว (ถ้ามี)"
          name="personal_drug"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder="Ex: pregnancy test" />
        </Form.Item>
        <Form.Item
          label="แพ้ยา (ถ้ามี)"
          name="drug_allergy"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder="Ex: dog" />
        </Form.Item>

        {/* TODO : Use Selection instead */}

      {/* <Form.Item
          label="สิทธิการรักษา"
          name="insurance"
          rules={[
            {
              required: true,
              message: 'กรุณาระบุสิทธิการรักษา',
            },
          ]}
        >
          <Input placeholder="Ex: สิทธิข้าราชการ" />
        </Form.Item>
        <Form.Item label="สามารถนำ Laptop มาได้" name="can_bring_laptop" valuePropName="checked" style={{ margin: 0 }}>
          <Checkbox>สามารถนำมาได้</Checkbox>
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            ถัดไป
          </Button>
        </Form.Item> */}
    </div>
  )
}

export default GeneralForm
