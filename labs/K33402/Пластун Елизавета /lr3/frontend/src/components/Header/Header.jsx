import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";

function Header({ username }) {
  const navigate = useNavigate();
  const { setToken, token } = useUser();

  const onLogout = () => {
    setToken("");
    navigate("login");
  };

  return (
    <header>
      <div className="container header-div">
        <div className="lable">Авиасейлс</div>
        <div className="header-left-cell">
          <div>{username}</div>
          <Button
            variant="outline-danger"
            className="logout-button"
            onClick={() => onLogout()}
          >
            Выйти
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
