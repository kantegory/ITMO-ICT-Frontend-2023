import { UserAuthPage } from "./Pages/UserAuthPage/UserAuthPage";
import { MainPage } from "./Pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartPage } from "./Pages/CartPage/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserAuthPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
