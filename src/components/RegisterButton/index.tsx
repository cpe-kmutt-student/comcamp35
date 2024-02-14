import { ReactNode } from 'react'
import styles from './index.module.scss'

type Props = {
  children: ReactNode
  active?: boolean
  to?: string
}
const RegisterButton: React.FC<Props> = ({ children, active, to }: Props): JSX.Element => {
  return (
    <a href={to ?? import.meta.env.VITE_BACKEND_URL + '/auth/google'} rel="noreferrer">
      <button className={active ? styles.buttonActive : styles.button}>{children}</button>
    </a>
  )
}

export default RegisterButton
