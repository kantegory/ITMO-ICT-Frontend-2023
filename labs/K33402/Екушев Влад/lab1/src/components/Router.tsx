import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'src/components/App'
import { routes } from 'src/config/routes'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {Object.values(routes).map((route) => (
            <Route
              element={route.element}
              key={route.alias}
              path={route.path}
            />
          ))}
        </Route>
        <Route
          path="*"
          element={<Navigate to={routes.favorites.path} replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
