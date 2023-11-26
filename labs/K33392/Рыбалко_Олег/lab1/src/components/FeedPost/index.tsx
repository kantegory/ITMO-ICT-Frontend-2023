import { Post } from '@/components/Post'
import { PostType } from '@/types'
import { Link } from 'react-router-dom'
import styles from './FeedPost.module.scss'

export function FeedPost({ post }: { post: PostType }) {
  return (
    <div className={styles.post}>
      <Link
        to={`/profile/${post.authorUsername}`}
        className={styles.authorButton}
      >
        @{post.authorUsername}
      </Link>
      <Post post={post} showDeleteButton={false} />
      <hr />
    </div>
  )
}

