import "./Header.css";
import React, { useCallback, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import icon from "../../img/main-icon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/:${searchQuery}`);
    console.log("Вы ищете:", searchQuery);
  };
  return (
    <>
      <Navbar expand="md" className="body" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <img
              src={icon}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto item-container">
              <Link to="/" className="link">
                Профиль
              </Link>
              <Link to="account" className="link">
                Личный кабинет
              </Link>
            </Nav>
            <Form className="md-block" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleChange}
              />
              <Button variant="outline-success" onClick={handleSubmit}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
