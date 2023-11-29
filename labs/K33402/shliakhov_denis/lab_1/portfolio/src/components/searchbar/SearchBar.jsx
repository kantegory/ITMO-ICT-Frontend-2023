import React from "react";
import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";
function SearchBar() {
    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="Поиск"></Form.Control>
                    </Col>
                    <Col>
                        <Button>Найти</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default SearchBar