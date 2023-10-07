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
import { useNavigate } from 'react-router-dom'

export type PostType = {
  id: string
  title: string
  body: string
  authorUsername: string
  likesCount: number
  commentsCount: number
}

export function Post(post: PostType) {
  const [isLiked, setLiked] = useState(false)
  const [commentsOpen, setCommentsOpen] = useState(false)
  const navigate = useNavigate()

  const like = () => {
    setLiked((liked) => !liked)
  }

  const comment = () => {
    setCommentsOpen((isOpen) => !isOpen)
  }

  const openPost = () => {
    navigate(`/post/${post.id}`)
  }

  return (
    <>
      <div className={`mt-3 ${styles.post}`}>
        <div className={styles.body} onClick={openPost}>
          <h1 className="h4">{post.title}</h1>
          <p>{post.body.slice(0, 500)}...</p>
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
    </>
  )
}

