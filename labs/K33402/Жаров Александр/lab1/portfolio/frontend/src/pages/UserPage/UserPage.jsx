import "./UserPage.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Avatar from "../../components/Avatar";
import AvatarImg from "../../img/avatar.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUtils";
import { getCookie } from "../../utils/cookiesUtils";

function UserPage() {
  const navigate = useNavigate();
  const id = useParams();
  const userId = id.id.slice(1);
  const token = getCookie("token");
  const [user, setUser] = React.useState({});

  const fetchUserCallback = React.useCallback((token, id) => {
    fetchUser(token, id).then((res) => {
      setUser(res);
    });
  }, []);

  React.useEffect(() => {
    fetchUserCallback(token, userId);
  }, [fetchUserCallback, token, userId]);

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="d-flex justify-content-start">
            <Button onClick={() => navigate(-1)}>Назад</Button>
          </Col>
        </Row>
      </Container>
      <Container className="main-container">
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

export default UserPage;
