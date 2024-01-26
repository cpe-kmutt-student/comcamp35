import { useAuth } from 'src/context/auth'

const Home: React.FC = (): JSX.Element => {
  const { auth } = useAuth()

  return <div>{auth.is_authenticated && <h2>Welcome Back, {auth.firstName + ' ' + auth.lastName}</h2>}</div>
}

export default Home
