import { Flex, Text } from '@radix-ui/themes'
import styles from './index.module.scss'

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Flex align="center" justify="center">
        <Text>© 2024 | Made with ❤️ by CPE 37 </Text>
      </Flex>
    </footer>
  )
}

export default Footer
