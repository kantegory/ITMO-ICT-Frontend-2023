import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AuthPage } from "./pages/AuthPage/index";
import "./index.scss";
import { CreatePostPage } from "./pages/CreatePostPage/index";
import { PostPage } from "./pages/PostPage/PostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="create_post" element={<CreatePostPage />}></Route>
        <Route path="posts/:id" element={<PostPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
