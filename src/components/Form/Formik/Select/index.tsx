import ErrorMessage from '../../ErrorMessage'
import Label from '../../Label'
import Select, { ISelectItem } from '../../Select'
import styles from './index.module.scss'

type Props = {
  label: string
  required?: boolean
  items: ISelectItem[]
  onSelect: (value: string) => void
  placeholder?: string
  errors?: string
  touched?: boolean
  value?: string
}

const FormikSelect: React.FC<Props> = ({
  required,
  placeholder,
  items,
  label,
  onSelect,
  errors,
  touched,
  value,
}: Props): JSX.Element => {
  return (
    <div className={styles.selection}>
      <Label name={label} htmlFor="first_name" required={required} />
      <Select items={items} placeholder={placeholder} onSelect={onSelect} value={value} />
      <ErrorMessage>{errors && touched && errors}</ErrorMessage>
    </div>
  )
}

export default FormikSelect
