import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/registration/RegisterPage";
import ProjectsPage from "./pages/account/ProjectsPage";
function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
        </>
    );
}

export default App;
