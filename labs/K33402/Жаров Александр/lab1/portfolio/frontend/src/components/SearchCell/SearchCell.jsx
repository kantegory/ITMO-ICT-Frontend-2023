import "./SearchCell.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const SearchCell = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/:${searchQuery}`);
    console.log("Вы ищете:", searchQuery);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <Button variant="outline-success" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
};

export default SearchCell;
