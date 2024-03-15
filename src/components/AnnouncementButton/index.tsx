import { ReactNode } from 'react'
import styles from './index.module.scss'
import { ANNOUNCE_PATH } from 'src/constants/router'

type Props = {
  children: ReactNode
  active?: boolean
}
const AnnounceButton: React.FC<Props> = ({ children, active }: Props): JSX.Element => {
  return (
    <a href={ANNOUNCE_PATH} rel="noreferrer">
      <button className={active ? styles.buttonActive : styles.button}>{children}</button>
    </a>
  )
}

export default AnnounceButton
