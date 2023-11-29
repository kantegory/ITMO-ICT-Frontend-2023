import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function HomePage() {

    return (
        <Container className="justify-content-center mt-3">
            <Row>
                <Col>
                    <h1>Добро пожаловать</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    Данный сайт был создан для отображения резюме, для дальнейшей работы, пожалуйста <Link to="/register">аутентифицируйтесь</Link>
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage