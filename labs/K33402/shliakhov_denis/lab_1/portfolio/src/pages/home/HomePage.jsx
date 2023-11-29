import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function HomePage() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Добро пожаловать</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    Данный сайт был создан для отображения резюме, для дальнейшей работы, пожалуйста
                    пройдите <Link to="/register">регистрацию</Link> или <Link to="/login">войдите</Link> в свой аккаунт
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage