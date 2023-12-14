import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Profile.module.scss'
import { Post } from '@/components/Post'
import { PostType } from '@/types'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { AuthState } from '@/store/slices/auth'
import { Button, Modal, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { PencilIcon } from '@/sprites/PencilIcon'
import {
  PostsState,
  deletePost,
  fetchByAuthorId,
  publishNewPost,
} from '@/store/slices/posts'
import { getByUsername, updateBio } from '@/store/slices/users'

export function ProfileLayout() {
  const { t } = useTranslation('profile')
  const { username } = useParams<{ username: string }>()

  const authStore = useSelector<RootState>((state) => state.auth) as AuthState
  const [isAdmin, setAdmin] = useState(false)
  const [newPost, setNewPost] = useState<{
    title: string
    body: string
  }>({
    body: '',
    title: '',
  })
  const [newBio, setNewBio] = useState<string>()
  const dispatch = useDispatch()
  const postsStore = useSelector<RootState>(
    (state) => state.posts
  ) as PostsState
  const usersStore = useSelector<RootState>((state) => state.users)

  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [isFollowed] = useState(false)
  const [isEditingBio, setEditingBio] = useState(false)

  useEffect(() => {
    dispatch(getByUsername(username))
  }, [username, dispatch])

  useEffect(() => {
    setNewBio(usersStore[username].bio)
  }, [usersStore, dispatch, username])

  useEffect(() => {
    setAdmin(authStore.username === username)
  }, [authStore, username])

  useEffect(() => {
    if (usersStore[username].id !== undefined) {
      dispatch(fetchByAuthorId(usersStore[username].id))
    }
  }, [usersStore, dispatch, username])

  const publishNewPostCallback = useCallback(() => {
    dispatch(
      publishNewPost({
        title: newPost.title,
        body: newPost.body,
        author: authStore.id,
      })
    )
    setShowNewPostModal(false)
    setNewPost({ title: '', body: '' })
  }, [newPost, authStore, dispatch])

  const deletePostCallback = useCallback(
    (post: PostType) => {
      dispatch(deletePost(usersStore[username].id, post.id))
    },
    [dispatch, usersStore, username]
  )

  const updateBioCallback = useCallback(() => {
    dispatch(updateBio(username, newBio))
    setEditingBio(false)
  }, [newBio, dispatch, username])

  return (
    <>
      <Container className={styles.container}>
        <div className={styles.profileInfo}>
          <img
            className={`mt-3 ${styles.profileImage}`}
            src={`https://robohash.org/${username ?? ''}`}
            alt={t('profileImageAriaLabel')}
          />
          <h1 className="h3 mt-3 fw-normal">@{username}</h1>
          <div className={styles.bioBlock}>
            {!isEditingBio && (
              <h1 className="h5 blockquote-footer mt-2">
                {usersStore[username].bio}
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
              <Button
                onClick={updateBioCallback}
                aria-label={t('saveBioAriaLabel')}
              >
                {t('saveButton')}
              </Button>
            )}
            <Button
              variant="link"
              onClick={() => setEditingBio(!isEditingBio)}
              aria-label={t('editBioButton')}
            >
              <PencilIcon color="#0d6efd" width="1em" />
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
              aria-label={isFollowed ? t('unfollowButton') : t('followButton')}
            >
              {isFollowed ? t('unfollowButton') : t('followButton')}
            </Button>
          )}
        </div>
        <div>
          <hr />
          {(postsStore.byAuthorId[usersStore[username].id] === undefined
            ? []
            : (postsStore.byAuthorId[usersStore[username].id] as PostType[])
          ).map((post) => (
            <div className="row">
              <Post
                className={styles.post}
                post={post}
                showDeleteButton={isAdmin}
                onDelete={deletePostCallback}
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
            onClick={publishNewPostCallback}
            aria-label={t('newPostModalPostButton')}
          >
            {t('newPostModalPostButton')}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

