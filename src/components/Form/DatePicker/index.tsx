/* eslint-disable @typescript-eslint/no-explicit-any */
import { CalendarIcon } from '@radix-ui/react-icons'
import DatePicker, { registerLocale } from 'react-datepicker'
import styles from './index.module.scss'
import th from 'date-fns/locale/th'

import 'react-datepicker/dist/react-datepicker.css'

registerLocale('th', th)

type Props = {
  name?: string
  id?: string
  onChange: (date: Date) => void
  onBlur?: {
    (e: React.FocusEvent<any, Element>): void
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
  }
  value: Date | undefined
}

const CustomDatePicker: React.FC<Props> = ({ onChange, value, onBlur, name, id }: Props): JSX.Element => {
  return (
    <DatePicker
      showYearDropdown
      showMonthDropdown
      dropdownMode="select"
      showIcon
      name={name}
      id={id}
      locale="th"
      icon={<CalendarIcon />}
      selected={value}
      onChange={onChange}
      onBlur={onBlur}
      className={styles.datePicker}
      dateFormat="dd/MM/yyyy"
      placeholderText="วัน/เดือน/ปี"
    />
  )
}

export default CustomDatePicker
