import React from 'react'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { BASE_PATH, REGISTER_PATH } from './constants/router'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'

const App: React.FC = (): JSX.Element => {
  const location = useLocation()

  const navbarFilter = () => {
    switch (location.pathname) {
      case BASE_PATH:
        return <Navbar />
      case REGISTER_PATH:
        return <Navbar />
    }
  }
  return (
    <div>
      {navbarFilter()}
      <Routes>
        <Route path={BASE_PATH} element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path={REGISTER_PATH} element={<Register />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
