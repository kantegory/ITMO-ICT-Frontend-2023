import React, {useState} from "react";
import {Button, Col, Container, Modal, Nav, Navbar, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

function Header() {
    const [isRegVisible, setRegVisible] = useState(false);
    const showReg = () => setRegVisible(true);
    const closeReg = () => setRegVisible(false);

    const [isEnterVisible , setEnterVisible] = useState(false);
    const showEnter = () => setEnterVisible(true);
    const closeEnter = () => setEnterVisible(false);
    return (
        <>
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
                    <Nav.Item>
                        <Button className="m-1" onClick={showEnter}>Вход</Button>
                        <Button className="m-1" onClick={showReg}>Регистрация</Button>
                    </Nav.Item>

                </Container>
            </Navbar>

            <Container fluid className="mt-3">
                <Row className="d-flex justify-content-center">
                    <Col md={3}>
                        <Modal show={isRegVisible} onHide={closeReg} centered>
                            <Modal.Body>
                                <Modal.Title className="d-flex justify-content-center">
                                    Регистрация
                                </Modal.Title>
                                <Form>
                                    <Form.Group className="mb-1">
                                        <Form.Control type="text" placeholder="Логин"/>
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Control type="password" placeholder="Пароль"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button onClick={closeReg} type="submit">Зарегистрироваться</Button>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="mt-3">
                <Row className="d-flex justify-content-center">
                    <Col md={3}>
                        <Modal show={isEnterVisible} onHide={closeEnter} centered>
                            <Modal.Body>
                                <Modal.Title className="d-flex justify-content-center">
                                    Вход
                                </Modal.Title>
                                <Form>
                                    <Form.Group className="mb-1">
                                        <Form.Control type="text" placeholder="Логин"/>
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Control type="password" placeholder="Пароль"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button onClick={closeEnter} type="submit">Войти</Button>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header