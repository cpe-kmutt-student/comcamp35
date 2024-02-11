import React from 'react'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { BASE_PATH, REGISTER_PATH } from './constants/router'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import NotFoundPage from './pages/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import Faqviewmore from './components/FAQViewmore'

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
    <Theme appearance="dark" accentColor="amber" grayColor="slate" scaling="95%" panelBackground="translucent">
      <Toaster />
      {navbarFilter()}
      <Routes>
        <Route path={BASE_PATH} element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path={REGISTER_PATH} element={<Register />} />
        </Route>
        <Route path="/faq" element={<Faqviewmore />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Theme>
  )
}

export default App
