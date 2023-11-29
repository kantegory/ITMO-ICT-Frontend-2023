import React, {useState} from "react";
import {Button, Col, Container, Row, Tab, TabContainer, Tabs} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import {authUser} from "../../store/slices/userSlice";

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('login')

    const dispatch = useDispatch()
    const requestAuthUser = (data) => {
        dispatch(authUser({user: data, params: status}))
        console.log(data)
    }

    return (
        <Container className="justify-content-center mt-3">
            <Tabs justify activeKey={status} onSelect={(k) => setStatus(k)}>
                <Tab className="d-flex justify-content-center mt-2" title='Вход' eventKey='login'>
                    {
                        status === "login" &&
                        <Container fluid>
                            <Form onSubmit={requestAuthUser}>
                                <Row className="justify-content-center mb-1">
                                    <Col md={4}>
                                        <Form.Control className="mb-2" placeholder="Email" value={email}
                                                      onChange={(e) => setEmail(e.target.value)} type="email"/>
                                        <Form.Control placeholder="Пароль" value={password}
                                                      onChange={(e) => setPassword(e.target.value)} type="password"/>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col md={4}>
                                        <Button type="submit">Войти</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    }
                </Tab>
                <Tab className="d-flex justify-content-center " title='Регистрация' eventKey='register'>
                    {
                        status === 'register' &&
                        <Container fluid>
                            <Form onSubmit={requestAuthUser}>
                                <Row className="justify-content-center mb-1">
                                    <Col md={4}>
                                        <Form.Control className="mb-2" placeholder="Email" value={email}
                                                      onChange={(e) => setEmail(e.target.value)} type="email"/>
                                        <Form.Control className="mb-2" placeholder="Пароль" value={password}
                                                      onChange={(e) => setPassword(e.target.value)} type="password"/>
                                        <Form.Control className="mb-2" placeholder="Email" value={email}
                                                      onChange={(e) => setEmail(e.target.value)} type="email"/>
                                        <Form.Control placeholder="Пароль" value={password}
                                                      onChange={(e) => setPassword(e.target.value)} type="password"/>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col md={4}>
                                        <Button type="submit">Зарегистрироваться</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    }
                </Tab>
            </Tabs>
        </Container>

    )
}

export default RegisterPage