import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useUser from "../../hooks/useUser";
import FlightCell from "./FlightCell";
import "./FlightTab.css";

function FlightsTab() {
  const navigate = useNavigate();
  const { token } = useUser();
  const [flights, setFlights] = useState([]);

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

  useEffect(() => getFlights(), [getFlights]);

  return (
    <div>
      {flights ? (
        <>
          <Button
            onClick={() => navigate("/flight/new")}
            variant="outline-primary"
          >
            Создать полет
          </Button>
          <div className="cell-group">
            {flights.map((flight, id) => (
              <FlightCell flight={flight} getFlights={getFlights} key={id} />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FlightsTab;
