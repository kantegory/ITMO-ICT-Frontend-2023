import { SignInPage, Main } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.sass";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />;
          <Route path="main" element={<Main />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
