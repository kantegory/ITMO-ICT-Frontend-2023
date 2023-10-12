import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import React, { useEffect } from "react";

function App() {
  const [isOpenRegistrationPage, setIsOpenRegistrationPage] =
    React.useState(false);
  let location = useLocation();

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
          <Route index element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/registration/:isLogin" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
