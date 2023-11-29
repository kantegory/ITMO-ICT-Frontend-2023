import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import AccountPage from "./pages/account/AccountPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/registration/RegisterPage";

function App() {

  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/register" element={<RegisterPage />}/>
              <Route path="/account" element={<AccountPage />}/>
          </Routes>
      </>
  );
}

export default App;
