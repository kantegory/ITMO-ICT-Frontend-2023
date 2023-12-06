import React, {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

function Header() {
    const [activePage, setActivePage] = useState(localStorage.getItem("activePage") || "home")
    const handleProjectsPage = () => {
        setActivePage("projects")
        localStorage.setItem("activePage", "projects")
    }
    const handleHomePage = () => {
        setActivePage("home")
        localStorage.setItem("activePage", "home")
    }

    return (
        <Navbar className="mb-2" bg="light" data-bs-theme="light">
            <Container>
                <h3>Портфолио</h3>
                <Nav>
                    <Link className="m-1 active" to={"/"} onClick={handleHomePage}
                          style={{
                              color: activePage === "home" ? "blue" : "black",
                              textDecoration: 'none'
                          }}>Главная</Link>
                    <Link className="m-1 active" to="/projects" onClick={handleProjectsPage}
                          style={{color: activePage === "projects" ? "blue" : "black", textDecoration: 'none'}}>
                        Мои Проекты
                    </Link>
                </Nav>
                <SearchBar/>
            </Container>
        </Navbar>
    )
}

export default Header