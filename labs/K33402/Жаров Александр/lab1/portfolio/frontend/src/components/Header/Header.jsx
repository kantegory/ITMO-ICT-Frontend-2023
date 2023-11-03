import "./Header.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../../img/main-icon.svg";
import sun from "../../img/sun.svg";
import moon from "../../img/moon-stars.svg";
import { Link } from "react-router-dom";
import SearchCell from "../SearchCell";
import useTheme from "../../hooks/useTheme";

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
            <button className="theme-button" onClick={ChangeTheme}>
              {theme === "dark" ? (
                <img src={moon} alt="" height={24} width={24} />
              ) : (
                <img src={sun} alt="" height={24} width={24} />
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
