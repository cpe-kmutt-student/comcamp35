import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './context/auth-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* <AuthProvider>
      <App />
    </AuthProvider> */}
    <App />
  </BrowserRouter>,
)
