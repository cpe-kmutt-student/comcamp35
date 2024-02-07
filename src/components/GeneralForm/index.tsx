import React from 'react'
import { Form, Input, Button, Checkbox, DatePicker } from 'antd'
import styles from './index.module.scss'

export interface IGeneralForm {
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

type Props = {
  onSubmit: (values: IGeneralForm) => void
  isSubmitting: boolean
}

const GeneralForm: React.FC<Props> = ({ onSubmit, isSubmitting }: Props) => {
  return (
    <div className={styles.GenForm}>
      <Form name="GeneralForm" onFinish={onSubmit} layout="vertical">
        <div className={styles.inputGroup}>
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

        <Form.Item
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
        </Form.Item>
      </Form>
    </div>
  )
}

export default GeneralForm
