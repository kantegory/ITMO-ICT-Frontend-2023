import React, {useState} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Project from "../../components/project/Project";
import {useAddProjectMutation, useGetProjectsQuery} from "../../store/projectsApi";
import store from "../../store";
import Form from "react-bootstrap/Form";
import {useForm} from "react-hook-form";

function Account() {
    const userId = store.getState().authSlice.user.id
    const defaultImage = "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
    const [addProject] = useAddProjectMutation()
    const {data, isLoading} = useGetProjectsQuery(userId)

    const {
        register = {},
        reset,
        handleSubmit
    } = useForm({mode: "onBlur"})

    const handleAddProject = async (data) => {
        if (data.name !== "") {
            data.userId = userId
            await addProject(data).unwrap()
            handleClose()
            reset()
        }
    }



    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    if (isLoading) {
        return <Container>
            <Row>
                <Col>
                    <h1>Загрузка...</h1>
                </Col>
            </Row>
        </Container>
    }

    return (
        <Container className="justify-content-around">
            <Row>
                <Col className="d-flex justify-content-center" md={6}>
                    <h1>Мои проекты</h1>
                </Col>
                <Col className={"d-flex justify-content-center"} md={6}>
                    <Button onClick={handleShow}>Добавить проект</Button>
                </Col>
            </Row>
            <Row>
                {data.length !== 0 ? data.map((project) =>
                        <Col className={"d-flex justify-content-center mt-2"} md={4} lg={2} xs={6}>
                            <Project name={project.name} description={project.description} image={project.image !== "" ? project.image : defaultImage}
                                     link={project.link}/>
                        </Col>) :
                    <Col>
                        <h2>Пока проектов нет</h2>
                    </Col>}
            </Row>

            <Modal  centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(handleAddProject)}>
                        <Form.Control className="mb-1" {...register('name')} placeholder="Название проекта" type="text" required={true}/>
                        <Form.Control className="mb-1" {...register('description')} placeholder="Описание проекта" type="text" required={true}/>
                        <Form.Control className="mb-1" {...register('image')} placeholder="Ссылка на фото проекта" type="text"/>
                        <Form.Control className="mb-1" {...register('link')} placeholder="Ссылка на гитхаб" type="text" required={true}/>
                        <Row className="justify-content-center">
                            <Col className="d-flex justify-content-center" md={2}>
                                <Button type="submit">Добавить</Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>

        </Container>


    )
}

export default Account