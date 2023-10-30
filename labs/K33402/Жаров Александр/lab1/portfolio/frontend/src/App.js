import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import UserPage from "./pages/UserPage";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import React, { useEffect } from "react";
import { PrivateRoute } from "./components/PrivatRoute";
import useAuth from "./hooks/useAuth";
import useUser from "./hooks/useUser";
import { deleteCookie, getCookie } from "./utils/cookiesUtils";
import { fetchAuthUser } from "./utils/fetchUtils";
import Search from "./pages/Search";

function App() {
  let location = useLocation();
  const navigate = useNavigate();

  const [isHeaderDisplayNone, setHeaderDisplayNone] = React.useState(false);

  const { isAuthenticated, setAuth } = useAuth();
  const { setUser } = useUser();

  const fetchUserCallback = React.useCallback(
    (token) => fetchAuthUser(token),
    []
  );

  useEffect(() => {
    const token = getCookie("token");

    if (token && !isAuthenticated) {
      fetchUserCallback(token).then((user) => {
        if (user.message) {
          setAuth(false);
          setUser(null);
          deleteCookie("token");
        } else {
          setAuth(true);
          setUser(user);
          navigate("/");
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Route path="/search/:query" element={<Search />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
