import "./Profile.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Avatar from "../../components/Avatar";
import AvatarImg from "../../img/avatar.jpg";
import useUser from "../../hooks/useUser";

function Profile() {
  const { user } = useUser();
  return (
    <>
      <Container className="main-container">
        <Form className="md-none">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Row>
          <Col xs={5} sm={3} md={2}>
            <Avatar src={AvatarImg} size={100} />
          </Col>
          <Col className="name">
            <h3>{user.name}</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-start">
            {user.about ? user.about : "-"}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Места работы</h5>
          </Col>
        </Row>

        <Col className="d-flex justify-content-start">
          <div>{user.experience ? user.experience : "-"}</div>
        </Col>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Проекты</h5>
          </Col>
        </Row>
        <Col className="d-flex justify-content-start">
          <div>{user.projects ? user.projects : "-"}</div>
        </Col>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">
            <h5>Контакты</h5>
          </Col>
        </Row>
        <Col className="d-flex justify-content-start">
          <div>{user.contacts ? user.contacts : "-"}</div>
        </Col>
      </Container>
    </>
  );
}

export default Profile;
