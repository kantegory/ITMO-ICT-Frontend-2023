import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useUser from "../../hooks/useUser";
import Arrow from "../../assets/Arrow.svg";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import Up from "../../assets/Up.svg";
import Down from "../../assets/Down.svg";

function FlightCell({ flight, getFlights }) {
  const navigate = useNavigate();
  const { token } = useUser();
  const [routeData, setRouteData] = useState("");

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

  const onDelete = (flight) => {
    fetch(`http://127.0.0.1:8000/api/flights/delete/${flight.id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then(() => getFlights());
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/routes/${flight.route}/`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => setRouteData(result));
  }, [token, flight]);

  return (
    <div className="cell-container">
      <div className="cell-time">
        <div className="cell-datatime">

            <div className="cell-hours">
              {formatDateTime(flight.departure_datetime)[0]}
            </div>
            <div className="cell-date">
              {formatDateTime(flight.departure_datetime)[1]}
            </div>

        </div>
        <div className="cell-datatime">

            <div className="cell-hours">
              {formatDateTime(flight.arrival_datetime)[0]}
            </div>
            <div className="cell-date">
              {formatDateTime(flight.arrival_datetime)[1]}
            </div>

        </div>
      </div>
      <div className="cell-route">
        <div>{routeData.departure_point}</div>
        <img src={Arrow} alt="" className="arrow" />
        <div>{routeData.destination_point}</div>
      </div>
      <div className="cell-button-group">
      <span
          className="cell-button"
          onClick={() => navigate(`flight/edit/${flight.id}`)}
          >
             Редактировать
        </span>
        <span
          className="cell-button"
          onClick={() => onDelete(flight)}
          >
             Удалить
        </span>
      </div>
    </div>
  );
}

export default FlightCell;
