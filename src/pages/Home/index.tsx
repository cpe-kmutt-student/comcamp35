import { useAuth } from 'src/context/auth'
import Content from 'src/components/Home'
const Home: React.FC = (): JSX.Element => {
  const { auth } = useAuth()

  return (
    <>
      <div>{auth.is_authenticated && <h2>Welcome, {auth.firstName + ' ' + auth.lastName}</h2>}</div>
      <Content />
    </>
  )
}

export default Home
