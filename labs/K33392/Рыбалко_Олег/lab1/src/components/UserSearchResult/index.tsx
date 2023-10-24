import { Link } from 'react-router-dom'
import styles from './UserSearchResult.module.scss'

export function UserSearchResult({ username }: { username: string }) {
  return (
    <div>
      <img
        src={`https://robohash.org/${username}`}
        alt="profile image"
        className={styles.profileImage}
      />
      <Link to={`/profile/${username}`}>@{username}</Link>
      <hr />
    </div>
  )
}

