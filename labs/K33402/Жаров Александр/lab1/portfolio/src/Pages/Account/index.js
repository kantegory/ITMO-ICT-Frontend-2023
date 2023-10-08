import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Account.css";
import Button from "react-bootstrap/esm/Button";

function Account() {
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
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
            <Form.Label column sm="2">
              Имя и фамилия
            </Form.Label>
            <Col sm="10">
              <Form.Control type="name" placeholder="Иван Иванов" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhoto">
            <Form.Label column sm="2">
              фото
            </Form.Label>
            <Col sm="10">
              <Form.Control type="file" />
            </Col>
          </Form.Group>

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
              О себе
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                type="info"
                placeholder="Расскажите о себе"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextJobInfo"
          >
            <Form.Label column sm="2">
              Опыт работы
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                type="jobinfo"
                placeholder="Расскажите где вы работали"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextProjects"
          >
            <Form.Label column sm="2">
              Проектная деятельность
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="textarea"
                type="info"
                placeholder="Расскажите о своих проектах"
              />
            </Col>
          </Form.Group>
        </Form>
        <Row>
          <Col className="d-flex justify-content-end">
            <Button>Сохранить</Button>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Изменить пароль</h5>
          </Col>
        </Row>

        <Form className="form">
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Текущий пароль
            </Form.Label>
            <Col sm="10">
              <Form.Control type="name" placeholder="Текущий пароль" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Новый пароль
            </Form.Label>
            <Col sm="10">
              <Form.Control type="name" placeholder="Пароль" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2" />
            <Col sm="10">
              <Form.Control type="name" placeholder="Повторить пароль" />
            </Col>
          </Form.Group>
        </Form>
        <Row>
          <Col className="d-flex justify-content-end">
            <Button>Сохранить</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Account;
