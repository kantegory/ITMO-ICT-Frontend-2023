import React, {useContext} from "react";
import {Button, Col, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import "./Header.css"
import {ThemeContext} from "../../ThemeProvider";

function Header() {
    const [theme,setTheme] = useContext(ThemeContext)

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }


    return (
        <Navbar collapseOnSelect expand="lg" className="header mb-2">
            <Container className={"d-flex justify-content-start px-2"}>
                <Col className={"d-flex"} >
                    <h3>Портфолио</h3>
                </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col className={"d-flex justify-content-center"}>
                        <Nav className={"d-flex align-items-center"}>
                            <Link className="mx-2 active" to={"/"}
                                  style={{
                                      textDecoration: 'none'
                                  }}>Главная</Link>
                            <Link className="mx-2 active" to="/projects"
                                  style={{
                                      textDecoration: 'none'
                                  }}>
                                Мои Проекты
                            </Link>
                            <Link className="mx-2" to={"/account"} style={{
                                textDecoration: 'none'
                            }}>
                                Личный кабинет
                            </Link>
                        </Nav>

                    </Col>
                    <Col className="d-flex justify-content-center">
                        <SearchBar/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button onClick={handleTheme}>Переключить тему</Button>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header