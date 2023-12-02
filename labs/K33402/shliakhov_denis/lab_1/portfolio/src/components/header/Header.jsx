import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

function Header() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <h3>Портфолио</h3>
                <Nav>
                    <Link className="m-1" to="/">Главная</Link>
                    <Link className="m-1" to="/projects">Проекты</Link>
                </Nav>
                <SearchBar/>
            </Container>
        </Navbar>
    )
}

export default Header