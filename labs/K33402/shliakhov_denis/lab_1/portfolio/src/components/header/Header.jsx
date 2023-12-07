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
        <Navbar className="mb-2" bg="light" data-bs-theme="light">
            <Container fluid className={"d-flex px-2"}>
                <Row className={"d-flex justify-content-around"} style={{minWidth: "100%"}}>
                    <Col md={2} className={"d-flex justify-content-center"}>
                        <h3>Портфолио</h3>
                    </Col>
                    <Col md={6} className={"d-flex justify-content-center"}>
                        <Nav className={"d-flex align-items-center"}>
                            <Link className="mx-2 active" to={"/"} onClick={handleHomePage}
                                  style={{
                                      color: activePage === "home" ? "blue" : "black",
                                      textDecoration: 'none'
                                  }}>Главная</Link>
                            <Link className="mx-2 active" to="/projects" onClick={handleProjectsPage}
                                  style={{color: activePage === "projects" ? "blue" : "black", textDecoration: 'none'}}>
                                Мои Проекты
                            </Link>
                            <Link className="mx-2" to={"/account"} onClick={handleAccountPage} style={{color: activePage === "account" ? "blue" : "black", textDecoration: 'none'}}>
                                Личный кабинет
                            </Link>
                        </Nav>
                    </Col>
                    <Col md={2}>
                        <SearchBar/>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Header