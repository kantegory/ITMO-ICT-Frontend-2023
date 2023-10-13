import "./Header.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import icon from "../../img/main-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function Header() {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  const navigate = useNavigate();

  const handleClickLog = () => {
    navigate("/registration/login");
  };

  const handleClickReg = () => {
    navigate("/registration/reg");
  };

  return (
    <>
      <Navbar expand="sm" className="body" data-bs-theme="dark" sticky="top">
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
            <Nav className="me-auto link-container">
              <Link to="/" className="link">
                Профиль
              </Link>
              <Link to="account" className="link">
                Личный кабинет
              </Link>
            </Nav>
            {isAuthorized ? (
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            ) : (
              <div className="button-group justify-content-center">
                <Button
                  className="button"
                  variant="outline-warning"
                  onClick={() => handleClickReg()}
                >
                  Регистрация
                </Button>
                <Button
                  className="button"
                  variant="outline-success"
                  onClick={() => handleClickLog()}
                >
                  Войти
                </Button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
