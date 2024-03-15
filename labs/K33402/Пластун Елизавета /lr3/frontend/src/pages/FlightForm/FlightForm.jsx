import React, { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

function FlightForm() {
  const { setToken, token } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    departure_datetime: "",
    arrival_datetime: "",
    sold_tickets: 0,
    route: "",
    airplanes: "",
    crew: "",
  });

  const [availableRoutes, setAvailableRoutes] = useState([]);
  const [availableAirplanes, setAvailableAirplanes] = useState([]);
  const [availableCrews, setAvailableCrews] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/routes/all", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setAvailableRoutes(result);
      })
      .catch((error) => console.error("Error fetching data:", error));

    fetch("http://127.0.0.1:8000/api/airplanes/all/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setAvailableAirplanes(result);
      })
      .catch((error) => console.error("Error fetching data:", error));

    fetch("http://127.0.0.1:8000/api/crews/all/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setAvailableCrews(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [token]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "airplanes" || name === "crew") {
      const selectedValues = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );

      setFormData({
        ...formData,
        [name]: selectedValues,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    fetch("http://127.0.0.1:8000/api/flights/new/", {
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

  return (
    <div className="container mt-4">
      <h2>Создание нового рейса</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="departureDatetime">
            <Form.Label>Время вылета:</Form.Label>
            <Form.Control
              type="datetime-local"
              name="departure_datetime"
              value={formData.departure_datetime}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="arrivalDatetime">
            <Form.Label>Время прилета:</Form.Label>
            <Form.Control
              type="datetime-local"
              name="arrival_datetime"
              value={formData.arrival_datetime}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="route">
          <Form.Label>Маршрут:</Form.Label>
          <Form.Select
            name="route"
            value={formData.route}
            onChange={handleChange}
          >
            <option value="">Выбор маршрута</option>
            {availableRoutes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.departure_point} - {route.destination_point}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="airplanes">
          <Form.Label>Самолет:</Form.Label>
          <Form.Select
            name="airplanes"
            value={formData.airplanes}
            onChange={handleChange}
          >
            <option value="">Выбор самолета</option>
            {availableAirplanes.map((airplane) => (
              <option key={airplane.id} value={String(airplane.id)}>
                {airplane.number} {airplane.plane_type}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="crew">
          <Form.Label>Экипаж:</Form.Label>
          <Form.Select
            name="crew"
            value={formData.crew}
            onChange={handleChange}
          >
            <option value="">Выбор экипажа</option>
            {availableCrews.map((crew) => (
              <option key={crew.id} value={String(crew.id)}>
                {crew.id}
              </option>
            ))}
          </Form.Select>
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

export default FlightForm;
