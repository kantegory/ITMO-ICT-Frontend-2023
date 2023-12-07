import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {useGetProfileDataQuery, useGetProjectsQuery} from "../../store/projectsApi";
import Project from "../project/Project";

function HomeUserProjects(userData) {
    const defaultImage = "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"

    const {data, isLoading} = useGetProjectsQuery(userData.user.id)
    const {data : profileData , isLoading : isProfileLoading} = useGetProfileDataQuery(userData.user.id)

    const randomProjects = () => {
        if (!data) {
            return null
        }
        const arrayForShuffle = [...data]
        const shuffledProjects = arrayForShuffle.sort(() => {
            return 0.5 - Math.random()
        })
        return shuffledProjects.slice(0, 5)
    }

    if (!isLoading) {
        const projects = randomProjects().filter((el) => {
            return el !== []
        })

        if (projects.length !== 0 && !isProfileLoading) {
            return (
                <Container className="justify-content-center">
                    <Row className="d-flex justify-content-center">
                        <Col className="d-flex justify-content-center my-1">
                            <Image className={"d-flex m-1"} roundedCircle src={profileData.image}  height={100} width={100}/>
                            <h2 className={"d-flex align-items-center m-1"}>{userData.user.name} {userData.user.lastName}</h2>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        {projects.map((project) =>
                            <Col className="d-flex justify-content-center" md={2} xs={6}>
                                <Project name={project.name} description={project.description}
                                         image={project.image !== "" ? project.image : defaultImage}
                                         link={project.link} isHomePage={true}/>
                            </Col>
                        )}
                    </Row>
                </Container>
            )
        }
    }
}

export default HomeUserProjects