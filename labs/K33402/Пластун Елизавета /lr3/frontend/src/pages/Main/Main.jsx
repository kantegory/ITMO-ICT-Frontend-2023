import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Header from "../../components/Header";
import FlightsTab from "../FlightsTab";
import RoutesTab from "../RoutesTab";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import InfoTab from "../InfoTab";

function Main() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const { token } = useUser();

  useEffect(() => {
    fetch("http://localhost:8000/api/auth/users/me", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [token]);

  return (
    <>
      <Header username={user.username} />
      <div className="main-container container">
        <Tabs
          defaultActiveKey="flights"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="flights" title="Рейсы">
            <FlightsTab />
          </Tab>
          <Tab eventKey="routes" title="Маршруты">
            <RoutesTab />
          </Tab>
          <Tab eventKey="info" title="Места на рейс">
            <InfoTab />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Main;
