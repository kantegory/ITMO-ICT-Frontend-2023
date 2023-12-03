import React, {useState} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Project from "../../components/project/Project";
import {useAddProjectMutation, useGetProjectsQuery} from "../../store/projectsApi";
import store from "../../store";
import Form from "react-bootstrap/Form";
import {useForm} from "react-hook-form";

function Account() {
    const userId = store.getState().authSlice.user.id
    const [addProject] = useAddProjectMutation()
    const {data, isLoading} = useGetProjectsQuery(userId)


    const handleAddProject = async (data) => {
        data.userId = userId
        await addProject(data).unwrap()
    }

    const {
        register = {} ,
        handleSubmit
    } = useForm({mode: "onBlur"})

    const [show , setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    if (isLoading) {
        return <Container>
            <Row>
                <Col>
                    <h1>Loading...</h1>
                </Col>
            </Row>
        </Container>
    }

    return (<Container>
            <Row>
                <Col md={9}>
                    <h1>Мои проекты</h1>
                </Col>
                <Col md={3}>
                    <Button onClick={handleShow}>Добавить проект</Button>
                </Col>
            </Row>
            <Row>
                {data.length !== 0 ? data.map((project) =>
                        <Col md={4} lg={3}>
                            <Project name={project.name} description={project.description} image={project.image}/>
                        </Col>) :
                    <Col>
                        <h2>Пока проектов нет</h2>
                    </Col>}
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit(handleAddProject)}>
                    <Form.Control {...register('name')} placeholder="Название проекта" type="text"/>
                    <Form.Control {...register('description')} placeholder="Описание проекта" type="text"/>
                    <Form.Control {...register('image')} placeholder="Ссылка на фото проекта" type="text"/>
                    <Form.Control {...register('link')} placeholder="Ссылка на гитхаб" type="text"/>
                    <Button type="submit" onClick={handleClose}>Добавить</Button>
                </Form>
            </Modal>
        </Container>

    )
}

export default Account