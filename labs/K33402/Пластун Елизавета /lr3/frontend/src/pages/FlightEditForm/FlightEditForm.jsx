import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { Form, Button, Row, Col } from "react-bootstrap";

const FlightEditForm = () => {
  const { flightId } = useParams();
  const { setToken, token } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    departure_datetime: "",
    arrival_datetime: "",
    transit_landing_datetime: "",
    sold_tickets: 0,
    route: 0,
    airplanes: "",
    crew: "",
  });

  const [availableRoutes, setAvailableRoutes] = useState([]);
  const [availableAirplanes, setAvailableAirplanes] = useState([]);
  const [availableCrews, setAvailableCrews] = useState([]);

  const formatDateTimeForInput = (dateTime) => {
    const formattedDateTime = new Date(dateTime);
    const year = formattedDateTime.getFullYear();
    const month = (formattedDateTime.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = formattedDateTime.getDate().toString().padStart(2, "0");
    const hours = formattedDateTime.getHours().toString().padStart(2, "0");
    const minutes = formattedDateTime.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/flights/${flightId}`)
      .then((response) => response.json())
      .then((flightData) => {
        setFormData(flightData);
      })
      .catch((error) => console.error("Error fetching flight data:", error));

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
  }, [flightId, token]);

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

    fetch(`http://127.0.0.1:8000/api/flights/update/${flightId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((updatedFlight) => {
        console.log("Flight updated successfully:", updatedFlight);
        navigate("/");
      })
      .catch((error) => console.error("Error updating flight:", error));
  };

  return (
    <div className="container mt-4">
      <h2>Редактировать рейс</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="departureDatetime">
          <Form.Label>Время вылета:</Form.Label>
          <Form.Control
            type="datetime-local"
            name="departure_datetime"
            value={formatDateTimeForInput(formData.departure_datetime)}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="arrivalDatetime">
          <Form.Label>Время прилета:</Form.Label>
          <Form.Control
            type="datetime-local"
            name="arrival_datetime"
            value={formatDateTimeForInput(formData.arrival_datetime)}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="route">
          <Form.Label>Маршрут:</Form.Label>
          <Form.Control
            as="select"
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
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="airplanes">
          <Form.Label>Самолет:</Form.Label>
          <Form.Control
            as="select"
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
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="crew">
          <Form.Label>Экипаж:</Form.Label>
          <Form.Control
            as="select"
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
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Обновить рейс
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
};

export default FlightEditForm;
