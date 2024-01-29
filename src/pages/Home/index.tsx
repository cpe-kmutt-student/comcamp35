import Content from 'src/components/Home'
import styles from './index.module.scss'

const Home: React.FC = (): JSX.Element => {
  return (
    <div className={styles.homePage}>
      <Content />
    </div>
  )
}

export default Home
