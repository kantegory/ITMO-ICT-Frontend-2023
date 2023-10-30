import "./Search.css";
import React, { useCallback, useEffect, useState } from "react";
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

  const searchLoad = React.useCallback(
    (token, query) => fetchUsers(token, query),
    []
  );

  useEffect(() => {
    searchLoad(token, sliceQuery).then((res) => {
      setData(res);
    });
  }, [searchLoad, token, sliceQuery]);

  return (
    <ListGroup>
      <div>Результат поиска по запросу: {sliceQuery}</div>
      {data.length === 0 ? (
        <>Ничего не найдено</>
      ) : (
        <>
          {data.map((element, index) => (
            <ListGroup.Item key={index}>
              <UserCell user={element} />
            </ListGroup.Item>
          ))}
        </>
      )}
    </ListGroup>
  );
}

export default Search;
