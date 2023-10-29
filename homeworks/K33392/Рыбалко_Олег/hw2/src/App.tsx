import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { MumblrNavbar } from './components/MumblrNavbar'
import {
  FeedLayout,
  SignInLayout,
  SignUpLayout,
  ProfileLayout,
  SearchLayout,
} from './layouts'
import { PageNotFound } from './layouts/NotFound'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MumblrNavbar />
        <Routes>
          <Route path="/feed" element={<FeedLayout />} />
          <Route path="/profile/:username" element={<ProfileLayout />} />
          <Route path="/signin" element={<SignInLayout />} />
          <Route path="/signup" element={<SignUpLayout />} />
          <Route path="/search" element={<SearchLayout />} />
          <Route path="/notfound" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

