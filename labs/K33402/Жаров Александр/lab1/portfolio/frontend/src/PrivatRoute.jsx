import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Registration from "./pages/Registration";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth()
  //setAuth(true)
  return (
    
    isAuthenticated ?
      <Outlet />
      :
      <Navigate to="/registration/:isLogin" element={<Registration />} replase/>
  )
};