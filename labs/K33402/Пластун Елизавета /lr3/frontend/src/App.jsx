import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { PrivateRoute } from "./components/PrivatRoute";
import "./App.css";
import FlightForm from "./pages/FlightForm";
import RouteForm from "./pages/RouteForm";
import FlightEditForm from "./pages/FlightEditForm";
import Registration from "./pages/Registration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route element={<PrivateRoute />}>
            <Route index element={<Main />} />
            <Route path="/flight/new" element={<FlightForm />} />
            <Route path="/flight/edit/:flightId" element={<FlightEditForm />} />

            <Route path="/route/new" element={<RouteForm />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
