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
        title: 'RE: LAST NIGHT',
        body: 'Club culture around late 70s and 80s nightlife in NYC was a special, much talked about and written about thing. From the star studded midtown clubs like studio 54 and the first danceteria to the downtown clubs like Mudd + paradise garage. The figures, the music, the looks, the lack of regulation haha. I recognize NY wasn’t all lasers and disco lighting and that simultaneously, there was a lot of crime and poverty and that a huge part of club culture, the gay community, at that time were being wiped out by HIV + AIDS. Now in 2019, there’s a pill you can take every day that will at a better than 90% chance prevent you from contracting HIV. This pill was approved by the FDA in 2012. The pricing strategy behind it is malicious in my opinion and so it’s public perception is marred and rightfully so. But the fact remains that despite price being a very real barrier to this potentially life saving drug for some, the other very real barrier is awareness. I decided to name, what was otherwise going to be a night of lights and music inspired by an era of clubbing that I loved PrEP+ because while designing the club which is inside of an old glass factory basement in Queens (shoutout to The Basement that runs a very awesome techno night on Fridays after us) I started to imagine in an era where so many lives were lost and so much promise was lost forever along with them, what would it have been like if something, anything had existed that in all probability would’ve saved thousands and thousands of lives. I’m an artist, it’s core to my job to imagine realities that don’t necessarily exist and it’s a joy to. A couple days before we threw the party, I was discussing this subject with my team and one of the architects I work with thought that PrEP as a drug had reached ‘100% saturation’ so far as awareness. I thought he was dead wrong so I asked a friend (who I won’t name haha) if he knew what PrEP was and his response was ‘isn’t that some type of viagra or something’. My ex who I was with for several years didn’t know about it when we first met at a gay club in LA. Awareness isn’t always what we’d hope it would be. But anyway, I’m ranting. I’m happy that folks are talking about the subject in the first place. Thank you to everyone who came out and danced with us last night. Y’all were beautiful and the energy was right! Thank you Bouffant Bouffant, Sango, Justice and Sherelle for your sets last night they were soo good man. Oh one more thing, I saw someone say that this was a PR stunt etc etc, pshhh bitch pls come get a drink next time and I’ll put several barstools out so you can have as many seats as you need. All my love everybody really. Stay safe.',
        authorUsername: 'rybalkooleg',
        likesCount: 100,
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

