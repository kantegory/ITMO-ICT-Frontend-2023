import { Form, InputGroup, Button, Container } from 'react-bootstrap'
import { ChangeEvent, ReactElement, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Search.module.scss'
import { FeedPost } from '@/components/FeedPost'
import { UserSearchResult } from '@/components/UserSearchResult'

enum Filter {
  username,
  title,
}

export function SearchLayout() {
  const [currentFilter, setCurrentFilter] = useState<Filter>(Filter.username)
  const { t } = useTranslation('search')
  const [searchResults, setSearchResults] = useState<ReactElement[]>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value)
    setCurrentFilter(val)
  }

  const getPlaceholderByFilter = useCallback(
    (f: Filter) => {
      switch (f) {
        case Filter.username:
          return t('usernameFilterPlaceholder')
        case Filter.title:
          return t('titleFilterPlaceholder')
        default:
          return
      }
    },
    [t]
  )

  const search = () => {
    switch (currentFilter) {
      case Filter.title:
        setSearchResults(
          [
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
          ].map((post) => <FeedPost post={post} />)
        )
        break
      case Filter.username:
        setSearchResults(
          ['rybalkooleg'].map((el) => <UserSearchResult username={el} />)
        )
    }
  }

  return (
    <Container className={styles.container}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder={getPlaceholderByFilter(currentFilter)}
          aria-describedby="basic-addon2"
          size="lg"
        />
        <Button variant="outline-primary" onClick={search}>
          {t('searchButton')}
        </Button>
      </InputGroup>
      <Form>
        <Form.Check
          inline
          onChange={handleChange}
          checked={currentFilter === Filter.username}
          type={'radio'}
          label={t('usernameRadioLabel')}
          name="group1"
          value={Filter.username}
        />
        <Form.Check
          inline
          onChange={handleChange}
          checked={currentFilter === Filter.title}
          type={'radio'}
          label={t('titleRadioLabel')}
          name="group1"
          value={Filter.title}
        />
      </Form>

      <div className="mt-4">{searchResults}</div>
    </Container>
  )
}

