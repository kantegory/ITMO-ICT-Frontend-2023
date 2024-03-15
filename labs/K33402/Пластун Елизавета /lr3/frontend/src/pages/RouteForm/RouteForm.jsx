import React, { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function RouteForm() {
  const { token } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    flight_number: "",
    distance: 0,
    departure_point: "",
    landing_points: "",
    transit_landings: "",
    destination_point: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    fetch("http://127.0.0.1:8000/api/routes/new/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Flight created successfully:", result);
        navigate("/");
      })
      .catch((error) => console.error("Error creating flight:", error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Создание нового маршрута</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="flightNumber">
          <Form.Label>Номер рейса:</Form.Label>
          <Form.Control
            type="text"
            name="flight_number"
            value={formData.flight_number}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="distance">
          <Form.Label>Расстояние до пункта назначения:</Form.Label>
          <Form.Control
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="departurePoint">
          <Form.Label>Пункт вылета:</Form.Label>
          <Form.Control
            type="text"
            name="departure_point"
            value={formData.departure_point}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="transitLandings">
          <Form.Label>Транзитные посадки:</Form.Label>
          <Form.Control
            type="text"
            name="transit_landings"
            value={formData.transit_landings}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="destinationPoint">
          <Form.Label>Пункт назначения:</Form.Label>
          <Form.Control
            type="text"
            name="destination_point"
            value={formData.destination_point}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Создать
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/");
          }}
          className="m-3"
        >
          На главную
        </Button>
      </Form>
    </div>
  );
}

export default RouteForm;
