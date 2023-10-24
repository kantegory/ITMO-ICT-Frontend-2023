import "./Registration.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { setCookie } from "../../utils/cookiesUtils";
import { fetchUser } from "../../utils/fetchUtils";

function Registration() {
  const navigate = useNavigate();
  const params = useParams();
  const { setAuth } = useAuth();
  const { setUser } = useUser();

  const [formState, setFormState] = React.useState({
    name: null,
    email: null,
    password: null,
  });

  const onFormChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onLogin = async () => {
    const res = await fetch("http://localhost:3030/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())

      .then((data) => {
        if (data.token) {
          console.log(data.token);
          setCookie("token", JSON.stringify(data.token));

          fetchUser(data.token).then((user) => {
            setUser(user);
            setAuth(true);
            navigate("/");
          });
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => console.log(error));

    return res;
  };

  const onRegistration = async () => {
    const res = await fetch("http://localhost:3030/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setCookie("token", JSON.stringify(data.token));
          fetchUser(data.token).then((user) => {
            setUser(user);
            setAuth(true);
            navigate("/");
          });
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => console.log(error));

    return res;
  };

  const onClickBackToReg = () => {
    navigate("/registration/registration");
  };

  const onClickBackToLog = () => {
    navigate("/registration/login");
  };

  return (
    <>
      <div className="form-container">
        <Row>
          <h2>
            {params.isLogin === "registration"
              ? "Создание аккаунта"
              : "Вход в аккаунт"}
          </h2>
        </Row>
        <Form className="form">
          {params.isLogin === "registration" && (
            <Form.Group className="mb-3" controlId="name">
              <Form.Label column className="d-flex">
                Имя
              </Form.Label>
              <Col>
                <Form.Control
                  type="name"
                  placeholder="Имя"
                  value={formState.name || ""}
                  onChange={(e) => onFormChange(e)}
                />
              </Col>
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="email">
            <Form.Label column className="d-flex">
              Почта
            </Form.Label>
            <Col>
              <Form.Control
                type="email"
                placeholder="email@example.com"
                value={formState.email || ""}
                onChange={(e) => onFormChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label column className="d-flex">
              Пароль
            </Form.Label>
            <Col>
              <Form.Control
                type="password"
                placeholder="Пароль"
                value={formState.password || ""}
                onChange={(e) => onFormChange(e)}
              />
            </Col>
          </Form.Group>
        </Form>
        <Row className="item-container">
          <Col className="item-container justify-content-end">
            {params.isLogin === "registration" && (
              <>
                <Button variant="warning" onClick={() => onClickBackToLog()}>
                  Уже есть аккаунт
                </Button>
                <Button variant="success" onClick={() => onRegistration()}>
                  Создать аккаунт
                </Button>
              </>
            )}
            {params.isLogin === "login" && (
              <>
                <Button variant="warning" onClick={() => onClickBackToReg()}>
                  Создать аккаунт
                </Button>
                <Button variant="success" onClick={() => onLogin()}>
                  Войти
                </Button>
              </>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Registration;
