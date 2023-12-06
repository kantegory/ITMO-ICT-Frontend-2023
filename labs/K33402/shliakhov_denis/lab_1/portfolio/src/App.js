import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import {Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/registration/RegisterPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import SearchResultPage from "./pages/search/SearchResultPage";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";

function App() {

    const ProtectedRoute = ({redirectPath = '/'}) => {
        const user = useSelector( (state) => state.authSlice.user )
        let location = useLocation()

        if (!user) {
            return <Navigate to={redirectPath} state={ { from : location} } replace/>;
        }

        return <Outlet/>
    }

    return (
        <Container fluid style={{height: "100vh"}}>
            <Header/>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/" element={<HomePage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route element={<ProtectedRoute/>} >
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/search/:searchText" element={<SearchResultPage/>}/>
                </Route>
            </Routes>
        </Container>
    );
}

export default App;
