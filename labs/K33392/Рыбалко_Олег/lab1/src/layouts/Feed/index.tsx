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

    // TODO: fetch from the API
    setFeed([
      {
        authorUsername: 'nasa',
        body: `
        Technicians encapsulate NASA’s Psyche spacecraft in its payload fairings – the cone at the top of the rocket – at the Astrotech Space Operations facility in Titusville, Florida, on Tuesday, Oct. 3, 2023. Next, the spacecraft will move to SpaceX facilities at NASA’s Kennedy Space Center. Bound for a metal-rich asteroid of the same name, the Psyche mission is targeting Thursday, Oct. 12, to launch from Kennedy. Liftoff, atop a SpaceX Falcon Heavy rocket, is targeted for 10:16 a.m. EDT from Launch Complex 39A. 
        Technicians encapsulate NASA’s Psyche spacecraft in its payload fairings – the cone at the top of the rocket – at the Astrotech Space Operations facility in Titusville, Florida, on Tuesday, Oct. 3, 2023. Next, the spacecraft will move to SpaceX facilities at NASA’s Kennedy Space Center. Photo credit: NASA/Ben Smegelsky
        In the early hours of Oct. 6, workers transported NASA’s Psyche spacecraft to the SpaceX hangar at Launch Complex 39A at the agency’s Kennedy Space Center in preparation for launch. Earlier in the week, technicians completed encapsulation of the spacecraft, along with the DSOC (Deep Space Optical Communications) technology demonstration, inside a clean room at the Astrotech Space Operations facility in Titusville, Florida.
        
        The fairings will protect the spacecraft from aerodynamic pressure and heat during launch. After the rocket’s second stage climbs to a high enough altitude, the fairings will separate from the vehicle and return to Earth. Soon, technicians will mate the spacecraft to a SpaceX Falcon Heavy rocket in preparation for launch, which is targeted for 10:16 a.m. EDT, Thursday, Oct. 12.
        
        Psyche will be NASA’s first primary science mission launched to orbit by a Falcon Heavy rocket, and the second interplanetary mission SpaceX has launched on behalf of NASA. NASA’s Launch Services Program certified the rocket for use with the agency’s most complex and highest priority missions in early 2023 at the conclusion of a 2.5 year effort.`,
        title: 'NASA’s Psyche Mission Advances to Launch Complex 39A',
        id: '1',
        likesCount: 100,
      },
      {
        authorUsername: 'gitlab',
        body: `CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment. CI/CD is a solution to the problems integrating new code can cause for development and operations teams (AKA "integration hell").

        Specifically, CI/CD introduces ongoing automation and continuous monitoring throughout the lifecycle of apps, from integration and testing phases to delivery and deployment. Taken together, these connected practices are often referred to as a "CI/CD pipeline" and are supported by development and operations teams working together in an agile way with either a DevOps or site reliability engineering (SRE) approach.`,
        title: 'CI/CD',
        id: '1',
        likesCount: 100,
      },
    ])
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

