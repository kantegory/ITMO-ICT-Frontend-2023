import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUpLayout } from './layouts/SignUp'
import { SignInLayout } from './layouts/SignIn'
import { ProfileLayout } from './layouts/Profile'
import { Provider } from 'react-redux'
import store from './store'
import { MumblrNavbar } from './components/MumblrNavbar'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MumblrNavbar />
        <Routes>
          <Route path="/profile/:username" element={<ProfileLayout />} />
          <Route path="/signin" element={<SignInLayout />} />
          <Route path="/signup" element={<SignUpLayout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

