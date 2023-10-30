import "./Header.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../../img/main-icon.svg";
import { Link } from "react-router-dom";
import SearchCell from "../SearchCell";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

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
            <div className="md-block">
              <SearchCell
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
