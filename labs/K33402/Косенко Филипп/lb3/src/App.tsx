import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
