import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUpLayout } from './layouts/SignUp'
import { SignInLayout } from './layouts/SignIn'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInLayout />} />
        <Route path="/signup" element={<SignUpLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

