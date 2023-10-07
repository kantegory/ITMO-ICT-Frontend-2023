import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUpLayout } from './layouts/SignUp'
import { SignInLayout } from './layouts/SignIn'
import { ProfileLayout } from './layouts/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/:username" element={<ProfileLayout />} />
        <Route path="/signin" element={<SignInLayout />} />
        <Route path="/signup" element={<SignUpLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

