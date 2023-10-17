import Header from "../../components/Header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import "./Registration.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = async () => {
    const res = await fetch("http://localhost:3030/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "test1",
        password: "test1",
        about: "sdfsdfds",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAuth(true);
        navigate("/");
      })

      .catch((error) => console.log(error));
    return res;
  };

  const { isAuthenticate, setAuth } = useAuth();

  const onClickBack = () => {
    navigate("/");
  };

  const onClickBackToReg = () => {
    navigate("/registration/registration");
  };

  const onClickBackToLog = () => {
    navigate("/registration/login");
  };

  const onCreateAccount = () => {
    setAuth(true);
    navigate("/");
  };

  const onLogin = () => {
    navigate("/");
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
                <Form.Control type="name" placeholder="Имя" />
              </Col>
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="email">
            <Form.Label column className="d-flex">
              Почта
            </Form.Label>
            <Col>
              <Form.Control type="email" placeholder="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label column className="d-flex">
              Пароль
            </Form.Label>
            <Col>
              <Form.Control type="password" placeholder="Пароль" />
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
                <Button variant="success" onClick={() => onCreateAccount()}>
                  Создать аккаунт
                </Button>
              </>
            )}
            {params.isLogin === "login" && (
              <>
                <Button variant="warning" onClick={() => onClickBackToReg()}>
                  Создать аккаунт
                </Button>
                <Button variant="success" onClick={() => onSubmit()}>
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
