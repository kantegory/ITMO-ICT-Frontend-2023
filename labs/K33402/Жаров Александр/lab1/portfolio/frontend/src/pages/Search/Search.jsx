import "./Search.css";
import React, { useCallback, useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import { getCookie } from "../../utils/cookiesUtils";
import { fetchUsers } from "../../utils/fetchUtils";
import UserCell from "../../components/UserCell";

function Search() {
  const { query } = useParams();
  const token = getCookie("token");

  const [data, setData] = useState([]);

  const searchLoad = React.useCallback((token) => fetchUsers(token), []);

  useEffect(() => {
    console.log("make search", token);
    searchLoad(token, query).then((res) => {
      setData(res);
    });
  }, [searchLoad, token, query]);

  return (
    <ListGroup>
      {data &&
        data.map((element, index) => (
          // <UserCell key={index} user={element} />
          <ListGroup.Item key={index}>
            <UserCell user={element} />
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default Search;
