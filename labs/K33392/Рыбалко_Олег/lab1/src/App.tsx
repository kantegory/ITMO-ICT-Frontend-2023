import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUpLayout } from './layout/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

