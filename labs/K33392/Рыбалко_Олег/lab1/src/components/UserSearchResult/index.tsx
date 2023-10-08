import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import styles from './UserSearchResult.module.scss'

export function UserSearchResult({ username }: { username: string }) {
  const navigate = useNavigate()

  return (
    <div>
      <img
        src={`https://robohash.org/${username}`}
        alt="profile image"
        className={styles.profileImage}
      />
      <Button
        variant="link"
        size="lg"
        onClick={() => navigate(`/profile/${username}`)}
      >
        @{username}
      </Button>
      <hr />
    </div>
  )
}

