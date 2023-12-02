import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Project from "../../components/project/Project";
import store from "../../store";

function Account() {

    const projects = store.getState().auth.user.projects

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Мои проекты</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {projects.map((project) =>
                        <Project name={project.name} description={project.description} image={project.image}/>
                    )}
                </Col>
            </Row>
        </Container>

    )
}

export default Account