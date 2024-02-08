import styles from './index.module.scss'
import Loading from 'src/assets/loading.gif'

const LoadingPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.loading}>
      <img src={Loading} loading="lazy" alt="loading" width={100} />
    </div>
  )
}

export default LoadingPage
