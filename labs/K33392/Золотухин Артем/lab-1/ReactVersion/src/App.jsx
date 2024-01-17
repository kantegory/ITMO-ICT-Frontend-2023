import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './routes/About'
import Blog from './routes/Blog'
import Home from './routes/Home'
import Notes from './routes/Notes'
import Search from './routes/Search'
import Work from './routes/Work'
import HireForm from './routes/HireForm'

import UserDescription from './routes/UserDescription'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    { path: 'about', element: <About /> },
    { path: 'work', element: <Work /> },
    { path: 'blog', element: <Blog /> },
    { path: 'notes', element: <Notes /> },
    { path: 'search', element: <Search /> },
    { path: 'description/:userId', element: <UserDescription /> },
    { path: 'hireform/:userId', element: <HireForm /> },
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </QueryClientProvider>
  )
}

export default App
