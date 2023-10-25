import styles from './Post.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart as faHeartSolid,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { PostType } from '@/types'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { AuthState } from '@/store/slices/auth'
import { pb } from '@/constants'
import { RecordModel } from 'pocketbase'

export function Post({
  className,
  post,
  posts,
  onDelete,
  showDeleteButton,
}: {
  className?: string
  post: PostType
  onDelete?: (post: PostType) => void
  showDeleteButton: boolean
  posts: PostType[]
}) {
  const [isLiked, setLiked] = useState(false)
  const [likedRecord, setLikedRecord] = useState<RecordModel | undefined>()
  const authStore = useSelector<RootState>((state) => state.auth) as AuthState
  const [isOpen, setOpen] = useState(false)
  const textPreviewLength = 500

  useEffect(() => {
    pb.collection('likes')
      .getFirstListItem(`(post='${post.id}' && user='${authStore.id}')`)
      .then((record) => {
        setLiked(true)
        setLikedRecord(record)
      })
      .catch(() => setLiked(false))
  }, [authStore, setLiked, post])

  const [likesCount, setLikesCount] = useState(0)

  useEffect(() => {
    pb.collection('likes')
      .getFullList({ filter: `post="${post.id}"` })
      .then((records) => {
        setLikesCount(records.length)
      })
  }, [posts, post])

  const like = useCallback(() => {
    if (!isLiked) {
      pb.collection('likes')
        .create({ post: post.id, user: authStore.id })
        .then((record) => {
          setLikesCount((likes) => likes + 1)
          setLiked(true)
          setLikedRecord(record)
        })
    } else if (likedRecord !== undefined) {
      pb.collection('likes')
        .delete(likedRecord.id)
        .then(() => {
          setLikesCount((likes) => likes - 1)
          setLiked(false)
          setLikedRecord(undefined)
        })
    }
  }, [isLiked, likedRecord, authStore, post])

  return (
    <div className={`mt-3 ${className}`}>
      <div className={styles.body} onClick={() => setOpen((open) => !open)}>
        <h1 className="h4">{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: isOpen
              ? post.body
              : `${post.body.slice(0, textPreviewLength)}${
                  post.body.length > textPreviewLength ? '...' : ''
                }`,
          }}
        ></p>
      </div>

      <div className={styles.footer}>
        {showDeleteButton && (
          <button
            className={styles.deleteButton}
            onClick={() => onDelete!(post)}
          >
            <FontAwesomeIcon icon={faTrashCan} size="xl" color="red" />
            <p>&nbsp;</p>
          </button>
        )}
        <button className={styles.likeButton} onClick={like}>
          <FontAwesomeIcon
            icon={isLiked ? faHeartSolid : faHeartRegular}
            size="xl"
          />
          <p>{likesCount}</p>
        </button>
      </div>
    </div>
  )
}

