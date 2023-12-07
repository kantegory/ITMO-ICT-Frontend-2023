import React, {useState} from "react";
import {Button, Col, Container, FloatingLabel, Image, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useForm} from "react-hook-form";
import store from "../../store";
import {useEditProfileDataMutation, useGetProfileDataQuery} from "../../store/projectsApi";

function AccountPage() {
    const userId = store.getState().authSlice.user.id

    const [disabled, setDisabled] = useState(true)

    const handleSetInput = () => {
        setDisabled(false)
    }

    const [editProfileData] = useEditProfileDataMutation()
    const {data, isLoading} = useGetProfileDataQuery(userId)

    const {
        register,
        handleSubmit
    } = useForm({
        mode: "onBlur", values: {
            name: data ? data.name : "",
            lastName: data ? data.lastName : "",
            email: data ? data.email : "",
            about: data ? data.about : "",
            image: data ? data.image : "",
        }
    })

    const handleEditProfileData = async (data) => {
        await editProfileData([data, userId])
        setDisabled(true)
    }

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
        <Container className="flex-row justify-content-center">
            {
                data.image &&
                <Row className={"d-flex justify-content-center"}>
                        <Image src={data.image} style={{width: 300, height: 300,borderRadius: 300 / 2}}/>
                </Row>
            }
            <Row className={"d-flex justify-content-center"}>
                <Form onSubmit={handleSubmit(handleEditProfileData)}>
                    <FloatingLabel label={"Имя"}>
                        <Form.Control disabled={disabled} {...register('name')} className="mb-1" placeholder="Имя"
                                      type="text"
                                      required={true}/>
                    </FloatingLabel>
                    <FloatingLabel label={"Фамилия"}>
                        <Form.Control disabled={disabled} {...register('lastName')} className="mb-1"
                                      placeholder="Фамилия"
                                      type="text" required={true}/>
                    </FloatingLabel>
                    <FloatingLabel label={"Почта"}>
                        <Form.Control disabled={disabled} {...register('email')} className="mb-1" placeholder="Почта"
                                      type="text"
                                      required={true}/>
                    </FloatingLabel>
                    <FloatingLabel label={"О себе"}>
                        <Form.Control disabled={disabled} {...register('about')} className="mb-1" placeholder="О себе"
                                      type="text"/>
                    </FloatingLabel>
                    <FloatingLabel label={"Фото"}>
                        <Form.Control disabled={disabled} {...register('image')} className="mb-1"
                                      placeholder="Ссылка на фото"
                                      type="text"/>
                    </FloatingLabel>
                    <Row>
                        <Col className={"d-flex justify-content-center"}>
                            <Button type={"submit"}>Сохранить</Button>
                            <Button variant={"secondary"} onClick={handleSetInput}>Редактировать</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    )
}


export default AccountPage