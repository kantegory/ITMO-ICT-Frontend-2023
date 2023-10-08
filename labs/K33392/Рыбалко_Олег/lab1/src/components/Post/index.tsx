import styles from './Post.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart as faHeartSolid,
  faComment as faCommentSolid,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
} from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

export type PostType = {
  id: string
  title: string
  body: string
  authorUsername: string
  likesCount: number
  commentsCount: number
}

export function Post({
  post,
  onDelete,
  showDeleteButton,
}: {
  post: PostType
  onDelete: (post: PostType) => void
  showDeleteButton: boolean
}) {
  const [isLiked, setLiked] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const textPreviewLength = 500

  const like = () => {
    setLiked((liked) => !liked)
  }

  return (
    <div className={`mt-3 ${styles.post}`}>
      <div className={styles.body} onClick={() => setOpen((open) => !open)}>
        <h1 className="h4">{post.title}</h1>
        <p>
          {isOpen
            ? post.body
            : `${post.body.slice(0, textPreviewLength)}${
                post.body.length > textPreviewLength ? '...' : ''
              }`}
        </p>
      </div>

      <div className={styles.footer}>
        <button className={styles.likeButton} onClick={like}>
          <FontAwesomeIcon
            icon={isLiked ? faHeartSolid : faHeartRegular}
            size="xl"
          />
          <p>{post.likesCount}</p>
        </button>
        {showDeleteButton && (
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(post)}
          >
            <FontAwesomeIcon icon={faTrashCan} size="xl" color="red" />
            <p>&nbsp;</p>
          </button>
        )}
      </div>
    </div>
  )
}

