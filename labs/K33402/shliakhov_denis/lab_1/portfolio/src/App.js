import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import AccountPage from "./pages/account/AccountPage";
import HomePage from "./pages/home/HomePage";

function App() {

  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/account" element={<AccountPage />}/>
          </Routes>
      </>
  );
}

export default App;
