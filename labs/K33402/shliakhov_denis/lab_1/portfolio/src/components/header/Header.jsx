import React, {useState} from "react";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
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

    const handleAccountPage = () => {
        setActivePage("account")
        localStorage.setItem("activePage", "account")
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="mb-2">
            <Container className={"d-flex justify-content-start px-2"}>
                <Col className={"d-flex"}>
                    <h3>Портфолио</h3>
                </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col className={"d-flex justify-content-center"}>
                        <Nav className={"d-flex align-items-center"}>
                            <Link className="mx-2 active" to={"/"} onClick={handleHomePage}
                                  style={{
                                      color: activePage === "home" ? "blue" : "black",
                                      textDecoration: 'none'
                                  }}>Главная</Link>
                            <Link className="mx-2 active" to="/projects" onClick={handleProjectsPage}
                                  style={{
                                      color: activePage === "projects" ? "blue" : "black",
                                      textDecoration: 'none'
                                  }}>
                                Мои Проекты
                            </Link>
                            <Link className="mx-2" to={"/account"} onClick={handleAccountPage} style={{
                                color: activePage === "account" ? "blue" : "black",
                                textDecoration: 'none'
                            }}>
                                Личный кабинет
                            </Link>
                        </Nav>

                    </Col>
                    <Col className="d-flex justify-content-center">
                        <SearchBar/>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header