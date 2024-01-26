import React from 'react'
import './App.scss'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { BASE_PATH, REGISTER_PATH } from './constants/router'
import Navbar from './components/Navbar'
import AuthProvider from './context/auth-context'
import Register from './pages/Register'
import NotFoundPage from './pages/NotFoundPage'

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
    <AuthProvider>
      {navbarFilter()}
      <Routes>
        <Route path={BASE_PATH} element={<Home />} />
        <Route path={REGISTER_PATH} element={<Register />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
