import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./SearchBar.css"

function SearchBar() {
    const [searchText, setSearchText] = useState("")

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("search/" + searchText)
    }

    return (
        <Form onSubmit={handleClick}>
            <div className="searchRow">
                <Form.Control onChange={(e) => {
                    setSearchText(e.target.value)
                }} value={searchText} placeholder="Поиск" type="text" required={true}></Form.Control>
                <Button type="submit">Найти</Button>
            </div>
        </Form>
    )
}

export default SearchBar