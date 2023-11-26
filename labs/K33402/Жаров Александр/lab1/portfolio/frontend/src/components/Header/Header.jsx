import "./Header.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import SearchCell from "../SearchCell";
import useTheme from "../../hooks/useTheme";
import { Icon } from "../Icon";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const { theme, setTheme } = useTheme();

  const ChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar expand="md" className="header" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <Icon id="main" height={40} width={40} />
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
            <button className="theme-button" onClick={ChangeTheme}>
              {theme === "dark" ? (
                <Icon id="moon" height={24} width={24} />
              ) : (
                <Icon id="sun" height={24} width={24} />
              )}
            </button>
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
