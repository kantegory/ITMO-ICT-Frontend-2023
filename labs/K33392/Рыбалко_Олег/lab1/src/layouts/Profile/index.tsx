import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Profile.module.scss'
import { Post, PostType } from '@/components/Post'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { AuthState } from '@/store/slices/auth'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

type UserData = {
  username: string | undefined
  bio: string | undefined
}

type NewPostData = {
  title: string
  body: string
}

export function ProfileLayout() {
  const { t } = useTranslation('profile')
  const { username } = useParams<{ username: string }>()
  const [userData, setUserData] = useState<UserData>({} as UserData)

  const authStore = useSelector<RootState>((state) => state.auth) as AuthState
  const [isAdmin, setAdmin] = useState(false)
  const [posts, setPosts] = useState<PostType[]>([])
  const [newPost, setNewPost] = useState<NewPostData>({ body: '', title: '' })

  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [isFollowed, setFollowed] = useState(false)

  // TODO: fetch user data
  useEffect(() => {
    setUserData({
      username: username!,
      bio: 'Frontend develop from Saint-P',
    })
  }, [username])

  useEffect(() => {
    setAdmin(authStore.username === username)
  }, [authStore, username])

  // TODO: fetch posts
  useEffect(() => {
    setPosts([
      {
        id: '1',
        title: 'MARS',
        body: `Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.

        Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. The Egyptians called it "Her Desher," meaning "the red one."
        
        Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.`,
        authorUsername: 'rybalkooleg',
        likesCount: 100,
      },
      {
        id: '2',
        title: 'MERCURY',
        body: `Mercury—the smallest planet in our solar system and nearest to the Sun—is only slightly larger than Earth's Moon. Its surface is covered in tens of thousands of impact craters.

        From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter.
        
        Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system— that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Mercury is appropriately named for the swiftest of the ancient Roman gods.`,
        authorUsername: 'rybalkooleg',
        likesCount: 158,
      },
    ])
  }, [])

  const publishNewPost = useCallback(() => {
    // TODO: use api
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
    setPosts(posts.filter((val) => val.id !== post.id))
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

