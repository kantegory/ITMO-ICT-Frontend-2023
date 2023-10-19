import React, { useEffect, useState } from 'react';
import './styles/search.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [randomPeople, setRandomPeople] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  function fetchUserData() {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
        setRandomPeople(
          data.results.map((user, index) => (
            <Card key={index} style={{width: "12rem", background: "#464567", color:'white'}}>
              <Card.Img variant='top' src={user.picture.large} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        );
      });
  }

  return (
    <div className='search'>
      <div className='search-field'>
        <h1>Im clowing</h1>
      </div>

      <div className='search-users_list'>{randomPeople || <h1>Loading</h1>}</div>
    </div>
  );
}

export default Search;
