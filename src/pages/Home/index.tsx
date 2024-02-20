import Content from 'src/components/Home'
import styles from './index.module.scss'
import ReactGA from 'react-ga4'

const Home: React.FC = (): JSX.Element => {
  ReactGA.send({ hitType: 'pageview', page: '/', title: 'Landing page' })

  return (
    <div className={styles.homePage}>
      <Content />
    </div>
  )
}

export default Home
