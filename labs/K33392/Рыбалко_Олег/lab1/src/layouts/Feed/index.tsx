import { ButtonGroup, Button, Container, Row } from 'react-bootstrap'
import styles from './Feed.module.scss'
import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useState } from 'react'
import { RootState } from '@/store'
import { AuthState } from '@/store/slices/auth'
import { PostType } from '@/types'
import { FeedPost } from '@/components/FeedPost'
import { pb } from '@/constants'
import { useSelector } from 'react-redux'
import { RecordModel } from 'pocketbase'

enum Tab {
  following,
  forYou,
}

export function FeedLayout() {
  const { t } = useTranslation('feed')
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.following)
  const [feed, setFeed] = useState<PostType[]>([])
  const authStore = useSelector<RootState>((state) => state.auth) as AuthState

  const fetchFollowing = useCallback(() => {
    setCurrentTab(Tab.following)

    pb.collection('follows')
      .getFullList({ filter: `follower="${authStore.id}"` })
      .then((follows) => {
        const users: string[] = follows.map((el) => el.followee)
        if (users.length === 0) {
          return
        }
        pb.collection('posts')
          .getFullList({
            filter:
              '(' + users.map((el) => `author="${el}"`).join(' || ') + ')',
            expand: 'author',
            sort: '-created',
          })
          .then((records) => {
            setFeed(
              records.map((el) => {
                return {
                  authorUsername: el.expand!.author.username,
                  body: el.body,
                  title: el.title,
                  id: el.id,
                  likesCount: 0,
                }
              })
            )
          })
      })
      .catch((err) => console.log(err))
  }, [authStore])

  const fetchForYou = () => {
    setCurrentTab(Tab.forYou)

    pb.collection('posts')
      .getList(1, 30, {
        sort: '-created',
        filter: `author!="${authStore.id}"`,
        expand: 'author',
      })
      .then((records) =>
        setFeed(
          records.items.map((el) => {
            return {
              authorUsername: el.expand!.author.username,
              body: el.body,
              title: el.title,
              id: el.id,
              likesCount: 0,
            }
          })
        )
      )
  }

  useEffect(fetchFollowing, [fetchFollowing])

  return (
    <Container className={styles.container}>
      <Row>
        <ButtonGroup>
          <Button
            variant="dark"
            active={currentTab === Tab.following}
            onClick={fetchFollowing}
          >
            {t('headerFollowing')}
          </Button>
          <Button
            variant="dark"
            active={currentTab === Tab.forYou}
            onClick={fetchForYou}
          >
            {t('headerForYou')}
          </Button>
        </ButtonGroup>
      </Row>

      <div className="posts mt-5">
        {feed.map((post) => (
          <Row>
            <FeedPost post={post} />
          </Row>
        ))}
      </div>
    </Container>
  )
}

