import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import UserPage from "./pages/UserPage";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import React, { useContext } from "react";
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

  const onAuth = React.useCallback(
    (user) => {
      setAuth(true);
      setUser(user);
    },
    [setAuth, setUser]
  );

  const onLogout = React.useCallback(() => {
    setAuth(false);
    setUser(null);
    deleteCookie("token");
  }, [setAuth, setUser]);

  React.useEffect(() => {
    const token = getCookie("token");
    if (token && !isAuthenticated) {
      navigate("/");
      fetchAuthUser(token)
        .then((user) => {
          onAuth(user);
        })
        .catch((error) => {
          console.log(error);
          navigate("/registration/login");
          onLogout();
        });
    }
  }, [isAuthenticated, setAuth, setUser, onAuth, onLogout, navigate]);

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
