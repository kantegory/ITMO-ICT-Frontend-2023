import { SignInPage } from "./pages/SignInPage";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import { PostCreatePage } from "./pages/PostCreatePage";
import { PostPage } from "./pages/PostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="create" element={<PostCreatePage />} />
        <Route path="post" element={<PostPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
