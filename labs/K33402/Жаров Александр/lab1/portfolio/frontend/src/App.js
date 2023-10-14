import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import React, { useEffect } from "react";
import { PrivateRoute } from "./PrivatRoute";

const USER_ID = "65293a3055b0df2e28a63fde";

function App() {
  const [isOpenRegistrationPage, setIsOpenRegistrationPage] =
    React.useState(false);
  let location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:3030/api/get-user/${USER_ID}`)
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    setIsOpenRegistrationPage(false);
    const regex = /\/registration/;
    if (regex.test(location.pathname)) {
      setIsOpenRegistrationPage(true);
    }
  }, [location]);

  return (
    <div className="App">
      {!isOpenRegistrationPage && <Header />}
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
