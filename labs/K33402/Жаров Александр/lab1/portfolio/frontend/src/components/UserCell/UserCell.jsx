import "./UserCell.css";
import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserCell = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Body className="cell-body">
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.about}</Card.Text>
        <Card.Text>Опыт работы: {user.experience}</Card.Text>
        <div className="d-flex justify-content-end">
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
