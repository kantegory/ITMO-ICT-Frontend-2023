import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import store from "../../store";
import {useGetProfileDataQuery, useGetUsersQuery} from "../../store/projectsApi";
import HomeUserProjects from "../../components/home_user/HomeUserProjects";

function HomePage() {

    const {data, isLoading} = useGetUsersQuery()

    const getRandomUsers = () => {
        const shuffledUsers = data.map(user => {
            return {id: user.id, name: user.name, lastName: user.lastName}
        }).sort(() => {
            return 0.5 - Math.random()
        })
        return shuffledUsers.slice(0, 5)
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
        <>
            {
                store.getState().authSlice.status !== "connect" &&
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
                store.getState().authSlice.status === "connect" &&
                <Container fluid className={"justify-content-center"}>
                    <Row className="d-flex justify-content-center">
                        <Col className="d-flex justify-content-center">
                            <h1>Рекомендуем посмотреть</h1>
                        </Col>
                    </Row>
                    <Row className={"d-flex justify-content-center"}>
                        {getRandomUsers().map((user) =>
                            <Row className={"d-flex justify-content-evenly"}>
                                <HomeUserProjects user={user}/>
                            </Row>
                        )}
                    </Row>
                </Container>
            }
        </>

    )
}

export default HomePage