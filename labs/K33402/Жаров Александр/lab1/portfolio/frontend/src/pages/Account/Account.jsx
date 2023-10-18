import "./Account.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

function Account() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const { user, setUser } = useUser();

  const [formState, setFormState] = React.useState({
    _id: user._id,
    name: user.name || null,
    photo: user.photo || null,
    email: user.email || null,
    about: user.about || null,
    experience: user.experience || null,
    projects: user.projects || null,
    contacts: user.contacts || null,
  });

  const onFormChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onFormSubmit = async () => {
    console.log("submit");
    const res = await fetch("http://localhost:3030/api/update-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => console.log(error));

    return res;
  };

  const onLogout = () => {
    setUser({});

    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    setAuth(false);
    navigate("/registration/login");
  };

  return (
    <>
      <Container className="main-container">
        <Row>
          <Col>
            <h2>Личный кабинет</h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Изменить информацию</h5>
          </Col>
        </Row>
        <Form className="form">
          <Form.Group
            className="mb-3"
            controlId="name"
            onChange={(e) => onFormChange(e)}
          >
            <Form.Label column className="d-flex">
              Имя и фамилия
            </Form.Label>
            <Col>
              <Form.Control
                type="name"
                placeholder="Иван Иванов"
                value={formState.name || ""}
                onChange={(e) => onFormChange(e)}
              />
            </Col>
          </Form.Group>

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

          <Form.Group className="mb-3" controlId="photo">
            <Form.Label column className="d-flex">
              фото
            </Form.Label>
            <Col>
              <Form.Control
                type="file"
                value={formState.photo || ""}
                onChange={(e) => onFormChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="about">
            <Form.Label column className="d-flex">
              О себе
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                type="info"
                placeholder="Расскажите о себе"
                value={formState.about || ""}
                onChange={(e) => onFormChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="experience">
            <Form.Label column className="d-flex">
              Опыт работы
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                type="experience"
                placeholder="Расскажите где вы работали"
                value={formState.experience || ""}
                onChange={(e) => onFormChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="projects">
            <Form.Label column className="d-flex">
              Проектная деятельность
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                type="projects"
                placeholder="Расскажите о своих проектах"
                value={formState.projects || ""}
                onChange={(e) => onFormChange(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="contacts">
            <Form.Label column className="d-flex">
              Контакты
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                type="contacts"
                placeholder="Расскажите о своих проектах"
                value={formState.contacts || ""}
                onChange={(e) => onFormChange(e)}
              />
            </Col>
          </Form.Group>
        </Form>
        <Row>
          <Col className="d-flex justify-content-end">
            <Button onClick={() => onFormSubmit()}>Сохранить</Button>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Изменить пароль</h5>
          </Col>
        </Row>

        <Form className="form">
          <Form.Group className="mb-3" controlId="currentPassword">
            <Form.Label column className="d-flex">
              Текущий пароль
            </Form.Label>
            <Col>
              <Form.Control type="password" placeholder="Текущий пароль" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="newPassword">
            <Form.Label column className="d-flex">
              Новый пароль
            </Form.Label>
            <Col>
              <Form.Control type="password" placeholder="Пароль" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="checkPassword">
            <Form.Label column className="d-flex" />
            <Col>
              <Form.Control type="password" placeholder="Повторить пароль" />
            </Col>
          </Form.Group>
        </Form>
        <Row>
          <Col className="d-flex justify-content-start">
            <Button variant="danger" onClick={() => onLogout()}>
              Выйти из аккаунта
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button>Сохранить</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
