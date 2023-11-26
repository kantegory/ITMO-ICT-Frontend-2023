import "./Search.css";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import { getCookie } from "../../utils/cookiesUtils";
import { fetchUsers } from "../../utils/fetchUtils";
import UserCell from "../../components/UserCell";

function Search() {
  const { query } = useParams();
  const sliceQuery = query.slice(1);
  const token = getCookie("token");

  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const searchLoad = React.useCallback(
    (token, query) => fetchUsers(token, query),
    []
  );

  useEffect(() => {
    searchLoad(token, sliceQuery)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, [searchLoad, token, sliceQuery]);

  return error ? (
    <h4 className="full-page-div text">{error}</h4>
  ) : (
    <ListGroup className="full-page-div">
      {data.length === 0 ? (
        <h4 className="full-page-div text">Загрузка</h4>
      ) : (
        <>
          {data.map((element, index) => (
            <ListGroup.Item
              style={{ backgroundColor: "var(--body-background)" }}
              key={index}
            >
              <UserCell user={element} />
            </ListGroup.Item>
          ))}
        </>
      )}
    </ListGroup>
  );
}

export default Search;
