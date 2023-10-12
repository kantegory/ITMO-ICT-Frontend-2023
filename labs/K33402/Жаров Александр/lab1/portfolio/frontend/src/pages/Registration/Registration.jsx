import Header from "../../components/Header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import "./Registration.css";
import { useNavigate, useParams } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const params = useParams();

  const onClickBack = () => {
    navigate("/");
  };

  const onClickBackToReg = () => {
    navigate("/registration/reg");
  };

  const onClickBackToLog = () => {
    navigate("/registration/login");
  };

  const onCreateAccount = () => {
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
            {params.isLogin === "reg" ? "Создание аккаунта" : "Вход в аккаунт"}
          </h2>
        </Row>
        <Form className="form">
          {params.isLogin === "reg" && (
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Имя
              </Form.Label>
              <Col sm="10">
                <Form.Control type="name" placeholder="Имя" />
              </Col>
            </Form.Group>
          )}

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Почта
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Пароль
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Пароль" />
            </Col>
          </Form.Group>
        </Form>
        <Row className="button-group">
          <Col className="button-group justify-content-start">
            <Button onClick={() => onClickBack()}>На главную</Button>
          </Col>
          <Col className="button-group justify-content-end">
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
            {params.isLogin === "reg" && (
              <>
                <Button variant="warning" onClick={() => onClickBackToLog()}>
                  Уже есть аккаунт
                </Button>
                <Button variant="success" onClick={() => onCreateAccount()}>
                  Создать аккаунт
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
