import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import React, { useEffect } from "react";
import { PrivateRoute } from "./components/PrivatRoute";
import useAuth from "./hooks/useAuth";
import useUser from "./hooks/useUser";

function App() {
  let location = useLocation();
  const navigate = useNavigate();

  const [isHeaderDisplayNone, setHeaderDisplayNone] = React.useState(false);

  const { isAuthenticated, setAuth } = useAuth();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (document.cookie) {
      console.log(document.cookie);
      const userString = document.cookie
        .split("; ")
        .find((row) => row.startsWith("user="))
        .slice(5);

      const user = JSON.parse(userString);
      console.log(isAuthenticated);

      if (!isAuthenticated) {
        setAuth(true);
        setUser(user);
        navigate("/");
      }
    }
  }, [setUser, setAuth, navigate, isAuthenticated]);

  React.useEffect(() => {
    setHeaderDisplayNone(false);
    const regex = /\/registration/;
    if (regex.test(location.pathname)) {
      setHeaderDisplayNone(true);
    }
  }, [location]);

  return (
    <div className="App">
      {!isHeaderDisplayNone && <Header />}
      <Routes>
        <Route path="/">
          <Route path="/registration/:isLogin" element={<Registration />} />

          <Route element={<PrivateRoute />}>
            <Route index element={<Profile />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
