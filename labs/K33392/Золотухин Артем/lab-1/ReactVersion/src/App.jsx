import './App.css'
import MyNavbar from './components/MyNavbar'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createRoutesFromElements,
} from 'react-router-dom'
import About from './routes/About'
import AboutPage from './routes/AboutPage'
import Blog from './routes/Blog'
import Home from './routes/Home'
import Notes from './routes/Notes'
import Search from './routes/Search'
import Work from './routes/Work'
import UserDescription from './routes/UserDescription'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const queryClient = new QueryClient()
  const AppLayout = () => (
    <>
      <QueryClientProvider client={queryClient}>
        <MyNavbar />
        <Outlet />
      </QueryClientProvider>
    </>
  )

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/about_page' element={<AboutPage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/description/:userId' element={<UserDescription />} />
      </Route>
    )
  )

  createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )

  return router
}

export default App
