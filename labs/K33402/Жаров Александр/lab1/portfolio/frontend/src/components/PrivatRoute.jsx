import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Registration from "../pages/Registration";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/registration/registration"
      element={<Registration />}
      replase
    />
  );
};
