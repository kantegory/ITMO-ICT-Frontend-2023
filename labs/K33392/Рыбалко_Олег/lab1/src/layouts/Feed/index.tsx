import { ButtonGroup, Button, Container, Row } from 'react-bootstrap'
import styles from './Feed.module.scss'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { PostType } from '@/components/Post'
import { FeedPost } from '@/components/FeedPost'

enum Tab {
  following,
  forYou,
}

export function FeedLayout() {
  const { t } = useTranslation('feed')
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.following)
  const [feed, setFeed] = useState<PostType[]>([])

  const fetchFollowing = () => {
    setCurrentTab(Tab.following)

    // TODO: fetch from the API
    setFeed([
      {
        authorUsername: 'rybalkooleg',
        body: 'Praesent laoreet, ipsum non blandit aliquam, erat nisi venenatis nibh, quis mollis libero nisl eu sem. Curabitur lacinia elit ac libero blandit, hendrerit lacinia magna pretium. Aliquam iaculis tempor nisl sit amet tincidunt. Curabitur ac augue auctor, dictum tellus non, sodales est. Phasellus sodales sit amet sapien eu faucibus. In lectus sem, volutpat non leo eu, tempus congue tellus. Nullam ultricies interdum lorem. Donec hendrerit, massa id pharetra commodo, ex lorem dignissim augue, molestie pellentesque felis elit sit amet felis.',
        title: 'IT`S MY FIRST POST HERE',
        id: '1',
        likesCount: 100,
      },
      {
        authorUsername: 'aliens',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis felis ac convallis pulvinar. Sed suscipit nec nibh vel elementum. Nullam elit nulla, vulputate in augue vitae, consequat posuere lorem. Aliquam porttitor vitae ex consectetur placerat. Sed mollis nulla vel faucibus viverra. Quisque dictum est ut nisl eleifend imperdiet. Integer a porttitor est, vitae facilisis leo. In sed lacus erat. Ut eget iaculis orci. Vivamus tincidunt nunc mollis, venenatis lorem ut, sollicitudin nunc. Donec et lacus sem. Praesent bibendum nunc ut enim pellentesque consequat. Morbi ac dapibus est, sit amet lobortis neque. Curabitur ut venenatis purus. Quisque vehicula imperdiet nunc. Nam a aliquam purus.',
        title: 'WE ARE COMING SOON  ',
        id: '1',
        likesCount: 100,
      },
    ])
  }

  const fetchForYou = () => {
    setCurrentTab(Tab.forYou)
    setFeed([])
  }

  useEffect(fetchFollowing, [])

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

