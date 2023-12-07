import React, {useState} from "react";
import {Button, Card, Col, Modal, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useForm} from "react-hook-form";
import {useDeleteProjectMutation, useEditProjectMutation} from "../../store/projectsApi";
import store from "../../store";


function Project({id, name, description, image, link, isHomePage = false}) {
    const userId = store.getState().authSlice.user.id
    const [show, setShow] = useState(false)
    const [editProject] = useEditProjectMutation()
    const [deleteProject] = useDeleteProjectMutation()

    const {
        register,
        reset,
        handleSubmit
    } = useForm({
        mode: "onBlur", values: {
            name: name,
            description: description,
            image: image,
            link: link
        }
    })

    const handleDeleteProject = async () => {
        await deleteProject(id).unwrap()
        reset()
        handleClose()
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const moveToGitHub = (url) => {
        window.open(url, '_blank')
    }

    const handleEditProject = async (data) => {
        if (data.name !== "") {
            data.userId = userId
            await editProject([data, id]).unwrap()
            handleClose()
            reset()
        }
    }

    return (
        <>
            <Card className="text-center p-1" bg={'light'} text={'dark'} style={{width: '200px', minHeight: '300px' ,minWidth : "200px"}}>
                <Card.Img variant="top" src={image} height="100%"/>
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => moveToGitHub(link)}>Github</Button>
                    {
                        !isHomePage &&
                        <Button className={"mt-2"} variant={"secondary"} onClick={handleShow}>Редактировать</Button>
                    }
                </Card.Body>
            </Card>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(handleEditProject)}>
                        <Form.Control {...register('name')} className="mb-1" placeholder="Название проекта" type="text"
                                      required={true}/>
                        <Form.Control {...register('description')} className="mb-1" placeholder="Описание проекта"
                                      type="text" required={true}/>
                        <Form.Control {...register('image')} className="mb-1" placeholder="Ссылка на фото проекта"
                                      type="text"/>
                        <Form.Control {...register('link')} className="mb-1" placeholder="Ссылка на гитхаб" type="text"
                                      required={true}/>
                        <Row className="justify-content-evenly">
                            <Col className="d-flex flex-fill justify-content-center" md={2}>
                                <Button type="submit">Добавить</Button>
                            </Col>
                            <Col className="d-flex flex-fill justify-content-center" md={2}>
                                <Button variant={"danger"} type="button" onClick={handleDeleteProject}>Удалить</Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>


    )
}

export default Project