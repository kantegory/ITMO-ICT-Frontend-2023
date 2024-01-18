import "./index.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUpPage/SignUp";
import { Main } from "./pages/MainPage/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
