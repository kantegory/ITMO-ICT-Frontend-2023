import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

function Header() {

    return (
        <Navbar className="mb-2" bg="light" data-bs-theme="light">
            <Container>
                <h3>Портфолио</h3>
                <Nav>
                    <Link className="m-1 active" to={"/"}
                          style={{color: "black", textDecoration: 'none'}}>Главная</Link>
                    <Link className="m-1 active" to="/projects" style={{color: "black", textDecoration: 'none'}}>
                        Мои Проекты
                    </Link>
                </Nav>
                <SearchBar/>
            </Container>
        </Navbar>
    )
}

export default Header