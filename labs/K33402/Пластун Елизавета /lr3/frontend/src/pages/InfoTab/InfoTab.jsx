import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useUser from "../../hooks/useUser";
import Arrow from "../../assets/Arrow.svg";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import Up from "../../assets/Up.svg";
import Down from "../../assets/Down.svg";

function InfoTab() {
  const { token } = useUser();
  const [flights, setFlights] = useState([]);
  const [flight, setFlight] = useState([]);
  const [info, setInfo] = useState("");
  const [routeData, setRouteData] = useState("");
  const [formData, setFormData] = useState({
    id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      id: value,
    });
    getOneFlight(value);
    getInfo(value);
  };
  const getFlights = useCallback(() => {
    fetch("http://localhost:8000/api/flights/all/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setFlights(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [token]);

  const getOneFlight = useCallback(
    (id) => {
      fetch(`http://localhost:8000/api/flights/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setFlight(result);
        })
        .catch((error) => console.error("Error fetching data:", error));

      fetch(`http://127.0.0.1:8000/api/routes/${flight.route}/`, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => setRouteData(result));
    },
    [token, flight]
  );

  const getInfo = useCallback(
    (id) => {
      fetch(`http://localhost:8000/api/available_seats/${id}/`, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setInfo(result.available_seats);
          console.log(info);
        })
        .catch((error) => console.error("Error fetching data:", error));
    },
    [token, info]
  );

  const formatDateTimeForInput = (dateTime) => {
    const formattedDateTime = new Date(dateTime);
    const year = formattedDateTime.getFullYear();
    const month = (formattedDateTime.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = formattedDateTime.getDate().toString().padStart(2, "0");
    const hours = formattedDateTime.getHours().toString().padStart(2, "0");
    const minutes = formattedDateTime.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const formatDateTime = (dateTime) => {
    const formattedDateTime = new Date(dateTime);
    const year = formattedDateTime.getFullYear();
    const month = (formattedDateTime.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = formattedDateTime.getDate().toString().padStart(2, "0");
    const hours = formattedDateTime.getHours().toString().padStart(2, "0");
    const minutes = formattedDateTime.getMinutes().toString().padStart(2, "0");

    return [`${hours}:${minutes}`, `${day}.${month}.${year}`];
  };

  useEffect(() => getFlights(), [getFlights]);

  return (
    <>
      <Form>
        <Row className="search-cell">
          <Form.Group controlId="routes-seat">
            <Form.Select
              name="flight"
              value={formData.id}
              onChange={handleChange}
            >
              <option value="">Выбор рейса</option>
              {flights.map((flight) => (
                <option key={flight.id} value={String(flight.id)}>
                  {flight.id}
                  {": "}
                  {formatDateTimeForInput(flight.departure_datetime)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
      </Form>
      {routeData ? (
        <>
          <div className="cell-container mt-3">
            <div className="cell-time">
              <div className="cell-datatime">
                <div>
                  <div className="cell-hours">
                    {formatDateTime(flight.departure_datetime)[0]}
                  </div>
                  <div className="cell-date">
                    {formatDateTime(flight.departure_datetime)[1]}
                  </div>
                </div>
              </div>
              <div className="cell-datatime">
                <div>
                  <div className="cell-hours">
                    {formatDateTime(flight.arrival_datetime)[0]}
                  </div>
                  <div className="cell-date">
                    {formatDateTime(flight.arrival_datetime)[1]}
                  </div>
                </div>
              </div>
            </div>
            <div className="cell-route">
              <div>{routeData.departure_point}</div>
              <img src={Arrow} alt="" className="arrow" />
              <div>{routeData.destination_point}</div>
            </div>
            <div className="cell-button-group">
              <div className="info-cell">{info} мест</div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default InfoTab;
