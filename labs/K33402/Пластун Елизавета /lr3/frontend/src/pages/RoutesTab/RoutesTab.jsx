import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useUser from "../../hooks/useUser";
import Arrow from "../../assets/Arrow.svg";
import Delete from "../../assets/delete.svg";

function RoutesTab() {
  const navigate = useNavigate();
  const { setToken, token } = useUser();
  const [routes, setRoutes] = useState([]);

  const onDelete = (route) => {
    fetch(`http://127.0.0.1:8000/api/routes/delete/${route.id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then(() => getRotes());
  };

  const getRotes = useCallback(() => {
    fetch("http://localhost:8000/api/routes/all/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setRoutes(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [token]);

  useEffect(() => getRotes(), [getRotes]);
  return (
    <div>
      <Button onClick={() => navigate("/route/new")} variant="outline-primary">
        Создать маршрут
      </Button>
      {routes ? (
        <div className="cell-group">
          {routes.map((route, id) => (
            <div key={id} className="cell-container">
              <div className="cell-route">
                <div>{route.departure_point}</div>
                <img src={Arrow} alt="" className="arrow" />
                <div>{route.destination_point}</div>
              </div>
              <span
                  className="cell-button"
                  onClick={() => onDelete(route)}
                     >
                    Удалить
               </span>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default RoutesTab;
