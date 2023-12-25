import React, {useContext} from "react";
import {Button, Col, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import "./Header.css"
import {ThemeContext} from "../../ThemeProvider";
import {Icon} from "../icon/Icon";

function Header() {
    const [theme,setTheme] = useContext(ThemeContext)

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }


    return (
        <Navbar collapseOnSelect expand="lg" className="header mb-2">
            <Container className={"d-flex justify-content-start px-2"}>
                <Col className={"d-flex"} >
                    <Icon height={40} width={40} id="portfolio"></Icon>
                    <h2>Портфолио</h2>
                </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col className={"navTittles d-flex justify-content-center"}>
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
                        <Button style={{backgroundColor : "transparent" , borderColor: "transparent"}} onClick={handleTheme}>
                            <Icon height={40} width={40} id={theme === "light" ? "darkSun" : "lightMoon"}></Icon>
                        </Button>

                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header