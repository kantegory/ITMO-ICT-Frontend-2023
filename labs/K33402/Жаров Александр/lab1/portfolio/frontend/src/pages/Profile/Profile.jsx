import "./Profile.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Avatar from "../../components/Avatar";
import AvatarImg from "../../img/avatar.jpg";
import useUser from "../../hooks/useUser";
import SearchCell from "../../components/SearchCell";

function Profile() {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <>
      <Container className="main-container ">
        <div className="md-none">
          <SearchCell
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
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
            <h4>Места работы</h4>
          </Col>
        </Row>

        <Col className="d-flex justify-content-start">
          <div>{user.experience ? user.experience : "-"}</div>
        </Col>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">
            <h4>Проекты</h4>
          </Col>
        </Row>
        <Col className="d-flex justify-content-start">
          <div>{user.projects ? user.projects : "-"}</div>
        </Col>
        <hr />
        <Row>
          <Col className="d-flex justify-content-start">
            <h4>Контакты</h4>
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
