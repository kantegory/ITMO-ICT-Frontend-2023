import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import './styles/search.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

function Search() {
  const [randomPeople, setRandomPeople] = useState(null)
  const [peopleAmount, setPeopleAmount] = useState(10)
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsersFromLocalServer().catch((e) => console.error(e))
  }, [peopleAmount])

  function handleDescriptionClick(userId) {
    // Navigate to the description page with the user's ID
    navigate(`/description/${userId}`)
  }

  async function fetchUsersFromLocalServer() {
    const response = await fetch(
      `http://localhost:3000/results?_limit=${peopleAmount}`
    ).then((resp) => resp.json())

    setRandomPeople(
      response.map((user) => (
        <Card
          key={user.id}
          style={{
            width: '24rem',
            background: '#464567',
            color: 'white',
          }}
          onClick={() => {
            console.log(`${user.first_name} ${user.last_name} was clicked`)
          }}
        >
          <Card.Img variant='top' src={user.avatar} />
          <Card.Body>
            <Card.Title className='title-text-limit'>
              {user.first_name} {user.last_name} - {user.job}
            </Card.Title>
            <Card.Text className='text-limit'>{user.description}</Card.Text>
            <button
              className='custom-button'
              onClick={() => handleDescriptionClick(user.id)}
            >
              View Description
            </button>
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
          placeholder='How many people to find'
          value={peopleAmount}
          onChange={(e) => setPeopleAmount(e.target.value)}
        />
      </div>

      <div className='search-users_list'>
        {randomPeople || <h1>Loading...</h1>}
      </div>
    </div>
  )
}

export default Search
