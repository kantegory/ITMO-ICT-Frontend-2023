import styles from './Post.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart as faHeartSolid,
  faComment as faCommentSolid,
} from '@fortawesome/free-solid-svg-icons'
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
} from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export type PostType = {
  id: string
  title: string
  body: string
  authorUsername: string
  likesCount: number
  commentsCount: number
}

export function Post({ post }: { post: PostType }) {
  const [isLiked, setLiked] = useState(false)
  const [commentsOpen, setCommentsOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const like = () => {
    setLiked((liked) => !liked)
  }

  const comment = () => {
    setCommentsOpen((isOpen) => !isOpen)
  }

  return (
    <div className={`mt-3 ${styles.post}`}>
      <div className={styles.body} onClick={() => setOpen((open) => !open)}>
        <h1 className="h4">{post.title}</h1>
        <p>{isOpen ? post.body : `${post.body.slice(0, 500)}...`}</p>
      </div>

      <div className={styles.footer}>
        <button className={styles.likeButton} onClick={like}>
          <FontAwesomeIcon
            icon={isLiked ? faHeartSolid : faHeartRegular}
            size="xl"
          />
          <p>{post.likesCount}</p>
        </button>
        <button className={`${styles.commentButton}`} onClick={comment}>
          <FontAwesomeIcon
            icon={commentsOpen ? faCommentSolid : faCommentRegular}
            size="xl"
          />
          <p>{post.commentsCount}</p>
        </button>
      </div>
    </div>
  )
}

