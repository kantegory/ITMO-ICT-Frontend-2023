import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useGetOneProjectQuery} from "../../store/projectsApi";
import Project from "../../components/project/Project";

function SearchResultPage() {
    const { searchText } = useParams()
    const {data , isLoading} = useGetOneProjectQuery(searchText)

    if (isLoading){
        return (
            <Container>
                <Row>
                    <Col>
                        Поиск...
                    </Col>
                </Row>
            </Container>
        )
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Результат поиска</h1>
                </Col>
            </Row>
            <Row>
                {
                    data.length !== 0 ? data.map( (project) =>
                        <Col md={4} lg={3}>
                            <Project name={project.name} description={project.description} image={project.image} link={project.link}/>
                        </Col> ) :
                        <Col>
                            <h2>Ничего не найдено</h2>
                        </Col>
                }

            </Row>
        </Container>
    )
}

export default SearchResultPage