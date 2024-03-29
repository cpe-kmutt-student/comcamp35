import React from 'react'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { BASE_PATH, REGISTER_PATH, ANNOUNCE_PATH, FAQ_PATH, POLICY_PATH } from './constants/router'
import Navbar from './components/Navbar'
// import Register from './pages/Register'
import ResultsAnnouncement from './pages/Announcement'
import NotFoundPage from './pages/NotFoundPage'
// import ProtectedRoute from './components/ProtectedRoute'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import FrequentlyAskedQuestionFull from './pages/Faq'
import ReactGA from 'react-ga4'
import CookieConsent from './components/CookieConsent'
import PrivacyPolicyPage from './pages/PrivacyPolicy'

const App: React.FC = (): JSX.Element => {
  const location = useLocation()

  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID)
  }

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
        {/* <Route element={<ProtectedRoute />}>
          <Route path={REGISTER_PATH} element={<Register />} />
        </Route> */}
        <Route path={ANNOUNCE_PATH} element={<ResultsAnnouncement />} />
        <Route path={FAQ_PATH} element={<FrequentlyAskedQuestionFull />} />
        <Route path={POLICY_PATH} element={<PrivacyPolicyPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </Theme>
  )
}

export default App
