import { useEffect, useState } from 'react'
import './styles/search.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function Search() {
  const [randomPeople, setRandomPeople] = useState(null)
  const [peopleAmount, setPeopleAmount] = useState(10)
  useEffect(() => {
    fetchUserData().catch((e) => console.error(e))
  }, [peopleAmount])

  async function fetchRandomTextData() {
    const response = await axios.get('https://loripsum.net/api/1/short/ol')
    return response.data
  }

  async function fetchUserData() {
    const userData = await fetch(
      `https://randomuser.me/api/?results=${peopleAmount}`
    ).then((response) => response.json())

    const userText = await fetchRandomTextData()

    setRandomPeople(
      userData.results.map((user, index) => (
        <Card
          key={index}
          style={{
            width: '24rem',
            background: '#464567',
            color: 'white',
          }}
          onClick={() => {
            console.log(`${user.name.first} ${user.name.last} was clicked`)
          }}
        >
          <Card.Img variant='top' src={user.picture.large} />
          <Card.Body>
            <Card.Title>
              {user.name.first} {user.name.last}
            </Card.Title>
            <Card.Text
              dangerouslySetInnerHTML={{ __html: userText }}
            ></Card.Text>
          </Card.Body>
        </Card>
      ))
    )
  }

  return (
    <div className='search'>
      <div className='search-field'>
        <input
          className='search-field-input'
          type='number'
          placeholder='How many people to find '
          value={peopleAmount}
          onChange={(e) => setPeopleAmount(e.target.value)}
        />
      </div>

      <div className='search-users_list'>
        {randomPeople || <h1>Loading</h1>}
      </div>
    </div>
  )
}

export default Search
