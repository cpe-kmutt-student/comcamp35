import React from 'react'
import { Form, Input, Button, Checkbox, DatePicker } from 'antd'
import styles from './index.module.scss'

interface FormValues {
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

const GeneralForm: React.FC = () => {
  //Show Success: Values on console
  const onFinish = (values: FormValues) => {
    console.log('Success:', values)
  }

  return (
    <div className={styles.GenForm}>
      <Form
        name="GeneralForm"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="ชื่อจริง"
          name="first_name"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
            { whitespace: true, message: 'Please input your first name!' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: Walter" />
        </Form.Item>

        <Form.Item
          label="ชื่อกลาง"
          name="middle_name"
          rules={[
            {
              required: false,
            },
            { whitespace: true, message: 'Please type something' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: Hartwell" />
        </Form.Item>

        <Form.Item
          label="นามสกุล"
          name="last_name"
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
            { whitespace: true, message: 'Please input your last name!' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: White" />
        </Form.Item>

        <Form.Item
          label="ชื่อเล่น"
          name="nickname"
          rules={[
            {
              required: true,
              message: 'Please input your nick name!',
            },
            { whitespace: true, message: 'Please input your nick name!' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: Heisenberg" />
        </Form.Item>

        <Form.Item
          label="วันเกิด"
          name="birth_date"
          rules={[
            {
              required: true,
              message: 'Please choose your birth date!',
            },
          ]}
          hasFeedback
        >
          <DatePicker style={{ width: '100%' }} picker="date" placeholder="example: 2024-01-01T00:00:00.000Z" />
        </Form.Item>

        <Form.Item
          label="เบอร์โทร"
          name="tel"
          rules={[
            {
              required: true,
              message: 'Please input your telephone number!',
            },
            { whitespace: true, message: 'Please input your telephone number!' },
          ]}
          hasFeedback
        >
          <Input type="tel" max={10} placeholder="example: 1234567890" />
        </Form.Item>

        <Form.Item
          label="ที่อยู่"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
            { whitespace: true, message: 'Please input your address!' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: Phitsanulok" />
        </Form.Item>

        <Form.Item
          label="วิธีเดินทาง"
          name="travel"
          rules={[
            {
              required: true,
              message: 'Please input the ways you travel!',
            },
            { whitespace: true, message: 'Please input the ways you travel!' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: Helicoptor" />
        </Form.Item>

        <Form.Item
          label="ไซส์เสื้อ"
          name="shirt_size"
          rules={[
            {
              required: true,
              message: 'Please input your shirt size!',
            },
            { whitespace: true, message: 'Please input your shirt size!' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: L" />
        </Form.Item>

        <Form.Item
          label="สามารถนำ Laptop มาได้"
          name="can_bring_laptop"
          valuePropName="checked"
          wrapperCol={{
            span: 8,
          }}
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Please confirm you can bring your laptop!'),
            },
          ]}
        >
          <Checkbox>สามารถนำมาได้</Checkbox>
        </Form.Item>

        <Form.Item
          label="อาหารที่แพ้"
          name="food_allergy"
          rules={[
            {
              required: true,
              message: 'Please input your allergy food!',
            },
            { whitespace: true, message: 'Please input your allergy food!' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: dog" />
        </Form.Item>

        <Form.Item
          label="อาหารที่ชอบ"
          name="favorite_food"
          rules={[
            {
              required: false,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="example: meth" />
        </Form.Item>

        <Form.Item
          label="โรคประจำตัว"
          name="disease"
          rules={[
            {
              required: false,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="example: cancer" />
        </Form.Item>

        <Form.Item
          label="ยาประจำตัว"
          name="personal_drug"
          rules={[
            {
              required: false,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="example: pregnancy test" />
        </Form.Item>

        <Form.Item
          label="แพ้ยา"
          name="drug_allergy"
          rules={[
            {
              required: false,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="example: dog" />
        </Form.Item>

        <Form.Item
          label="ประกัน"
          name="insurance"
          rules={[
            {
              required: true,
              message: 'Please input your insurance!',
            },
            { whitespace: true, message: 'Please input your insurance!' },
          ]}
          hasFeedback
        >
          <Input placeholder="example: government" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 11,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default GeneralForm
