import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";
import {useGetOneProjectQuery} from "../../store/projectsApi";
import {useNavigate} from "react-router-dom";
function SearchBar() {
    const [searchText , setSearchText] = useState("")

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("search/"+ searchText)
    }

    return (
        <>
            <Form onSubmit={handleClick}>
                <Row>
                    <Col>
                        <Form.Control onChange={(e) => {setSearchText(e.target.value)}} value={searchText} placeholder="Поиск" type="text" required={true}></Form.Control>
                    </Col>
                    <Col>
                        <Button type="submit">Найти</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default SearchBar