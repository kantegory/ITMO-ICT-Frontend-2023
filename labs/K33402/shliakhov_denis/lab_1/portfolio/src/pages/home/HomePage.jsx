import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import store from "../../store";

function HomePage() {

    return (
        <>
            {
                store.getState().auth.status !== "connect" &&
                <Container className="justify-content-center mt-3">
                    <Row>
                        <Col>
                            <h1>Добро пожаловать</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Данный сайт был создан для отображения резюме, для дальнейшей работы, пожалуйста <Link
                            to="/register">аутентифицируйтесь</Link>
                        </Col>
                    </Row>
                </Container>
            }

            {
                store.getState().auth.status === "connect" &&
                <Container>
                    <Row>
                        <Col>
                            Добро пожаловать , {store.getState().auth.user.name}
                        </Col>
                    </Row>
                </Container>
            }
        </>


    )
}

export default HomePage