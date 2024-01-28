import { Navigate, Outlet } from 'react-router-dom'
import { BASE_PATH } from 'src/constants/router'
import { useAuth } from 'src/context/auth'
import LoadingPage from 'src/pages/LoadingPage'

const ProtectedRoute: React.FC = (): JSX.Element => {
  const { auth } = useAuth()

  if (auth.is_authenticated === null) return <LoadingPage />
  else return auth.is_authenticated ? <Outlet /> : <Navigate to={BASE_PATH} replace />
}

export default ProtectedRoute
