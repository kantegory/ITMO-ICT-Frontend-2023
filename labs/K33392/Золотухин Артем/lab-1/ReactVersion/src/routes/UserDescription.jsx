import { useNavigate, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import MyNavbar from '../components/MyNavbar'
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

const StyledButton = styled.button`
  background: #393753;
  padding: 10px;
  border-radius: 12px;
  box-shadow: none;
  outline: none;
  color: white;
`

export default function UserDescription() {
  const { userId } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['userData', { userId: userId }],
    queryFn: () =>
      fetch(`http://localhost:3000/results?id=${userId}`)
        .then((response) => response.json())
        .then((res) => res[0]),
  })

  const handleDescriptionClick = () => {
    navigate(`/hireform/${userId}`)
  }

  return (
    <>
      <MyNavbar />
      <ContainerDiv>
        {isLoading ? (
          <span>Loading user data, please wait...</span>
        ) : isError ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <Avatar
              src={data.avatar}
              alt={`${data.first_name} ${data.last_name}`}
            />
            <h1>
              {data.first_name} {data.last_name}
            </h1>
            <Detail>Gender: {data.gender}</Detail>
            <Detail>Birthdate: {data.birthdate}</Detail>
            <Detail>Languages: {data.languages}</Detail>
            <Detail>Education: {data.education}</Detail>
            <Detail>Email: {data.email}</Detail>
            <Detail>Phone: {data.phone}</Detail>
            <Detail>Address: {data.address}</Detail>
            <Detail>
              Website:{' '}
              <a href={data.website} target='_blank' rel='noopener noreferrer'>
                {data.website}
              </a>
            </Detail>
            <Detail>Job: {data.job}</Detail>
            <Detail>
              Skills:{' '}
              {data.skills && Array.isArray(data.skills)
                ? data.skills.join(', ')
                : 'No skills available'}
            </Detail>
            <StyledButton
              onClick={() => {
                handleDescriptionClick()
              }}
            >{`Hire ${data.first_name}`}</StyledButton>
          </>
        )}
      </ContainerDiv>
    </>
  )
}
