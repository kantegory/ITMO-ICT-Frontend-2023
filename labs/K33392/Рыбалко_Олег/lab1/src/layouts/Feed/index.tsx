import { ButtonGroup, Button, Container, Row } from 'react-bootstrap'
import styles from './Feed.module.scss'
import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useState } from 'react'
import { RootState } from '@/store'
import { AuthState } from '@/store/slices/auth'
import { FeedPost } from '@/components/FeedPost'
import { useSelector } from 'react-redux'
import { PostsState } from '@/store/slices/posts'
import { useDispatch } from 'react-redux'
import { fetchForYou, fetchFollowing } from '@/store/slices/posts'

enum Tab {
  following,
  forYou,
}

export function FeedLayout() {
  const { t } = useTranslation('feed')
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.following)
  const authStore = useSelector<RootState>((state) => state.auth) as AuthState
  const postsStore = useSelector<RootState>(
    (state) => state.posts
  ) as PostsState
  const dispatch = useDispatch()

  const fetchFollowingData = useCallback(() => {
    setCurrentTab(Tab.following)
    dispatch(fetchFollowing(authStore.id))
  }, [authStore, dispatch])

  const fetchForYouData = () => {
    setCurrentTab(Tab.forYou)
    dispatch(fetchForYou(authStore.id))
  }

  useEffect(fetchFollowingData, [fetchFollowingData])

  return (
    <Container className={styles.container}>
      <Row>
        <ButtonGroup>
          <Button
            variant="dark"
            active={currentTab === Tab.following}
            onClick={fetchFollowingData}
          >
            {t('headerFollowing')}
          </Button>
          <Button
            variant="dark"
            active={currentTab === Tab.forYou}
            onClick={fetchForYouData}
          >
            {t('headerForYou')}
          </Button>
        </ButtonGroup>
      </Row>

      <div className="posts mt-5">
        {(currentTab === Tab.following
          ? postsStore.following
          : postsStore.forYou
        ).map((post) => (
          <Row>
            <FeedPost post={post} />
          </Row>
        ))}
      </div>
    </Container>
  )
}

