import { Text } from '@radix-ui/themes'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const ErrorMessage: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return <Text style={{ color: '#ff6b6b' }}>{children}</Text>
}

export default ErrorMessage
