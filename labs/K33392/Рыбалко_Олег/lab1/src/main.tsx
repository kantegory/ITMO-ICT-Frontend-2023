import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './providers/ThemeProvider/index.tsx'
import './i18n'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

