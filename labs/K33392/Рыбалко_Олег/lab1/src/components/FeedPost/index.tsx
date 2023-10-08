import { Post, PostType } from '@/components/Post'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import styles from './FeedPost.module.scss'

export function FeedPost({ post }: { post: PostType }) {
  const navigate = useNavigate()
  return (
    <div className={styles.post}>
      <Button
        variant="link"
        className={styles.authorButton}
        onClick={() => navigate(`/profile/${post.authorUsername}`)}
      >
        @{post.authorUsername}
      </Button>
      <Post post={post} showDeleteButton={false} />
      <hr />
    </div>
  )
}

