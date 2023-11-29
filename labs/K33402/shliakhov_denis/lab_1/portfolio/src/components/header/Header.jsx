import React, {useState} from "react";
import {Button, Col, Container, Modal, Nav, Navbar, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

function Header() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <h3>Портфолио</h3>
                <Nav>
                    <Link className="m-1" to="/">Главная</Link>
                    <Link className="m-1" to="/account">Личный кабинет</Link>
                    <Link className="m-1" to="/login">Вход</Link>
                    <Link className="m-1" to="/register">Регистрация</Link>
                </Nav>
                <SearchBar/>
            </Container>
        </Navbar>
    )
}

export default Header