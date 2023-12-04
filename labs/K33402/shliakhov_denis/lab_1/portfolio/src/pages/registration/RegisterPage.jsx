import React, {useState} from "react";
import {Button, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import {set, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {authUser} from "../../store/slices/authSlice";

function RegisterPage() {
    const [status, setStatus] = useState('login')
    const [hideLabel , setHide] = useState(true)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {
        register = {} ,
        handleSubmit,
        reset
    } = useForm({mode: "onBlur"})

    const requestAuthUser = (data) => {
        dispatch(authUser({user: data, params: status})).then((value) => {
            if (!value.error){
                reset()
                setHide(true)
                navigate("/")
            } else {
                setHide(false)
            }
        })
    }

    return (
        <Container className="justify-content-center mt-3">
            <Tabs justify activeKey={status} onSelect={(k) => setStatus(k)}>
                <Tab className="d-flex justify-content-center mt-2" title='Вход' eventKey='login'>
                    {
                        status === "login" &&
                        <Container fluid>
                            <Form onSubmit={handleSubmit(requestAuthUser)}>
                                <Row className="justify-content-center mb-1">
                                    <Col md={4}>
                                        <Form.Control {...register('email')} className="mb-2" placeholder="Email" type="email"/>
                                        <Form.Control {...register('password')} placeholder="Пароль" type="password"/>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col md={4}>
                                        <Button type="submit">Войти</Button>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col Col md={4}>
                                        <Form.Label hidden={hideLabel} style={{color:"red"}}>Неверные данные</Form.Label>
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
                            <Form onSubmit={handleSubmit(requestAuthUser)}>
                                <Row className="justify-content-center mb-1">
                                    <Col md={4}>
                                        <Form.Control {...register('name')} className="mb-2" placeholder="Имя" type="text"/>
                                        <Form.Control {...register('lastName')} className="mb-2" placeholder="Фамилия" type="text"/>
                                        <Form.Control {...register('email')} className="mb-2" placeholder="Email" type="email"/>
                                        <Form.Control {...register('password')} className="mb-2" placeholder="Пароль" type="password"/>
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