import { ReactNode } from 'react'
import styles from './index.module.scss'
import { apiInstance } from 'src/lib/axios'

type Props = {
  children: ReactNode
  active?: boolean
}
const SignOutButton: React.FC<Props> = ({ children, active }: Props): JSX.Element => {
  const signOut = async () => {
    await apiInstance.post('/auth/sign-out')

    window.location.reload()
  }

  return (
    <button onClick={signOut} className={active ? styles.buttonActive : styles.button}>
      {children}
    </button>
  )
}

export default SignOutButton
