/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@radix-ui/themes'
import ErrorMessage from '../../ErrorMessage'
import Label from '../../Label'

// Synchronous validation function
const validate = (value: string) => {
  let errorMessage
  if (/[!@#$%^&*(),?":{}|<>'"]/.test(value)) {
    errorMessage = 'กรุณาไม่ใช้ตัวอักษรพิเศษ'
  }
  return errorMessage
}

type Props = {
  required?: boolean
  name: string
  label: string
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: {
    (e: React.FocusEvent<any, Element>): void
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
  }
  placeholder?: string
  errors?: string | undefined
  touched?: boolean
  value?: string
}

const FormikTextField: React.FC<Props> = ({
  required,
  placeholder,
  name,
  onChange,
  label,
  value,
  onBlur,
  errors,
  touched,
}: Props): JSX.Element => {
  return (
    <div>
      <Label name={label} htmlFor={name} required={required} />
      <TextField.Input
        name={name}
        type="text"
        id={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      <ErrorMessage>{(touched && validate(String(value))) || (errors && touched && errors)}</ErrorMessage>
    </div>
  )
}

export default FormikTextField
