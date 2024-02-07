type Props = {
  htmlFor?: string
  required?: boolean
  name: string
}

const Label: React.FC<Props> = ({ htmlFor, required, name }: Props): JSX.Element => {
  return (
    <label htmlFor={htmlFor}>
      {name} {required && <span style={{ color: '#ff6b6b' }}>*</span>}
    </label>
  )
}

export default Label
