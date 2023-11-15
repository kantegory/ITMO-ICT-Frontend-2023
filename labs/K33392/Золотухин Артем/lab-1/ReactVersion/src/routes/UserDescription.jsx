import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1rem;
  background-color: #464567;
  color: #fff;
`

const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  margin-bottom: 20px;
`

const Detail = styled.p`
  margin: 5px 0;
`

export default function UserDescription() {
  let { userId } = useParams()
  const [userData, setUserData] = useState(undefined)

  async function getUserData() {
    const response = await fetch(
      `http://localhost:3000/results?id=${userId}`
    ).then((resp) => resp.json())
    setUserData(response[0]) // Assuming the response is an array with the user object at index 0
  }

  useEffect(() => {
    getUserData().catch((e) => console.error(e))
  }, [userId])

  return (
    <ContainerDiv>
      {userData === undefined ? (
        <span>Loading user data, please wait...</span>
      ) : (
        <>
          <Avatar
            src={userData.avatar}
            alt={`${userData.first_name} ${userData.last_name}`}
          />
          <h1>
            {userData.first_name} {userData.last_name}
          </h1>
          <Detail>Gender: {userData.gender}</Detail>
          <Detail>Birthdate: {userData.birthdate}</Detail>
          <Detail>Languages: {userData.languages}</Detail>
          <Detail>Education: {userData.education}</Detail>
          <Detail>Email: {userData.email}</Detail>
          <Detail>Phone: {userData.phone}</Detail>
          <Detail>Address: {userData.address}</Detail>
          <Detail>
            Website:{' '}
            <a
              href={userData.website}
              target='_blank'
              rel='noopener noreferrer'
            >
              {userData.website}
            </a>
          </Detail>
          <Detail>Job: {userData.job}</Detail>
          <Detail>Skills: {userData.skills.join(', ')}</Detail>
        </>
      )}
    </ContainerDiv>
  )
}
