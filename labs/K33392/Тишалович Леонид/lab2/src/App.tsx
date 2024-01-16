import { SignInPage, Main } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.sass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />;
        <Route path="main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
