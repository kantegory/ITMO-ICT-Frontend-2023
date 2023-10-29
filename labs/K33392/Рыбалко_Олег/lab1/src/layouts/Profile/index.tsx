import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Profile.module.scss'
import { Post } from '@/components/Post'
import { PostType, UserDataType } from '@/types'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { AuthState } from '@/store/slices/auth'
import { Button, Modal, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { pb } from '@/constants'
import { useNavigate } from 'react-router-dom'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  const [newBio, setNewBio] = useState<string>()
  const navigate = useNavigate()

  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [isFollowed, setFollowed] = useState(false)
  const [isEditingBio, setEditingBio] = useState(false)

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
      .catch((err) => console.log(err))
    // .catch(() => navigate('/notfound'))
  }, [username, navigate])

  useEffect(() => {
    setNewBio(userData.bio)
  }, [userData])

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

  useEffect(() => {
    pb.collection('follows')
      .getFirstListItem(
        `follower="${authStore.id}" && followee="${userData.id}"`
      )
      .then(() => setFollowed(true))
  }, [authStore, userData])

  const publishNewPost = useCallback(() => {
    pb.collection('posts')
      .create({
        title: newPost.title,
        body: newPost.body,
        author: authStore.id,
      })
      .then((record) => {
        setPosts([
          {
            id: record.id,
            title: record.title,
            body: record.body,
            authorUsername: authStore.username,
            likesCount: 0,
          },
          ...posts,
        ])
        setShowNewPostModal(false)
        setNewPost({ title: '', body: '' })
      })
      .catch(() => alert('failed to publish'))
  }, [newPost, authStore, posts])

  const deletePost = (post: PostType) => {
    pb.collection('posts')
      .delete(post.id)
      .then(() => setPosts(posts.filter((el) => el.id !== post.id)))
      .catch(() => alert('failed to delete the post'))
  }

  const updateBio = useCallback(() => {
    pb.collection('users')
      .update(authStore.id, { bio: newBio })
      .then((record) => {
        setUserData({ ...userData, bio: record.bio })
        setEditingBio(false)
      })
      .catch(() => alert('failed to save'))
  }, [userData, authStore, newBio])

  const followUser = useCallback(() => {
    if (isFollowed) {
      pb.collection('follows')
        .getFirstListItem(
          `follower="${authStore.id}" && followee="${userData.id}"`
        )
        .then((record) => {
          pb.collection('follows').delete(record.id)
          setFollowed(false)
        })
    } else {
      pb.collection('follows')
        .create({
          follower: authStore.id,
          followee: userData.id,
        })
        .then(() => setFollowed(true))
    }
  }, [isFollowed, authStore, userData])

  return (
    <>
      <Container className={styles.container}>
        <div className={styles.profileInfo}>
          <img
            className={`mt-3 ${styles.profileImage}`}
            src={`https://robohash.org/${userData.username ?? ''}`}
            alt={t('profileImageAriaLabel')}
          />
          <h1 className="h3 mt-3 fw-normal">@{userData.username}</h1>
          <div className={styles.bioBlock}>
            {!isEditingBio && (
              <h1 className="h5 blockquote-footer mt-2 text-muted">
                {userData.bio}
              </h1>
            )}
            {isEditingBio && (
              <input
                type="text"
                value={newBio}
                onChange={(e) => setNewBio(e.currentTarget.value)}
                aria-label={t('newBioAriaLabel')}
              />
            )}
            {isEditingBio && (
              <Button onClick={updateBio} aria-label={t('saveBioAriaLabel')}>
                {t('saveButton')}
              </Button>
            )}
            <Button
              variant="link"
              onClick={() => setEditingBio(!isEditingBio)}
              aria-label={t('editBioButton')}
            >
              <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
        <div className={styles.postsHeader}>
          <h1 className="h3">{t('postsHeader')}</h1>
          {isAdmin && (
            <Button
              variant="link"
              onClick={() => setShowNewPostModal(true)}
              aria-label={t('newPostButton')}
            >
              {t('newPostButton')}
            </Button>
          )}
          {!isAdmin && (
            <Button
              variant="link"
              onClick={followUser}
              aria-label={isFollowed ? t('unfollowButton') : t('followButton')}
            >
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
          <Button
            variant="primary"
            onClick={publishNewPost}
            aria-label={t('newPostModalPostButton')}
          >
            {t('newPostModalPostButton')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

