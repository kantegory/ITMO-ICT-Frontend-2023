import "./UserCell.css";
import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserCell = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Body className="cell-body">
        <Card.Title style={{ color: "var(--body-text)" }}>
          {user.name}
        </Card.Title>
        <Card.Text className="text">{user.about}</Card.Text>
        <Card.Text className="text">Опыт работы: {user.experience}</Card.Text>
        <div className="d-flex justify-content-end text">
          <Button
            variant="primary"
            onClick={() => {
              console.log(user._id);
              navigate(`/user/:${user._id}`);
            }}
          >
            Перейти
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCell;
