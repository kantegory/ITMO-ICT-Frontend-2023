import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import './styles/search.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'
import MyNavbar from '../components/MyNavbar'
import Dropdown from 'react-bootstrap/Dropdown'
import { useSelector, useDispatch } from 'react-redux'
import { setPeopleAmount } from '../redux/peopleSlice'
import React from 'react'

type FetchUsersProps = {
  realPeopleAmount: number
  gender?: 'Man' | 'Woman' | 'Trans'
  isPhd?: boolean
}

type RootState = {
  people: {
    amount: number
  }
}

// 3 лаб - Add filtering, post and make this CV editable/ заявка на работу. Redux - познакомиться.
function Search() {
  const [randomPeople, setRandomPeople] = useState(null)
  const peopleAmount = useSelector((state: RootState) => state.people.amount)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [hasPhD, setHasPhD] = useState<boolean>(false)
  const curGender = useRef<undefined | 'Man' | 'Woman' | 'Trans'>(undefined)

  useEffect(() => {
    fetchUsersFromLocalServer({ realPeopleAmount: peopleAmount }).catch((e) =>
      console.error(e)
    )
  }, [])

  const handleDescriptionClick = (userId) => {
    navigate(`/description/${userId}`)
  }

  const fetchUsersFromLocalServer = async ({
    realPeopleAmount,
    gender,
    isPhd,
  }: FetchUsersProps) => {
    let url = `http://localhost:3000/results?_limit=${realPeopleAmount}`
    if (curGender.current || gender) {
      url += `&gender=${curGender.current || gender}`
    }

    console.log(url)

    let response = await axios.get(url).then((resp) => resp.data)

    if (isPhd) {
      response = response.filter((user) => user.education.includes('PhD'))
    }

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
          <Card.Img variant='top' alt='user profile image' src={user.avatar} />
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
    <>
      <MyNavbar />
      <div className='search'>
        <div className='search-field'>
          <input
            className='search-field-input'
            type='number'
            placeholder='How many people to find'
            value={peopleAmount}
            onChange={(e) => {
              dispatch(setPeopleAmount(Number(e.target.value)))
              fetchUsersFromLocalServer({
                realPeopleAmount: Number(e.target.value),
              })
            }}
          />

          <Dropdown>
            <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
              Choose gender
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  fetchUsersFromLocalServer({
                    realPeopleAmount: peopleAmount,
                    gender: 'Man',
                  })
                  curGender.current = 'Man'
                }}
              >
                Only Man
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchUsersFromLocalServer({
                    realPeopleAmount: peopleAmount,
                    gender: 'Woman',
                  })
                  curGender.current = 'Woman'
                }}
              >
                Only Woman
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchUsersFromLocalServer({
                    realPeopleAmount: peopleAmount,
                    gender: 'Trans',
                  })
                  curGender.current = 'Trans'
                }}
              >
                Others
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className='checkbox'>
            <input
              type='checkbox'
              checked={hasPhD}
              onChange={(e) => {
                setHasPhD(e.target.checked)
                fetchUsersFromLocalServer({
                  realPeopleAmount: peopleAmount,
                  isPhd: e.target.checked,
                })
              }}
            />
            <span className='checkbox-label'>Has PHD</span>
          </div>
        </div>

        <div className='search-users_list'>
          {randomPeople || (
            <>
              <h1>Loading...</h1> <CircularProgress />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Search
