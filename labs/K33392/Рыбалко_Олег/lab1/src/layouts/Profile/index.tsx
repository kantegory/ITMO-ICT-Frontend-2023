import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Profile.module.scss'
import { Post } from '@/components/Post'
import { PostType, UserDataType } from '@/types'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { AuthState } from '@/store/slices/auth'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { pb } from '@/constants'
import { useNavigate } from 'react-router-dom'

export function ProfileLayout() {
  const { t } = useTranslation('profile')
  const { username } = useParams<{ username: string }>()
  const [userData, setUserData] = useState<UserDataType>({} as UserDataType)

  const authStore = useSelector<RootState>((state) => state.auth) as AuthState
  const [isAdmin, setAdmin] = useState(false)
  const [posts, setPosts] = useState<PostType[]>([])
  const [newPost, setNewPost] = useState<{
    title: string
    body: string
  }>({
    body: '',
    title: '',
  })
  const navigate = useNavigate()

  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [isFollowed, setFollowed] = useState(false)

  useEffect(() => {
    pb.collection('users')
      .getFirstListItem(`username="${username}"`)
      .then((record) => {
        setUserData({
          username: record.username,
          bio: record.bio,
          id: record.id,
        })
      })
      .catch(() => navigate('/notfound'))
  }, [username, navigate])

  useEffect(() => {
    setAdmin(authStore.username === username)
  }, [authStore, username])

  useEffect(() => {
    pb.collection('posts')
      .getFullList({
        filter: `author="${userData.id}"`,
        expand: 'author',
        sort: '-created',
      })
      .then((records) =>
        setPosts(
          records.map((r) => {
            return {
              id: r.id,
              title: r.title,
              body: r.body,
              authorUsername: r.expand!.author.username,
              likesCount: r.likesCount,
            }
          })
        )
      )
  }, [userData])

  const publishNewPost = useCallback(() => {
    setPosts([
      {
        id: 'test',
        title: newPost.title,
        body: newPost.body,
        authorUsername: authStore.username,
        likesCount: 0,
      },
      ...posts,
    ])
    setShowNewPostModal(false)
    setNewPost({ title: '', body: '' })
  }, [newPost, authStore, posts])

  const deletePost = (post: PostType) => {
    pb.collection('posts')
      .delete(post.id)
      .then(() => setPosts(posts.filter((el) => el.id !== post.id)))
      .catch(() => alert('failed to delete the post'))
  }

  return (
    <>
      <Container className={styles.container}>
        <div className={styles.profileInfo}>
          <img
            className={`mt-3 ${styles.profileImage}`}
            src={`https://robohash.org/${userData.username ?? ''}`}
            alt="Profile image"
          />
          <h1 className="h3 mt-3 fw-normal">@{userData.username}</h1>
          <h1 className="h5 blockquote-footer mt-2 text-muted">
            {userData.bio}
          </h1>
        </div>
        <div className={styles.postsHeader}>
          <h1 className="h3">{t('postsHeader')}</h1>
          {isAdmin && (
            <Button variant="link" onClick={() => setShowNewPostModal(true)}>
              {t('newPostButton')}
            </Button>
          )}
          {!isAdmin && (
            <Button variant="link" onClick={() => setFollowed(!isFollowed)}>
              {isFollowed ? t('unfollowButton') : t('followButton')}
            </Button>
          )}
        </div>
        <div>
          <hr />
          {posts.map((post) => (
            <div className="row">
              <Post
                className={styles.post}
                post={post}
                showDeleteButton={isAdmin}
                onDelete={deletePost}
                posts={posts}
              />
            </div>
          ))}
        </div>
      </Container>

      <Modal show={showNewPostModal} onHide={() => setShowNewPostModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{t('newPostModalHeader')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>{t('newPostModalTitleLabel')}</Form.Label>
              <Form.Control
                type="text"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.currentTarget.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>{t('newPostModalBodyLabel')}</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                value={newPost.body}
                onChange={(e) =>
                  setNewPost({ ...newPost, body: e.currentTarget.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={publishNewPost}>
            {t('newPostModalPostButton')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

