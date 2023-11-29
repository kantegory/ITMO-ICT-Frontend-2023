import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function RegisterPage() {
    const {email, setEmail} = useState('')
    const {login , setLogin} = useState('')
    const {password, setPassword} = useState('')

    return(
        <Container>
            <Row>
                <Col md={6}>
                    <Form>
                        <Form.Control className="mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
                        <Form.Control className="mb-2" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} type="text"/>
                        <Form.Control placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage